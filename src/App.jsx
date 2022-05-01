import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';
import { deleteEventFromServer, fetchEvents, sendEventToServer } from './gateway/events';
import './styles/common.scss';

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

  const [allEvents, setAllevents] = useState([]);

  useEffect(() => {
    fetchEvents().then(events => {
      if (!events) {
        return;
      }
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
      if (!event) {
        return;
      }

      setAllevents([
        ...allEvents,
        { ...event, dateFrom: new Date(event.dateFrom), dateTo: new Date(event.dateTo) },
      ]);
    });
  };

  const deleteEvent = id => {
    deleteEventFromServer(id).then(() => {
      setAllevents(allEvents.filter(e => e.id !== id));
    });
  };

  return (
    <>
      <Header
        createNewEvent={createNewEvent}
        weekDates={weekDates}
        switchWeek={switchWeek}
        showCurrentWeek={showCurrentWeek}
      />
      <Calendar deleteEvent={deleteEvent} weekDates={weekDates} allEvents={allEvents} />
    </>
  );
};

export default App;
