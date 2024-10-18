import React, { useState } from 'react';
import axios from 'axios';

const AppointmentBooking = () => {
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');

    const bookAppointment = async () => {
        try {
            const response = await axios.post('/book', { date });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Booking failed');
        }
    };

    return (
        <div>
            <h1>Book an Appointment</h1>
            <input 
                type="datetime-local" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
            />
            <button onClick={bookAppointment}>Book</button>
            <p>{message}</p>
        </div>
    );
};

export default AppointmentBooking;
