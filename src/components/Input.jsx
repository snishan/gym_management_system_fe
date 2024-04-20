import React from "react";
import { findInputError, isFormInvalid } from "../utils";
import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import "../assets/scss/input.scss";

export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <div className="container-style">
      <div
        className="container-style"
        style={{ justifyContent: "space-between", flexDirection: "row" }}
      >
        <label htmlFor={id} className="label-style">
          {label}
        </label>
        {isInvalid && (
          <InputError
            message={inputErrors.error.message}
            key={inputErrors.error.message}
          />
        )}
      </div>
      {multiline ? (
        <textarea
          id={id}
          type={type}
          style={{ minHeight: "10rem", maxHeight: "20rem", resize: "vertical" }}
          className="input-style "
          placeholder={placeholder}
          {...register(name, validation)}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className="input-style"
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <p className="error-container-style">
      <MdError />
      {message}
    </p>
  );
};
