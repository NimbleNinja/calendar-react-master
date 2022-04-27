import React from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';
//import Modal from '../modal/Modal';

const Calendar = ({ weekDates }) => {
  return (
    <section className="calendar">
      {/*<Modal />*/}
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
