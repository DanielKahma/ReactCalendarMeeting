import React from "react";

const MeetingTable = ({ meetings }) => {
return  (
  <div>
    <h2>Meeting Table</h2>
    <table>
      <thead>
        <tr>
          <th>Meeting Name</th>
          <th>Meeting Date</th>
          <th>Meeting Time</th>
        </tr>
      </thead>
      <tbody>
        {meetings.map((meeting) => (
          <tr key={meeting.id}>
            <td>{meeting.name}</td>
            <td>{meeting.date}</td>
            <td>{meeting.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

};