const url = 'https://6230a0d6f113bfceed572660.mockapi.io/todolist/events';

export const fetchEvents = () =>
  fetch(url).then(response => {
    const err = new Error("Internal Server Error. Can't display events");
    try {
      if (response.status === 200) {
        return response.json();
      }
      throw err;
    } catch {
      alert(err.message);
      return null;
    }
  });

export const sendEventToServer = event =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(event),
  }).then(response => {
    const err = new Error("Internal Server Error. Can't display events");
    try {
      if (response.status === 201) {
        return response.json();
      }
      throw err;
    } catch {
      alert(err.message);
      return null;
    }
  });

export const deleteEventFromServer = id =>
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    const err = new Error("Internal Server Error. Can't display events");

    try {
      if (response.status === 200) {
        return response.json();
      }
      throw err;
    } catch {
      alert(err.message);
      return null;
    }
  });
