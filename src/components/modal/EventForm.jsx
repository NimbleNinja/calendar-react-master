import React from 'react';

const EventForm = () => {
  return (
    <form className="event-form">
      <input type="text" name="title" placeholder="Title" className="event-form__field" />
      <div className="event-form__time">
        <input type="date" name="date" className="event-form__field" />
        <input
          type="time"
          name="startTime"
          className="event-form__field"
          //onChange={this.handleChange}
        />
        <span>-</span>
        <input type="time" name="endTime" className="event-form__field" />
      </div>
      <textarea
        name="description"
        placeholder="Description"
        className="event-form__field"
      ></textarea>
      <button type="submit" className="event-form__submit-btn">
        Create
      </button>
    </form>
  );
};

export default EventForm;
