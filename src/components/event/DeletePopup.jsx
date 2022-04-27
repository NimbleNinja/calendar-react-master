import React from 'react';

const DeletePopup = ({ deleteEvent, id }) => {
  const deleteEventHandler = () => {
    deleteEvent(id);
  };
  return (
    <button onClick={deleteEventHandler} className="delete-event-btn">
      delete <i></i>
    </button>
  );
};

export default DeletePopup;
