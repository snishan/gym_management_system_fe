import React, { useState, useEffect,useRef } from "react";
import '../../assets/scss/member.scss';
import UserHeader from "../../components/usersHeader";
import Plus from "../../assets/img/member/plus-icon.svg"
import Minus from "../../assets/img/member/minus-icon.svg"
import { Icon } from '@iconify/react';
import { Input } from "../../components/Input";
import { FormProvider, useForm,Controller } from "react-hook-form";
import {
    appointment_data_validation,
    appointment_time_validation,
    remark_validation
} from "../../utils/inputValidations";
import apiClient from "../../Services/index"
import { Urls } from "../../urls";
import toast from "react-hot-toast";
import DeleteModal from "../../components/deleteModal"
import { useReactToPrint } from 'react-to-print';

const MemberPage = () => {
    const loginStatus = localStorage.getItem('userLogin')
    const componentRef = useRef();
    const [tab, setTab] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const methods = useForm();
    const { control, handleSubmit } = useForm();
    const [userId, setUserId] = useState('');
    const [productList, setProductList] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedData, setSelectedData] = useState({});
    const [productListCSV, setProductListCSV] = useState([]);
    const [appointmentList, setAppointmentList] = useState([]);

    const roleOptions = [
        { label: "Mr. Udesh", value: "Mr. Udesh" },
    ];

    useEffect(() => {
        if (loginStatus !== null) {
            var myObj = JSON.parse(loginStatus);
            setUserId(myObj.id)
        } else {
            setUserId('')
        }
    }, [])

    useEffect(() => {
     if (tab==1) {
        if (userId) {
            getProducts()
        }
     }else if(tab==3){
        getAllAppointments()
     }
    }, [tab])
    

    useEffect(() => {
        if (userId) {
            getProducts()
        }
    }, [userId])

    useEffect(() => {
        if (productList.length > 0) {
            let totalPrice = 0;

            productList.forEach(item => {
                const { count, product } = item;
                const itemPrice = count * product.price;
                totalPrice += itemPrice;
            });
            setTotalPrice(totalPrice)
        }

        if (productList) {
            const transformedData = productList.map(item => {
                return {id:item.id, name: item.name,content:item.content, count:item.count, price: item.price , }; 
            });
            setProductListCSV(transformedData)
          }
    }, [productList])

    const getAllAppointments=async ()=>{
        try {
            const response = await apiClient.get(Urls.create_appointment);
            if (response) {
                const myAppoint = response.data.data.filter(entry => entry.user.id === userId);
                setAppointmentList(myAppoint)
            }

        } catch (error) {
            setAppointmentList([])
        }
    }
  

    const getProducts = async () => {
        try {
            const response = await apiClient.get(Urls.get_cart_item_by_user(userId));
            if (response) {
                setProductList(response.data.data)
            }

        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")
        }
    }

    const onSubmit = methods.handleSubmit(async (data) => {

        const params={
            "trainerName": data.trainers,
            "date": data.date,
            "time": data.time,
            "message": data.message,
            "user":{"id" :userId}
          }

          try {
            const response = await apiClient.post(Urls.create_appointment,params);
            if (response) {
                methods.reset();
                toast.success( "Appointment Created Successfully")
            }

        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")
        }
    });

    const handleChnageCount = async (count, cartId, productId) => {
        const params = {
            count: count,
        }
        try {
            const response = await apiClient.put(Urls.update_cart(cartId, productId), params);
            if (response) {
                toast.success("Cart data updated successfully")
                getProducts()
            }

        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")
        }
    }

    const handleHideDeleteModal = () => {
        setShowDeleteModal(false)
    }

    const handleDeleteData = async (data) => {
        try {
            const response = await apiClient.delete(Urls.delete_cart(data));
            if (response) {
                toast.success("Cart Data Deleted Successfully")
                handleHideDeleteModal()
                getProducts()
            }

        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")

        }
    }
    const handleDelete = (data) => {
        setSelectedData(data)
        setShowDeleteModal(true)
    }
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

    return (
        <div className="member-page">
            <div className="row">
                <UserHeader />
            </div>
            <div className="row container m-auto">
                <div className="col-4 left-menu-section">
                    <div className="main-button left-menu">
                        <a className={tab == 1 ? 'active-tab' : ''} onClick={() => setTab(1)}>My Cart</a>
                    </div>
                    <div className="main-button mt-4 left-menu">
                        <a className={tab == 2 ? 'active-tab' : ''} onClick={() => setTab(2)}>Make an Appointment</a>
                    </div>
                    <div className="main-button mt-4 left-menu">
                        <a className={tab == 3 ? 'active-tab' : ''} onClick={() => setTab(3)}>My Appointment History</a>
                    </div>
                </div>
                <div className="col-8 right-menu-section">
                {tab == 1 ?<div className="donnload-section"><button onClick={()=>handlePrint()} disabled={productListCSV.length==0} className="submit-button donload-btn">Print My Cart</button></div>:''}
                    {tab == 1 ?
                        <div className="card">

                            <table ref={componentRef} className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Availbale Stock</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productList.length == 0 ? <tr>No Data Available</tr> : productList.map((data, index) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{data.id}</td>
                                                <td><img className='cart-img' src={"data:image/png;base64," + data.product.imageData} /></td>
                                                <td>{data.product.name}</td>
                                                <td>{data.product.count}</td>
                                                <td><p className='count'>
                                                    <img onClick={() => handleChnageCount(data.count + 1, data.id, data.product.id)} className={data.product.count == 0 ? 'plus-icon disable' : 'plus-icon'} src={Plus} alt='plus' />
                                                    {data.count}
                                                    <img onClick={() => handleChnageCount(data.count - 1, data.id, data.product.id)} className={data.count == 1 ? 'minus-icon disable' : 'minus-icon'} src={Minus} alt='plus' />
                                                </p>
                                                </td>
                                                <td>{data.product.price}</td>
                                                <td><Icon onClick={() => handleDelete(data)} color="red" className='delete-icon' icon="fluent:delete-28-regular" /></td>
                                            </tr>)
                                    })}

                                </tbody>
                            </table>
                            {productList.length == 0 ? '' : <><p className='total-balance'>Total Cost: <span>Rs. {totalPrice}</span></p></>}
                        </div>
                        :
                        (tab==2?<div className="card p-5">
                            <FormProvider {...methods}>
                                <form
                                    onSubmit={(e) => e.preventDefault()}
                                    noValidate
                                    autoComplete="off"
                                    className=""
                                >
                                    <div className="new-grid-container">
                                        <div className="row">
                                            <div className="col-6">
                                                <Input  {...appointment_data_validation} />
                                            </div>
                                            <div className="col-6">
                                                <Input {...appointment_time_validation} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <Input {...remark_validation} />
                                            </div>
                                            <div className="col-6">
                                                <Input
                                                    name="trainers"
                                                    label="Trainers"
                                                    id="trainers"
                                                    select
                                                    options={roleOptions}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4  grid-container">
                                        <button className="navigation-button">
                                            Cancel
                                        </button>
                                        <button onClick={onSubmit} className="submit-button">
                                            Submit
                                        </button>

                                    </div>
                                </form>
                            </FormProvider>
                        </div>:
                         <div className="card">
                         <table className="table">
                             <thead>
                                 <tr>
                                     <th scope="col">Id</th>
                                     <th scope="col">Date</th>
                                     <th scope="col">Time</th>
                                     <th scope="col">Message</th>
                                     <th scope="col">Trainer</th>
                                     <th scope="col">Status</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {appointmentList.length == 0 ? <tr>No Data Available</tr> : appointmentList.map((data, index) => {
                                     return (
                                         <tr key={data.id}>
                                             <td>{data.id}</td>
                                             <td>{data.date}</td>
                                             <td>{data.time}</td>
                                             <td>{data.message}</td>
                                             <td>{data.trainerName}</td>
                                             <td>{data.status}</td>
                                         </tr>)
                                 })}
     
                             </tbody>
                         </table>
                     </div>
                        )
                    }
                </div>
            </div>
            <DeleteModal
                show={showDeleteModal}
                onHide={handleHideDeleteModal}
                onDelete={handleDeleteData}
                data={selectedData}
            />
        </div>
    );
};

export default MemberPage;
