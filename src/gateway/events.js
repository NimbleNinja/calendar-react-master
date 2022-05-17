const url = 'https://6230a0d6f113bfceed572660.mockapi.io/todolist/events';

export const fetchEvents = () =>
  fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => {
      alert("Internal Server Error. Can't display events");
    });

export const sendEventToServer = event =>
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

export const deleteEventFromServer = id =>
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
