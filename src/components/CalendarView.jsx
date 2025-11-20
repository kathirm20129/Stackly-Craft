import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const CalendarView = () => {
  const [value, onChange] = useState(new Date());

  const getSelectedDateString = (val) => {
    if (Array.isArray(val)) {
      return val.map(d => d.toDateString()).join(' - ');
    }
    return val.toDateString();
  };

  return (
    <div className="calendar-view-container">
      <h2>Calendar View</h2>
      <div className="calendar-wrapper">
        <Calendar 
          onChange={onChange} 
          value={value} 
        />
      </div>
      
      <p className="selected-date-display">
        Selected date: <strong>{getSelectedDateString(value)}</strong>
      </p>
    </div>
  );
};

export default CalendarView;