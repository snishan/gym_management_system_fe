import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import "../assets/scss/updatemodal.scss"

const DeleteModal = ({ show, onHide, onDelete, data }) => {

  const handleClickDelete = (id) => {
    onDelete(id)
  }
  return (
    <Modal className='update-modal' show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Do You Wish To Delete This Record?</p>
        <div className="mt-4  grid-container">
          <button type='button' onClick={onHide} className="navigation-button">
            {/* <IoPersonAddOutline /> */}
            No
          </button>
          <button onClick={() => handleClickDelete(data.id)} className="submit-button">
            {/* <RiLoginBoxLine /> */}
            Yes
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
