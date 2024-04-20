import React from "react";
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
import { GrMail } from "react-icons/gr";
import { BsFillCheckSquareFill } from "react-icons/bs";
import "../assets/scss/form.scss";

export const Form = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="grid-container">
          <Input {...first_name_validation} />
          <Input {...last_name_validation} />
          <Input {...email_validation} />
          <Input {...phone_validation} />
          <Input {...password_validation} />
          <Input {...retype_password_validation} />
        </div>
        <div className="mt-4 d-flex justify-content-center flex-column ">
          <button onClick={onSubmit} className="submit-button">
            <GrMail /> Submit Form
          </button>
          {success && (
            <p className="success-message">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
