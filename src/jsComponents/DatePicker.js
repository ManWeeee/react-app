import React, { useState } from 'react';

const DatePicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div className='date-picker'>
      <label htmlFor="datepicker" className='date-picker-text'>Оберіть дату: </label>
      <input
        type="date"
        id="datepicker"
        value= {(selectedDate != null) ? selectedDate : selectedDate = Date.now}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;