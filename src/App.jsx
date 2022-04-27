import React, { useState } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import Modal from './components/modal/Modal';
import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';
import './styles/common.scss';
import events from './gateway/events';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const showCurrentWeek = () => {
    setWeekStartDate(new Date());
  };

  const switchWeek = e => {
    const { direction } = e.target.closest('.navigation__nav-icon').dataset;
    const difference = direction === 'future' ? 7 : -7;
    const currentDay = weekStartDate.getDate();
    const copyWeekStartDate = new Date(weekStartDate);
    const newWeekStartDate = new Date(copyWeekStartDate.setDate(currentDay + difference));
    setWeekStartDate(newWeekStartDate);
  };

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

  const [allEvents, setAllevents] = useState(events);

  const createNewEvent = eventData => {
    setAllevents([...allEvents, eventData]);
  };

  return (
    <>
      <Header
        showModal={showModal}
        weekDates={weekDates}
        switchWeek={switchWeek}
        showCurrentWeek={showCurrentWeek}
      />
      <Calendar weekDates={weekDates} allEvents={allEvents} />
      <Modal closeModal={closeModal} visible={isShowModal} createNewEvent={createNewEvent} />
    </>
  );
};

export default App;

// Switch week with navigation buttons
// 1. chosse component to state
// 2. create handler that change weekStartDate
// 3. take btn and add handler to click event
