import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { mockCommunications } from "../../data/mockCommunications";
import "../styles/CalendarView.css";

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [communicationsForDate, setCommunicationsForDate] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split("T")[0];
    const filteredCommunications = mockCommunications.filter(
      (comm) => comm.date === formattedDate
    );
    setCommunicationsForDate(filteredCommunications);
  };

  const isDateHighlighted = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return mockCommunications.some((comm) => comm.date === formattedDate);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month" && isDateHighlighted(date)) {
      return "highlighted-date";
    }
    return null;
  };

  const isHighlightedComm = (commDate) => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    return commDate === formattedDate;
  };

  return (
    <div className="calendar-view-container">
      <h3>Calendar</h3>
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        tileClassName={tileClassName}
      />
      <div className="communications-list">
        <h4>Communications for {selectedDate.toDateString()}</h4>
        {communicationsForDate.length > 0 ? (
          <ul>
            {communicationsForDate.map((comm) => (
              <li
                key={comm.id}
                className={
                  isHighlightedComm(comm.date) ? "highlighted-meeting" : ""
                }
              >
                <strong>{comm.type}</strong> - {comm.notes} (on {comm.date})
              </li>
            ))}
          </ul>
        ) : (
          <p>No communications scheduled for this date.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
