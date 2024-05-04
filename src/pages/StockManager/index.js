import React, { useState, useEffect,useRef } from "react";
import '../../assets/scss/member.scss'
import UserHeader from "../../components/usersHeader";
import Plus from "../../assets/img/member/plus-icon.svg"
import Minus from "../../assets/img/member/minus-icon.svg"
import { Icon } from '@iconify/react';
import { Input } from "../../components/Input";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import {
    prduct_name_validation,
    prduct_discription_validation,
    prduct_count_validation,
    prduct_price_validation,
    prduct_img_validation
} from "../../utils/inputValidations";
import { RiLoginBoxLine } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import { BsFillCheckSquareFill } from "react-icons/bs";
import apiClient from "../../Services/index"
import { Urls } from "../../urls";
import toast from "react-hot-toast";
import Modal from 'react-bootstrap/Modal';
import UpdateModal from "../../components/updateModal";
import DeleteModal from "../../components/deleteModal"
import { DownloadTableExcel ,useDownloadExcel} from 'react-export-table-to-excel';

import { CSVLink, CSVDownload } from "react-csv";

const StockManagerPage = () => {
    const [tab, setTab] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const methods = useForm();
    const [success, setSuccess] = useState(false);
    const [postImage, setPostImage] = useState({
        myFile: "",
    });
    const [productList, setProductList] = useState([]);
    const [productListCSV, setProductListCSV] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [dataToUpdate, setDataToUpdate] = useState({});
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const tableRef = useRef(null);
    
    const cartData = []

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
      if (productList) {
        const transformedData = productList.map(item => {
            return {id:item.id, name: item.name,content:item.content, count:item.count, price: item.price , }; 
        });
        setProductListCSV(transformedData)
      }
    }, [productList])

    const getProducts = async () => {
        try {
            const response = await apiClient.get(Urls.get_products);
            if (response) {
                setProductList(response.data.data)
            }

        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")

        }
    }

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };



    const onSubmit = methods.handleSubmit(async (data) => {

        const file = data.imageData[0];
        const base64 = await convertToBase64(file);
        setPostImage({ ...postImage, myFile: base64 });

        if (base64) {
            const params = {
                name: data.name,
                imageData: base64,
                category: '',
                price: data.price,
                count: data.count,
                content: data.content,
                productCode: '',
                starCount: ''
            }
            fetchData(params)
        }
    });
       

    const fetchData = async (params) => {
        try {
            const response = await apiClient.post(Urls.create_product, params);
            if (response) {
                toast.success("Product Added Successfully")
                methods.reset();
            }

        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")

        }
    }


    const handleShowModal = (data) => {
        setShowModal(true);
        setDataToUpdate(data)
    };


    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleUpdateData =  (updatedData) => {

        if (updatedData) {
            const params = {
                id:updatedData.id,
                name: updatedData.name,
                imageData: updatedData.imageData,
                category: updatedData.category,
                price: updatedData.price,
                count: updatedData.count,
                content: updatedData.content,
                productCode: updatedData.productCode,
                starCount: updatedData.starCount,
            }
            updatedDataApi(params)

    }
    };
    const updatedDataApi=async (params)=>{
        try {
            const response = await apiClient.put(Urls.update_products+params.id, params);
            if (response) {
                toast.success("Product Updated Successfully")
                handleCloseModal()
                getProducts()
            }

        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")

        }
    }
    const renderModalBody = (formData) => {
        return (
            <>
                <div className="new-grid-container">
                    <div className="row">
                        <div className="col-6">
                            <Input  {...prduct_name_validation} />
                        </div>
                        <div className="col-6">
                            <Input  {...prduct_discription_validation} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Input  {...prduct_count_validation} />
                        </div>
                        <div className="col-6">
                            <Input  {...prduct_price_validation} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 img-section">
                            {/* <Input {...prduct_img_validation} /> */}
                            <img className='product-img-update' src={"data:image/png;base64," + formData.imageData} />
                        </div>
                    </div>
                </div>

            </>
        );
    };

    const handleDelete=(data)=>{
        setDataToUpdate(data)
        setShowDeleteModal(true)
    }

    const handleDeleteData=async (data)=>{
        try {
            const response = await apiClient.delete(Urls.update_products+data);
            if (response) {
                toast.success("Product Deleted Successfully")
                handleHideDeleteModal()
                getProducts()
            }

        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")

        }
    }

    const handleHideDeleteModal=()=>{
        setShowDeleteModal(false)
    }
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Users table',
        sheet: 'Users'
    })
    return (
        <div className="member-page">
            <div className="row">
                <UserHeader />
            </div>
            <div className="row container m-auto">
                <div className="col-4 left-menu-section">
                    <div className="main-button left-menu">
                        <a className={tab == 1 ? 'active-tab' : ''} onClick={() => setTab(1)}>Product List</a>
                    </div>
                    <div className="main-button mt-4 left-menu">
                        <a className={tab == 2 ? 'active-tab' : ''} onClick={() => setTab(2)}>Add a New Product</a>
                    </div>
                </div>
                <div className="col-8 right-menu-section">
                    {/* {tab == 1 && <div className="search__container">
                        <input className="search__input" type="text" placeholder="Search.." name="search" />
                        <button className="search-icon" type="submit"><i class="fa fa-search"></i></button>
                    </div>} */}
                    {tab == 1 ?<CSVLink className="donnload-section" filename="product-list" data={productListCSV}><button disabled={productListCSV.length==0} className="submit-button donload-btn">Download CSV</button></CSVLink>:''}
                   {/* <button onClick={onDownload}> Export excel </button> */}
                    {tab == 1 ?
                    
                        <div className="card">

                            <table  ref={tableRef} className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Product Discription</th>
                                        <th scope="col">Availbale Stock</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productList.length == 0 ? <tr>No Data Available</tr> : productList.map((data, index) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{data.id}</td>
                                                <td><img className='product-img' src={"data:image/png;base64," + data.imageData} /></td>
                                                <td>{data.name}</td>
                                                <td>{data.content}</td>
                                                <td>{data.count}</td>
                                                <td>{data.price}</td>
                                                <td>
                                                    <Icon color="green" onClick={() => handleShowModal(data)} className='delete-icon' icon="fluent:edit-28-regular" />
                                                    <Icon color="red" onClick={() => handleDelete(data)} className='delete-icon mx-3' icon="fluent:delete-28-regular" />
                                                </td>
                                            </tr>)
                                    })}

                                </tbody>
                            </table>
                            {cartData.length == 0 ? '' : <><p className='total-balance'>Total Balance: <span>Rs. {totalPrice}</span></p></>}
                        </div>
                        :
                        <div className="card p-5">
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
                                                <Input {...prduct_name_validation} />
                                            </div>
                                            <div className="col-6">
                                                <Input {...prduct_discription_validation} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <Input {...prduct_count_validation} />
                                            </div>
                                            <div className="col-6">
                                                <Input {...prduct_price_validation} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <Input id="fileInput" {...prduct_img_validation} />
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
                        </div>
                    }
                </div>
            </div>
            <UpdateModal
                show={showModal}
                onHide={handleCloseModal}
                onUpdate={handleUpdateData}
                initialData={dataToUpdate}
                modalBody={(formData) => renderModalBody(formData)}
            />
            <DeleteModal
                show={showDeleteModal}
                onHide={handleHideDeleteModal}
                onDelete={handleDeleteData}
                data={dataToUpdate}
            />
        </div>
    );
};

export default StockManagerPage;
