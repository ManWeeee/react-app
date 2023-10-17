import React, { useState } from 'react';
import logo from "../img/gerb.png";
import NewsList from './NewsList';
import DatePicker from './DatePicker';

function App() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App main-body">
      <header>
          <img src={logo} className='header-logo'/>
          <h1 className='header-text'>Застосунок для виконання самостійної роботи з Веб Програмування</h1>
      </header>
      <DatePicker onDateChange={handleDateChange} />
      <NewsList selectedDate={selectedDate} />
    </div>
  );
}

export default App;