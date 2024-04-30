import React, { useState } from "react";
import '../../assets/scss/member.scss'
import UserHeader from "../../components/usersHeader";
import Plus from "../../assets/img/member/plus-icon.svg"
import Minus from "../../assets/img/member/minus-icon.svg"
import { Icon } from '@iconify/react';
import { Input } from "../../components/Input";
import { FormProvider, useForm } from "react-hook-form";
import {
    email_validation,
    password_validation,
    appointment_data_validation,
    appointment_time_validation,
    remark_validation
} from "../../utils/inputValidations";
import { RiLoginBoxLine } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import { BsFillCheckSquareFill } from "react-icons/bs";

const MemberPage = () => {
    const [tab, setTab] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const methods = useForm();
    const [success, setSuccess] = useState(false);

    const cartData = []
    const roleOptions = [
        { label: "Mr. Udesh", value: "Mr. Udesh" },
    ];
    const handleTab = () => {

    }
    const onSubmit = methods.handleSubmit((data) => {
        console.log(data);
        methods.reset();
        setSuccess(true);
      });
    return (
        <div className="member-page">
            <div className="row">
                <UserHeader />
            </div>
            <div className="row container m-auto">
                <div className="col-4 left-menu-section">
                    <div className="main-button left-menu">
                        <a className={tab==1?'active-tab':''} onClick={() => setTab(1)}>My Cart</a>
                    </div>
                    <div className="main-button mt-4 left-menu">
                        <a className={tab==2?'active-tab':''} onClick={() => setTab(2)}>Make an Appointment</a>
                    </div>
                </div>
                <div className="col-8 right-menu-section">
                    {tab == 1 ?
                        <div className="card">

                            <table className="table">
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
                                    {cartData.length == 0 ? <tr>No Data Available</tr> : cartData.map((data, index) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{data.id}</td>
                                                {/* <td><img className='cart-img' src={imgList[index]} /></td> */}
                                                <td>{data.product.name}</td>
                                                <td>{data.product.count}</td>
                                                <td><p className='count'>
                                                    <img className={data.product.count == 0 ? 'plus-icon disable' : 'plus-icon'} src={Plus} alt='plus' />
                                                    {data.count}
                                                    <img className={data.count == 1 ? 'minus-icon disable' : 'minus-icon'} src={Minus} alt='plus' />
                                                </p>
                                                </td>
                                                <td>{data.product.price}</td>
                                                <td><Icon className='delete-icon' icon="fluent:delete-28-regular" /></td>
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
                                                <Input {...appointment_data_validation} />
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
                                            {/* <IoPersonAddOutline /> */}
                                            Cancel
                                        </button>
                                        <button onClick={onSubmit} className="submit-button">
                                            {/* <RiLoginBoxLine /> */}
                                           Submit
                                        </button>
                                        {/* {success && (
                          <p className="success-message">
                            <BsFillCheckSquareFill /> &nbsp; Sign In Successful!
                          </p>
                        )} */}
                                    </div>
                                </form>
                            </FormProvider>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MemberPage;
