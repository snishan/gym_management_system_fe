import React, { useState } from "react";
import '../../assets/scss/member.scss'
import UserHeader from "../../components/usersHeader";
import Plus from "../../assets/img/member/plus-icon.svg"
import Minus from "../../assets/img/member/minus-icon.svg"
import { Icon } from '@iconify/react';
import { Input } from "../../components/Input";
import { FormProvider, useForm } from "react-hook-form";
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

const AdminPage = () => {
    const [tab, setTab] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const methods = useForm();
    const [success, setSuccess] = useState(false);

    const cartData = []

    const onSubmit = methods.handleSubmit((data) => {
        console.log(data);
        console.log("methods",methods );
        // methods.reset();
        // setSuccess(true);
    });

    return (
        <div className="member-page">
            <div className="row">
                <UserHeader />
            </div>
            <div className="row container m-auto">
                <div className="col-4 left-menu-section">
                    <div className="main-button left-menu">
                        <a className={tab==1?'active-tab':''} onClick={() => setTab(1)}>Member Management</a>
                    </div>
                    <div className="main-button mt-4 left-menu">
                        <a className={tab==2?'active-tab':''} onClick={() => setTab(2)}>Employee Management</a>
                    </div>
                    <div className="main-button mt-4 left-menu">
                        <a className={tab==3?'active-tab':''} onClick={() => setTab(3)}>Leave Management</a>
                    </div>
                </div>
                <div className="col-8 right-menu-section">
                    {tab == 1 || tab==2 ?
                        <div className="card">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone Number</th>
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
                        </div>
                        :
                        <div className="card">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Leave Type</th>
                                    <th scope="col">Status</th>
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
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
