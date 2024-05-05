import React, { useState,useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import "../assets/scss/updatemodal.scss"

const UpdateModal = ({ show, onHide, onUpdate, initialData, modalBody }) => {
  const methods = useForm();
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
   if (show) {
    setFormData(initialData)
   }
  }, [show])
  

  const handleUpdate = methods.handleSubmit(async (data) => {
    setFormData(data)
    onUpdate(data);

  });

  if (formData) {
    Object.keys(formData).forEach((key) => {
      methods.setValue(key, formData[key]);
    });
  }

  return (
    <Modal className='update-modal' show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormProvider {...methods}>
            <form
              handleUpdate={(e) => e.preventDefault()}
              noValidate
              autoComplete="off"
              className=""
            >
              {modalBody(formData)}
              <div className="mt-4  grid-container">
                <button type='button' onClick={onHide} className="navigation-button">
                  Cancel
                </button>
                <button onClick={handleUpdate} className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </FormProvider>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateModal;
