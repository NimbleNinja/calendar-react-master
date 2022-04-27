import React from 'react';

const Hour = ({ hour }) => {
  return (
    <div className="time-slot">
      <span className="time-slot__time">{`${hour}:00`}</span>
    </div>
  );
};

export default Hour;
