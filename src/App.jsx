import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';
import { deleteEventFromServer, fetchEvents, sendEventToServer } from './gateway/events';
import './styles/common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const goToNextWeek = () => {
    const currentDay = weekStartDate.getDate();
    const copyWeekStartDate = new Date(weekStartDate);
    const newWeekStartDate = new Date(copyWeekStartDate.setDate(currentDay + 7));
    setWeekStartDate(newWeekStartDate);
  };

  const goToPrevWeek = () => {
    const currentDay = weekStartDate.getDate();
    const copyWeekStartDate = new Date(weekStartDate);
    const newWeekStartDate = new Date(copyWeekStartDate.setDate(currentDay - 7));
    setWeekStartDate(newWeekStartDate);
  };

  const [allEvents, setAllevents] = useState([]);

  useEffect(() => {
    fetchEvents().then(events => {
      if (!events) {
        return;
      }
      const eventsWithCorrectDates = events.map(event => ({
        ...event,
        dateFrom: new Date(event.dateFrom),
        dateTo: new Date(event.dateTo),
      }));
      // .filter(event => {
      //  const startOfWeek = event.dateFrom >= weekStartDate;
      //  // const endOfWeek = event.dateTo <= ;
      //  const endOfWeek = new Date(weekStartDate).add;
      // });

      setAllevents(eventsWithCorrectDates);
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
        goToNextWeek={goToNextWeek}
        goToPrevWeek={goToPrevWeek}
        showCurrentWeek={() => setWeekStartDate(new Date())}
      />
      <Calendar deleteEvent={deleteEvent} weekDates={weekDates} allEvents={allEvents} />
    </>
  );
};

export default App;
