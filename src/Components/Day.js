import dayjs from 'dayjs'
import React from 'react'

export default function Day({ day, rowIndex }) {
  function getCurrentDay() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'bg-blue-600 px-2 py-2 text-white rounded-full' : ""
  }

  return (
    <div className='border border--gray-200 flex flex-col'>
      <header className='flex flex-col items-center'>
        {rowIndex === 0 && (<p className='text-sm p-1 mt-1'>{day.format('ddd').toUpperCase()}</p>)}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDay()}`}>{day.format('DD')}</p>
      </header>

    </div>
  )
}
