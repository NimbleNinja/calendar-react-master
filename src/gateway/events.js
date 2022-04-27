// const events = [
//  {
//    id: 1,
//    title: 'Go to the gym',
//    description: 'some text here',
//    dateFrom: new Date(2022, 3, 26, 14, 10),
//    dateTo: new Date(2022, 3, 26, 16, 0),
//  },
//  {
//    id: 2,
//    title: 'Go to the school',
//    description: 'hello, 2 am',
//    dateFrom: new Date(2022, 3, 27, 13, 0),
//    dateTo: new Date(2022, 3, 27, 13, 10),
//  },
//  {
//    id: 3,
//    title: 'Lunch',
//    description: '',
//    dateFrom: new Date(2020, 8, 17, 10, 30),
//    dateTo: new Date(2020, 8, 17, 11, 30),
//  },
//  {
//    id: 4,
//    title: 'Meet friend',
//    description: 'at the cafe',
//    dateFrom: new Date(2020, 8, 25, 10, 30),
//    dateTo: new Date(2020, 8, 25, 11, 0),
//  },
// ];

const url = 'https://6230a0d6f113bfceed572660.mockapi.io/todolist/events';

export const fetchEvents = () =>
  fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return null;
  });

export const sendEventToServer = event =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(event),
  }).then(response => {
    if (response.ok) {
      return response.json();
    }

    return null;
  });

export const deleteEventFromServer = id =>
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (response.ok) {
      return response.json();
    }

    return null;
  });
