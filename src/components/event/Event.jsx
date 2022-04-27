import React from 'react';
import DeletePopup from './DeletePopup';

import './event.scss';

const Event = ({ id, height, marginTop, title, time, deleteEvent }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <DeletePopup id={id} deleteEvent={deleteEvent} />
    </div>
  );
};

export default Event;
