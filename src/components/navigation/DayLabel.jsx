import React from 'react';

const DayLabel = ({ dayName, dayNumber }) => {
  return (
    <div className="calendar__day-label day-label">
      <span className="day-label__day-name">{dayName}</span>
      <span className="day-label__day-number">{dayNumber}</span>
    </div>
  );
};

export default DayLabel;
