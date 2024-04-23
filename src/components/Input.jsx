import React from "react";
import { findInputError, isFormInvalid } from "../utils";
import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import "../assets/scss/input.scss";
import Form from 'react-bootstrap/Form';

export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
  select, 
  options,
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
          <span>{label}</span>
        </label>
        {isInvalid && (
          <InputError
            message={inputErrors.error.message}
            key={inputErrors.error.message}
          />
        )}
      </div>
      {select ? ( // Conditional rendering for select input
        <Form.Select
          id={id}
          className="input-style"
          placeholder={placeholder}
          {...register(name, validation)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      ) : multiline ? (
        <textarea
          id={id}
          type={type}
          style={{ minHeight: "10rem", maxHeight: "20rem", resize: "vertical" }}
          className="input-style "
          placeholder={placeholder}
          {...register(name, validation)}
        ></textarea>
      ) : (
        <Form.Control
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
