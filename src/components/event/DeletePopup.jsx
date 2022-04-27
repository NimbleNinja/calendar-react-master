import React from 'react';

const DeletePopup = ({ visible, deleteEvent, id }) => {
  const deleteEventHandler = () => {
    deleteEvent(id);
  };
  return visible ? (
    <button onClick={deleteEventHandler} className="delete-event-btn">
      delete <i></i>
    </button>
  ) : null;
};

export default DeletePopup;
