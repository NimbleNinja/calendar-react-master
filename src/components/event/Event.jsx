import React, { useState } from 'react';
import DeletePopup from './DeletePopup';

import './event.scss';

const Event = ({ id, height, marginTop, title, time, deleteEvent }) => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };

  const showDeletePopupHandler = () => {
    setIsShowPopup(true);
  };

  return (
    <div onClick={showDeletePopupHandler} style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <DeletePopup visible={isShowPopup} id={id} deleteEvent={deleteEvent} />
    </div>
  );
};

export default Event;
