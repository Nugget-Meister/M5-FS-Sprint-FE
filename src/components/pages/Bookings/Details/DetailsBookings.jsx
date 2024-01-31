import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { getSingleBooking, getSingleES } from '../../../shared/apicallsbooking';
import BookingCardS from '../subcomponents/BookingCardS';
import { useParams } from 'react-router-dom';
const DetailsBookings = () => {
    const [booking, setBooking] = useState(null)
    const [es, setES] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        getSingleBooking(id)
        .then(json =>{
            setBooking(json.data)
            getSingleES(json.data.meeting_room_id)
            .then(json => {
                console.log(json)
                setES(json)
            })
        })

    }, [])

    const [room, setRoom] = useState(null)
    return (
        <div>
            <BookingCardS data={booking} room={es}/>
            <Button variant="danger">Cancel</Button>
        </div>
    );
}

export default DetailsBookings;
