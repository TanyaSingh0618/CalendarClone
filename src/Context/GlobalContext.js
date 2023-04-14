import React from 'react'

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => { },
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => { },
    selectedDay: null,
    setselectedDay: (index) => { },
    showEventModal: false,
    setshowEventModal: (index) => { }
});

export default GlobalContext;
