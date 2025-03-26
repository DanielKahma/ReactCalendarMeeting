import React from "react";

const MeetingForm = ({ meeting, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>Meeting Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Meeting Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={meeting.name}
          onChange={handleChange}
        />
        <label htmlFor="date">Meeting Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={meeting.date}
          onChange={handleChange}
        />
        <label htmlFor="time">Meeting Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={meeting.time}
          onChange={handleChange}
        />
        <button type="submit">Add Meeting</button>
      </form>
    </div>
  );
}
export default MeetingForm;