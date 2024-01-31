import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { getSingleBooking, getSingleES } from '../../../shared/apicallsbooking';
import BookingCardS from '../subcomponents/BookingCardS';
const DetailsBookings = () => {
    const [booking, setBooking] = useState(null)

    useEffect(() => {
        getSingleES()
        getSingleBooking()
    }, [])

    const [room, setRoom] = useState(null)
    return (
        <div>
            <BookingCardS data={booking} room={room}/>
           <Button variant="danger">Cancel</Button>
        </div>
    );
}

export default DetailsBookings;
