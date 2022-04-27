import React from 'react';

import { days } from '../../utils/dateUtils.js';
import DayLabel from './DayLabel.jsx';

const Navigation = ({ weekDates }) => (
  <header className="calendar__header">
    {weekDates.map(dayDate => (
      <DayLabel
        key={Math.random()}
        dayName={days[dayDate.getDay()]}
        dayNumber={dayDate.getDate()}
      />
    ))}
  </header>
);

export default Navigation;
