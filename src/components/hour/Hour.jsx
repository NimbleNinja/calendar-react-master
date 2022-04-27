import React, { useState, useEffect } from 'react';
import Event from '../event/Event';
import { formatMins } from '../../utils/dateUtils.js';
import RedLine from './RedLine';
import './hour.scss';

const Hour = ({ day, dataHour, hourEvents, deleteEvent }) => {
  const [redLineConditions, setlineConditions] = useState({
    currentHour: new Date().getHours(),
    currentMinutes: new Date().getMinutes(),
  });

  useEffect(() => {
    const updateRedLineConditions = setInterval(() => {
      setlineConditions({
        currentHour: new Date().getHours(),
        currentMinutes: new Date().getMinutes(),
      });
    }, 1000 * 60);

    return () => {
      clearInterval(updateRedLineConditions);
    };
  }, []);

  const { currentMinutes, currentHour } = redLineConditions;
  const showLineCondition = new Date().getDate() === day && currentHour === dataHour;

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      <RedLine isShow={showLineCondition} top={currentMinutes - 1} />
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            deleteEvent={deleteEvent}
            key={id}
            id={id}
            // calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
          />
        );
      })}
    </div>
  );
};

export default Hour;
