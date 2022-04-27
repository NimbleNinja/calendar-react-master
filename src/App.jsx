import React, { useState } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import Modal from './components/modal/Modal';
import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';

import './styles/common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };
  const closeModal = e => {
    const { canDelete } = e.target.dataset;
    if (canDelete) {
      setIsShowModal(false);
    }
  };

  const showCurrentWeek = () => {
    setWeekStartDate(new Date());
  };

  const switchWeek = e => {
    const { direction } = e.target.closest('.navigation__nav-icon').dataset;
    const difference = direction === 'future' ? 7 : -7;
    const currentDay = weekStartDate.getDate();
    const newWeekStartDate = new Date(weekStartDate.setDate(currentDay + difference));
    setWeekStartDate(newWeekStartDate);
  };

  return (
    <>
      <Header
        showModal={showModal}
        weekDates={weekDates}
        switchWeek={switchWeek}
        showCurrentWeek={showCurrentWeek}
      />
      <Calendar weekDates={weekDates} />
      <Modal closeModal={closeModal} visible={isShowModal} />
    </>
  );
};

export default App;

// Switch week with navigation buttons
// 1. chosse component to state
// 2. create handler that change weekStartDate
// 3. take btn and add handler to click event
