import React, { useState, useEffect } from "react";
import '../../assets/scss/member.scss'
import UserHeader from "../../components/usersHeader";
import Plus from "../../assets/img/member/plus-icon.svg"
import Minus from "../../assets/img/member/minus-icon.svg"
import { Icon } from '@iconify/react';
import { Input } from "../../components/Input";
import { FormProvider, useForm } from "react-hook-form";
import {
    last_name_validation,
    first_name_validation,
    email_validation,
    phone_validation,
    username_validation,
    password_validation,
    appointment_data_validation,
    remark_validation
} from "../../utils/inputValidations";
import apiClient from "../../Services/index"
import { Urls } from "../../urls";
import toast from "react-hot-toast";
import DeleteModal from "../../components/deleteModal"

const AdminPage = () => {
    const [tab, setTab] = useState(1);
    const [allMemberList, setAllMemberList] = useState([]);
    const methods = useForm();
    const methodsLeave = useForm();
    const [dataToUpdate, setDataToUpdate] = useState({});
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [allLeaves, setAllLeaves] = useState([]);
    const [memberDropdown, setMemberDropdown] = useState([]);
    const [appointmentList, setAppointmentList] = useState([]);

    const handleDelete = (data) => {
        setDataToUpdate(data)
        setShowDeleteModal(true)
    }


    const handleHideDeleteModal = () => {
        setShowDeleteModal(false)
    }


    const cartData = []

    const statusOption = [
        { label: "ACTIVATED", value: "ACTIVATED" },
        { label: "DEACTIVATED", value: "DEACTIVATED" },
    ];
    const leaveOption = [
        { label: "PENDING", value: "PENDING" },
        { label: "APPROVE", value: "APPROVE" },
        { label: "CANCEL ", value: "CANCEL " },
    ];

    const leaveTypes = [
        { label: "FULL", value: "FULL" },
        { label: "FIRST HALF", value: "FIRSTHALF" },
        { label: "SECOND HALF", value: "SECONDHALF" },
    ];


    useEffect(() => {
        if (tab == 1) {
            getAllMembers()
            setAllLeaves([])
        } else if (tab == 3) {
            getAllLeaves()
            setAllMemberList([])
        } else if (tab == 2) {
            getAllMembersDropdown()
        }else if (tab == 5) {
            getAllAppointments()
        }
    }, [tab])

    const getAllAppointments=async ()=>{
        try {
            const response = await apiClient.get(Urls.create_appointment);
            if (response) {
                setAppointmentList(response.data.data)
            }

        } catch (error) {
            setAppointmentList([])
        }
    }

    const getAllMembersDropdown = async () => {
        try {
            const response = await apiClient.get(Urls.get_all_users);
            if (response) {
                const memberList = response.data.data.filter(({ userRole, status }) => userRole === 'TRAINER' && status === 'ACTIVATED');
                const drop = memberList.map((data) => ({ label: data.firstName + " " + data.lastName, value: data.id.toString() }));
                setMemberDropdown(drop)
            }
        } catch (error) {
            setMemberDropdown([])

        }
    }

    const getAllMembers = async () => {
        try {
            const response = await apiClient.get(Urls.get_all_users);
            if (response) {
                const memberList = response.data.data.filter(({ userRole }) => userRole === 'MEMBER');
                setAllMemberList(memberList)
            }
        } catch (error) {
            setAllMemberList([])
            toast.error(error.response.data.message ?? "Something went wrong")
        }
    }

    const getAllLeaves = async () => {
        try {
            const response = await apiClient.get(Urls.get_all_leaves);
            if (response) {
                setAllLeaves(response.data.data)
            }
        } catch (error) {
            setAllLeaves([])
            toast.error(error.response.data.message ?? "Something went wrong")
        }
    }


    const onSubmit = methods.handleSubmit(async (data) => {
        const params = {
            "firstName": data.firstName,
            "lastName": data.lastName,
            "email": data.email,
            "contactNo": data.contactNo,
            "userRole": "MEMBER",
            "username": data.username,
            "password": data.password
        }
        try {
            const response = await apiClient.post(Urls.register, params);
            toast.success("Regiterd successfully")
            methods.reset();
        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")
        }
    });

    const handleChnage = async (id, data,record) => {
        console.log("data",record);
        let params = record;
        params.status = data.target.value;
   
        try {
            const response = await apiClient.put(Urls.update_user(id), params);
            if (response) {
                toast.success("User Updated successfully")
                getAllMembers()
            }
        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")
        }

    }

    const handleDeleteData = async (data) => {
        if (tab==3) {
            try {
                const response = await apiClient.delete(Urls.update_leave(data));
                if (response) {
                    toast.success("Leave Deleted Successfully")
                    handleHideDeleteModal()
                    getAllLeaves()
                }
    
            } catch (error) {
                toast.error(error.response.data.message ?? "Something went wrong")
    
            } 
        }else{
            try {
                const response = await apiClient.delete(Urls.update_user(data));
                if (response) {
                    toast.success("User Deleted Successfully")
                    handleHideDeleteModal()
                    getAllMembers()
                }
    
            } catch (error) {
                toast.error(error.response.data.message ?? "Something went wrong")
    
            }
        }
       
    }

    const handleChnageLeave = async (id, data, record) => {

        let params = record;
        params.leaveStatus = data.target.value;
        try {
            const response = await apiClient.put(Urls.update_leave(id), params);
            if (response) {
                toast.success("Leave Updated successfully")
                getAllLeaves()
            }
        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")
        }

    }
    const clearData = () => {
        methodsLeave.reset();
    }
    const onSubmitLeave = methodsLeave.handleSubmit(async (data) => {
        const params = {
            "date": data.date,
            "leaveType": data.leaveType,
            "message": data.message,
            "user":{"id" :data.userId}
        }
        try {
            const response = await apiClient.post(Urls.create_leave, params);
            if (response) {
                methodsLeave.reset();
                toast.success("Leave Created Successfully")
            }

        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")
        }

    });

    const handleDeleteLeave=()=>{

    }

    const returnSection = () => {
        if (tab == 1) {
            return (
                <div className="card">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allMemberList.length == 0 ? <tr>No Data Available</tr> : allMemberList.map((data, index) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.firstName}</td>
                                        <td>{data.lastName}</td>
                                        <td>{data.email}</td>
                                        <td>{data.contactNo}</td>
                                        <td>
                                            <select value={data.status} defaultValue={data.status} onChange={(e) => handleChnage(data.id, e,data)} name="cars" id="cars">
                                                {statusOption.map((data) => {
                                                    return <option value={data.value}>{data.label}</option>
                                                })}

                                            </select>
                                        </td>
                                        <td>
                                            <Icon onClick={() => handleDelete(data)} color="red" className='delete-icon ' icon="fluent:delete-28-regular" />
                                        </td>
                                    </tr>)
                            })}

                        </tbody>
                    </table>
                </div>
            )
        } else if (tab == 3) {
            return (
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
                            {allLeaves.length == 0 ? <tr>No Data Available</tr> : allLeaves.map((data, index) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.user.firstName}</td>
                                        <td>{data.date}</td>
                                        <td>{data.leaveType}</td>
                                        <td>
                                            <select value={data.leaveStatus} defaultValue={data.leaveStatus} onChange={(e) => handleChnageLeave(data.id, e, data)} name="cars" id="cars">
                                                {leaveOption.map((data) => {
                                                    return <option value={data.value}>{data.label}</option>
                                                })}

                                            </select>
                                        </td>
                                        <td><Icon color="red" onClick={() => handleDelete(data)}  className='delete-icon' icon="fluent:delete-28-regular" /></td>
                                    </tr>)
                            })}

                        </tbody>
                    </table>
                </div>
            )
        } else if (tab == 4) {
            return (
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
                                        <Input  {...first_name_validation} />
                                    </div>
                                    <div className="col-6">
                                        <Input {...last_name_validation} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Input {...email_validation} />
                                    </div>
                                    <div className="col-6">
                                        <Input {...phone_validation} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Input {...username_validation} />
                                    </div>
                                    <div className="col-6">
                                        <Input {...password_validation} />
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
            )
        } else if (tab == 2) {
            return (
                <div className="card p-5">
                    <FormProvider {...methodsLeave}>
                        <form
                            onSubmitLeave={(e) => e.preventDefault()}
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
                                        <Input
                                            name="leaveType"
                                            label="Leave Type"
                                            id="leave-type"
                                            select
                                            options={leaveTypes}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Input {...remark_validation} />
                                    </div>
                                    <div className="col-6">
                                        {memberDropdown.length > 0 ? <Input
                                            name="userId"
                                            label="User"
                                            id="user-id"
                                            select
                                            options={memberDropdown}

                                        /> : ''}
                                    </div>

                                </div>
                            </div>
                            <div className="mt-4  grid-container">
                                <button type="button" onClick={clearData} className="navigation-button">
                                    Cancel
                                </button>
                                <button onClick={onSubmitLeave} className="submit-button">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            )
        }else if(tab==5){
            return (
                <div className="card">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Member Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Tariner Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointmentList.length == 0 ? <tr>No Data Available</tr> : appointmentList.map((data, index) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.user.firstName}</td>
                                        <td>{data.date}</td>
                                        <td>{data.time}</td>
                                        <td>{data.trainerName}</td>
                                        <td>
                                            <select value={data.leaveStatus} defaultValue={data.leaveStatus} onChange={(e) => handleChnageLeave(data.id, e, data)} name="cars" id="cars">
                                                {leaveOption.map((data) => {
                                                    return <option value={data.value}>{data.label}</option>
                                                })}

                                            </select>
                                        </td>
                                    </tr>)
                            })}

                        </tbody>
                    </table>
                </div>
            )
        }
    }


    return (
        <div className="member-page">
            <div className="row">
                <UserHeader />
            </div>
            <div className="row container m-auto">
                <div className="col-4 left-menu-section">
                    <div className="main-button left-menu">
                        <a className={tab == 1 ? 'active-tab' : ''} onClick={() => setTab(1)}>Member Management</a>
                    </div>
                    <div className="main-button mt-4 left-menu">
                        <a className={tab == 4 ? 'active-tab' : ''} onClick={() => setTab(4)}>Regiter A New Member</a>
                    </div>
                    <div className="main-button mt-4 left-menu">
                        <a className={tab == 3 ? 'active-tab' : ''} onClick={() => setTab(3)}>Leave Management</a>
                    </div>
                    <div className="main-button mt-4 left-menu">
                        <a className={tab == 2 ? 'active-tab' : ''} onClick={() => setTab(2)}>Add A New Leave</a>
                    </div>
                    <div className="main-button mt-4 left-menu">
                        <a className={tab == 5 ? 'active-tab' : ''} onClick={() => setTab(5)}>Manage Appointments</a>
                    </div>
                </div>
                <div className="col-8 right-menu-section">

                    {returnSection()}
                </div>
            </div>
            <DeleteModal
                show={showDeleteModal}
                onHide={handleHideDeleteModal}
                onDelete={handleDeleteData}
                data={dataToUpdate}
            />
        </div>
    );
};

export default AdminPage;
