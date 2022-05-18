import moment from 'moment';

const url = 'https://6230a0d6f113bfceed572660.mockapi.io/todolist/events';

export const fetchEvents = () =>
  fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error();
    })
    .then(events =>
      events.map(event => ({
        ...event,
        dateFrom: new Date(event.dateFrom),
        dateTo: new Date(event.dateTo),
      })),
    )
    .catch(() => {
      alert("Internal Server Error. Can't display events");
    });

export const addEvent = event =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  })
    .then(response => {
      if (response.status === 201) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => {
      alert("Internal Server Error. Can't display events");
    });

export const removeEvent = id =>
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => {
      alert("Internal Server Error. Can't display events");
    });

export const getCurrentWeekEvents = (events, weekStartDate) => {
  const startOfWeek = moment(weekStartDate).startOf('week').add(1, 'day');
  const endOfWeek = moment(weekStartDate).endOf('week').add(1, 'day');

  return events.filter(({ dateFrom, dateTo }) => dateFrom >= startOfWeek && dateTo <= endOfWeek);
};
