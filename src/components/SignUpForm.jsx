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
} from "../utils/inputValidations";
import { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import "../assets/scss/form.scss";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";
import Logo from "../assets/img/header/logo.png"

export const SignUpForm = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      toast.success("Sign Up Successful!");
    }
  }, [success]);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });

  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/signin");
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
        <h3 className="mb-4 text-center">Sign Up</h3>
        <div className="grid-container">
          <Input {...first_name_validation} />
          <Input {...last_name_validation} />
          <Input {...email_validation} />
          <Input {...phone_validation} />
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
