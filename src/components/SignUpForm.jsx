import React, { useEffect } from "react";
import { Input } from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import {
  email_validation,
  password_validation,
  first_name_validation,
  last_name_validation,
  phone_validation,
  retype_password_validation,
  username_validation,
} from "../utils/inputValidations";
import { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import "../assets/scss/form.scss";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";
import Logo from "../assets/img/header/logo.png"
import apiClient from "../Services/index"
import { Urls } from "../urls";

export const SignUpForm = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      toast.success("Sign Up Successful!");
    }
  }, [success]);

  const onSubmit = methods.handleSubmit((data) => {
    fetchData(data)
  });

  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/signin");
  };

  const roleOptions = [
    // { label: "MEMBER", value: "MEMBER" },
    { label: "TRAINER", value: "TRAINER" },
    { label: "MANAGER", value: "MANAGER" },
    { label: "ADMIN", value: "ADMIN" },
  ];

  const fetchData = async (params) => {
    try {
      const response = await apiClient.post(Urls.register, params);
      toast.success("Regiterd successfully")
      navigate("/signin");
    } catch (error) {
      toast.error(error.response.data.message??"Something went wrong")

    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="form-container"
      >
        <img className="logo" src={Logo} ></img>
        <h3 className="mb-4 text-center">Sign Up</h3>
        <div className="grid-container">
          <Input {...first_name_validation} />
          <Input {...last_name_validation} />
          <Input {...email_validation} />
          <Input {...phone_validation} />
          <Input
            name="userRole"
            label="User Role"
            id="user-role"
            select
            options={roleOptions}
          />
          <Input {...username_validation} />
          <Input {...password_validation} />
          <Input {...retype_password_validation} />
        </div>
        <div className="mt-4  grid-container">
          <button onClick={navigateToSignIn} className="navigation-button">
          <RiLoginBoxLine />
            Sign In
          </button>
          <button onClick={onSubmit} className="submit-button">
          <IoPersonAddOutline />
            Sign Up
          </button>
          {success && (
            <p className="success-message">
              <BsFillCheckSquareFill /> &nbsp; Sign Up Successful!
            </p>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
