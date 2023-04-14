import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import GlobalContext from './GlobalContext';

export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [selectedDay, setselectedDay] = useState(dayjs());
    const [showEventModal, setshowEventModal] = useState(false);
    useEffect(() => {
        if (smallCalendarMonth !== null) {
            setMonthIndex(smallCalendarMonth)
        }
    }, [smallCalendarMonth]);
    return (
        <GlobalContext.Provider value={{
            monthIndex,
            setMonthIndex,
            smallCalendarMonth,
            setSmallCalendarMonth,
            selectedDay,
            setselectedDay,
            showEventModal,
            setshowEventModal
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
