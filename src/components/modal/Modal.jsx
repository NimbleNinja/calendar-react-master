import React from 'react';
import EventForm from './EventForm';
import './modal.scss';

const Modal = ({ visible, closeModal, createNewEvent }) =>
  visible ? (
    <div onClick={closeModal} data-can-delete className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button onClick={closeModal} data-can-delete className="create-event__close-btn">
            +
          </button>
          <EventForm closeModal={closeModal} createNewEvent={createNewEvent} />
        </div>
      </div>
    </div>
  ) : null;

export default Modal;
