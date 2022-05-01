import React from 'react';
import './buttons.scss';
import PropTypes from 'prop-types';

const CreateEventBtn = ({ showModal }) => (
  <button onClick={showModal} className="create-event-btn">
    +
  </button>
);

export default CreateEventBtn;

CreateEventBtn.propTypes = {
  showModal: PropTypes.func,
};
