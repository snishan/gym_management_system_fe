import React, { useState } from "react";
import '../../assets/scss/member.scss'
import UserHeader from "../../components/usersHeader";
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

const TrainerPage = () => {
    const methods = useForm();
    const [tab, setTab] = useState(1);
    const [success, setSuccess] = useState(false);

    const leavedata = []
  
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
                    <div className="main-button mt-4 left-menu">
                        <a className={tab == 1 ? "active-tab" : ""} onClick={() => setTab(1)}>Apply a Leave</a>
                    </div>
                    <div className="main-button mt-4 left-menu">
                        <a className={tab == 2 ? "active-tab" : ""} onClick={() => setTab(2)}>My Leaves</a>
                    </div>
                </div>

                <div className="col-8 right-menu-section">
                    {tab == 1 ?
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
                        </div> : 
                        <div className="card">
                            
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Remark</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leavedata.length == 0 ? <tr>No Data Available</tr> : leavedata.map((data, index) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{data.id}</td>
                                                {/* <td><img className='cart-img' src={imgList[index]} /></td> */}
                                                <td>{data.product.name}</td>
                                                <td>{data.product.count}</td>
                                                
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

export default TrainerPage;
