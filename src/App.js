import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import { getMonth } from './util';
import Month from './Components/Month'
import CalendarHeader from './Components/CalendarHeader';
import Sidebar from '../src/Components/Sidebar';
import GlobalContext from './Context/GlobalContext';
import EventModal from './Components/EventModal';

function App() {
  const [currentMonth, setcurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setcurrentMonth(getMonth(monthIndex));
  }, [monthIndex])

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className='flex flex-1'>
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
