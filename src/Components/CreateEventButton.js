import React, { useContext } from 'react'
import plusSvg from '../Assests/plus.svg';
import GlobalContext from '../Context/GlobalContext';

export default function CreateEventButton() {
    const { setshowEventModal } = useContext(GlobalContext);
    return (
        <button className='border p-2 rounded-full flex items-center shadow-md hover-shadow-2xl'
            onClick={() => setshowEventModal(true)}>
            <img src={plusSvg} alt="logo" className='w-7 h-7' />
            <span className='pl-3 pr-7'>Create</span>
        </button>
    )
}
