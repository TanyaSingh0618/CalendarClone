import dayjs from 'dayjs';
import React, { useState, useEffect, useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';
import { getMonth } from '../util';

const SmallCalendar = () => {
    const [currentMonthIndex, setcurrentMonthIndex] = useState(dayjs().month());
    const [currentMonth, setcurrentMonth] = useState(getMonth());
    useEffect(() => {
        setcurrentMonth(getMonth(currentMonthIndex));
    }, [currentMonthIndex])

    const { monthIndex, setSmallCalendarMonth, setselectedDay, selectedDay } = useContext(GlobalContext)
    useEffect(() => {
        setcurrentMonthIndex(monthIndex)
    }, [monthIndex])
    const handlePrevMonth = () => {
        setcurrentMonthIndex(currentMonthIndex - 1);
    }
    const handleNextMonth = () => {
        setcurrentMonthIndex(currentMonthIndex + 1);
    }
    const getDay = (day) => {
        const format = "DD-MM-YY"
        const NowDay = dayjs().format(format);
        const currentDay = day.format(format);
        const slctDay = selectedDay && selectedDay.format(format);
        if (NowDay === currentDay) {
            return 'bg-blue-500 rounded-full text-white'
        } else if (currentDay === slctDay) {
            return 'bg-blue-100 rounded-full text-blue-600 font-bold'
        } else {
            return ''
        }
    }
    return (
        <div className='mt-9'>
            <header className='flex justify-between'>
                <p className='text-gray-500 font-bold'>
                    {dayjs(new Date(dayjs().year(), currentMonthIndex)).format("MMMM YYYY")}
                </p>
                <div>
                    <button onClick={handlePrevMonth}>
                        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                            chevron_left
                        </span>
                    </button>
                    <button onClick={handleNextMonth}>
                        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                            chevron_right
                        </span>
                    </button>
                </div>
            </header>
            <div className='grid grid-cols-7 grid-rows-6'>
                {currentMonth[0].map((day, i) => (
                    <span key={i} className="text-sm py-1 text-center">
                        {day.format('dd').charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, index) => (
                            <button key={index} onClick={() => { setSmallCalendarMonth(currentMonthIndex); setselectedDay(day) }} className={`py-1 w-full ${getDay(day)}`}>
                                <span className='text-sm'>{day.format('D')}</span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default SmallCalendar;

