import React, { useState, useEffect } from "react";
import '../../assets/scss/member.scss'
import UserHeader from "../../components/usersHeader";
import { Icon } from '@iconify/react';
import { Input } from "../../components/Input";
import { FormProvider, useForm } from "react-hook-form";
import {
    appointment_data_validation,
    remark_validation
} from "../../utils/inputValidations";
import apiClient from "../../Services/index"
import { Urls } from "../../urls";
import toast from "react-hot-toast";
import UpdateModal from "../../components/updateModal";
import DeleteModal from "../../components/deleteModal"

const TrainerPage = () => {
    const loginStatus = localStorage.getItem('userLogin')
    const methods = useForm();
    const [tab, setTab] = useState(1);
    const [userId, setUserId] = useState('');
    const [leaveList, setLeaveList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [dataToUpdate, setDataToUpdate] = useState({});
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const leavedata = []

    const roleOptions = [
        { label: "FULL", value: "FULL" },
        { label: "FIRST HALF", value: "FIRSTHALF" },
        { label: "SECOND HALF", value: "SECONDHALF" },
    ];

    useEffect(() => {
        if (tab == 2) {
            getLeaves()
        }
    }, [tab])


    useEffect(() => {
        if (loginStatus !== null) {
            var myObj = JSON.parse(loginStatus);
            setUserId(myObj.id)
        } else {
            setUserId('')
        }
    }, [])

    const handleShowModal = (data) => {
        setShowModal(true);
        setDataToUpdate(data)
    };


    const handleCloseModal = () => {
        setShowModal(false);
    };


    const getLeaves = async () => {
        try {
            const response = await apiClient.get(Urls.get_all_leaves);
            if (response) {
                const myLeave = response.data.data.filter(entry => entry.user.id === userId);
                setLeaveList(myLeave)
            }

        } catch (error) {
            setLeaveList([])
            toast.error(error.response.data.message ?? "Something went wrong")
        }
    }
    const clearData = () => {
        methods.reset();
    }
    const onSubmit = methods.handleSubmit(async (data) => {
        const params = {
            "date": data.date,
            "leaveType": data.leaveType,
            "message": data.message,
            "user":{"id" :userId}
        }
        try {
            const response = await apiClient.post(Urls.create_leave, params);
            if (response) {
                methods.reset();
                toast.success("Leave Created Successfully")
            }

        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")
        }

    });
    const handleUpdateData = async (params) => {
        // "user":{"id" :userId}
        try {
            const response = await apiClient.put(Urls.update_leave(params.id), params);
            if (response) {
                toast.success("Leave Updated Successfully")
                handleCloseModal()
                getLeaves()
            }

        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")

        }
    }

    const renderModalBody = (formData) => {
        return (
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
                            options={roleOptions}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Input {...remark_validation} />
                    </div>
                </div>
            </div>
        )
    }

    const handleDelete = (data) => {
        setDataToUpdate(data)
        setShowDeleteModal(true)
    }


    const handleHideDeleteModal = () => {
        setShowDeleteModal(false)
    }

    const handleDeleteData = async (data) => {
        try {
            const response = await apiClient.delete(Urls.update_leave(data));
            if (response) {
                toast.success("Leave Deleted Successfully")
                handleHideDeleteModal()
                getLeaves()
            }

        } catch (error) {
            toast.error(error.response.data.message ?? "Something went wrong")

        }
    }

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
                                                <Input
                                                    name="leaveType"
                                                    label="Leave Type"
                                                    id="leave-type"
                                                    select
                                                    options={roleOptions}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <Input {...remark_validation} />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="mt-4  grid-container">
                                        <button onClick={clearData} className="navigation-button">
                                            Cancel
                                        </button>
                                        <button onClick={onSubmit} className="submit-button">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </FormProvider>
                        </div> :
                        <div className="card mt-4">

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
                                    {leaveList.length == 0 ? <tr>No Data Available</tr> : leaveList.map((data, index) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{data.id}</td>
                                                <td>{data.date}</td>
                                                <td>{data.leaveType}</td>
                                                <td>{data.message}</td>
                                                <td>{data.leaveStatus}</td>
                                                <td>
                                                    {data.leaveStatus=='APPROVE'?"-":
                                                    <>
                                                    <Icon color="green" onClick={() => handleShowModal(data)} className='delete-icon' icon="fluent:edit-28-regular" />
                                                    <Icon color="red" onClick={() => handleDelete(data)} className='delete-icon mx-2' icon="fluent:delete-28-regular" />
                                                    </> }
                                                </td>
                                            </tr>)
                                    })}

                                </tbody>
                            </table>
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

export default TrainerPage;
