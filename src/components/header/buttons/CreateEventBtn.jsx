import React from 'react';
import './buttons.scss';

const CreateEventBtn = ({ showModal }) => (
  <button onClick={showModal} className="create-event-btn">
    +
  </button>
);

export default CreateEventBtn;
