import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import Modal from './components/modal/Modal';
import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';
import './styles/common.scss';
import { fetchEvents, sendEventToServer } from './gateway/events';

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

  // modal
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

  // events
  const [allEvents, setAllevents] = useState([]);

  useEffect(() => {
    fetchEvents().then(events => {
      const eventsWithUpdatedDates = events.map(event => ({
        ...event,
        dateFrom: new Date(event.dateFrom),
        dateTo: new Date(event.dateTo),
      }));
      setAllevents(eventsWithUpdatedDates);
    });
  }, []);

  const createNewEvent = eventData => {
    sendEventToServer(eventData).then(event => {
      setAllevents([
        ...allEvents,
        { ...event, dateFrom: new Date(event.dateFrom), dateTo: new Date(event.dateTo) },
      ]);
    });
  };

  const deleteEvent = id => {
    setAllevents(allEvents.filter(event => event.id !== id));
  };

  return (
    <>
      <Header
        showModal={showModal}
        weekDates={weekDates}
        switchWeek={switchWeek}
        showCurrentWeek={showCurrentWeek}
      />
      <Calendar deleteEvent={deleteEvent} weekDates={weekDates} allEvents={allEvents} />
      <Modal closeModal={closeModal} visible={isShowModal} createNewEvent={createNewEvent} />
    </>
  );
};

export default App;

// Switch week with navigation buttons
// 1. chosse component to state
// 2. create handler that change weekStartDate
// 3. take btn and add handler to click event
