import React,{ useEffect } from "react";
import { Input } from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import {
  email_validation,
  password_validation,
} from "../utils/inputValidations";
import { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import "../assets/scss/form.scss";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { RiLoginBoxLine } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import Logo from "../assets/img/header/logo.png"


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

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
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
          <Input {...email_validation} />
          <Input {...password_validation} />
          <Input
            name="userRole"
            label="User Role"
            id="user-role"
            select
            options={roleOptions}
          />
        </div>
        <div className="mt-4  grid-container">
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
