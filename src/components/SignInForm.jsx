import React, { useEffect } from "react";
import { Input } from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import {
  email_validation,
  password_validation,
  username_validation,
} from "../utils/inputValidations";
import { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import "../assets/scss/form.scss";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { RiLoginBoxLine } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import Logo from "../assets/img/header/logo.png"
import apiClient from "../Services/index"
import { Urls } from "../urls";


export const SignInForm = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const roleOptions = [
    { label: "MEMBER", value: "MEMBER" },
    { label: "TRAINER", value: "TRAINER" },
    { label: "MANAGER", value: "MANAGER" },
    { label: "ADMIN", value: "ADMIN" },
  ];

  useEffect(() => {
    if (success) {
      toast.success("Sign In Successful!");
    }
  }, [success]);

  const fetchData = async (params) => {
    try {
      const response = await apiClient.post(Urls.logIn, params);
      toast.success("Login successfully")
      localStorage.setItem('userLogin', JSON.stringify(response.data?.data))
      navigate("/");
    } catch (error) {
      localStorage.removeItem('userLogin')
      toast.error("Invalied Username or Password")

    }
  }

  const onSubmit = methods.handleSubmit((data) => {
    fetchData(data)
    // setSuccess(true);
  });

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="form-container"
      >
        <img className="logo" src={Logo} ></img>
        <h3 className="mb-4 text-center">Sign In</h3>
        <div className="new-grid-container">
          <Input {...username_validation} />
          <Input {...password_validation} />
        </div>
        <div className="my-5  grid-container">
          <button onClick={navigateToSignUp} className="navigation-button">
            <IoPersonAddOutline />
            Sign Up
          </button>
          <button onClick={onSubmit} className="submit-button">
            <RiLoginBoxLine />
            Sign In
          </button>
          {success && (
            <p className="success-message">
              <BsFillCheckSquareFill /> &nbsp; Sign In Successful!
            </p>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
