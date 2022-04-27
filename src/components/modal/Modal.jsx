import React from 'react';
import EventForm from './EventForm';
import './modal.scss';

const Modal = () => {
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn">+</button>
          <EventForm />
        </div>
      </div>
    </div>
  );
};

export default Modal;
