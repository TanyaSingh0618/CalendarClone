import React, { useContext, useState } from 'react';
import GlobalContext from '../Context/GlobalContext';
import { Button, Container, Dropdown, Row, Col, Table, FormControl, Alert, Image, Card, Form, ButtonGroup, CloseButton } from 'react-bootstrap';
import ScheduleIcon from '@material-ui/icons/Schedule';

const EventModal = () => {
    const { setshowEventModal, selectedDay } = useContext(GlobalContext);
    const [title, setTitle] = useState('');
    return (
        <div className='h-700 w-full fixed left-0 top-0 flex justify-center item-center'>
            <form className='bg-white rounded-lg shadow-2xl w-1/4'>
                <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                    <span className='material-icons-outlined text-gray-500'>
                        event
                    </span>
                    <button>
                        <span className='material-icons-outlined text-gray-500' onClick={() => { setshowEventModal(false) }}>
                            close
                        </span>
                    </button>
                </header>
                <div className='py-3'>
                    <div className='grid grid-cols-1/5 items-end gap-y-7'>
                        <div></div>
                        <input className='border mx-2 px-2 pt-3 pb-2 border-b-2 text-gray-600 border-gray-200 focus:ring-0 text-xl font-semibold focus:outline-none focus:border-blue-500'
                            type='text' name='Event Title'
                            placeholder='Event Title'
                            required
                            value={title} onChange={(e) => { setTitle(e.target.value) }} />
                        <Row>
                            <span className=' mx-3 text-gray-500'>
                                <ScheduleIcon /> {selectedDay.format("dddd, MMM DD")}
                            </span>
                        </Row>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EventModal;
