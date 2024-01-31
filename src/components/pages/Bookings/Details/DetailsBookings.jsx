import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { getSingleBooking, getSingleES, deleteBooking } from '../../../shared/apicallsbooking';
import BookingCardS from '../subcomponents/BookingCardS';
import { useNavigate, useParams } from 'react-router-dom';

const DetailsBookings = () => {
    const [booking, setBooking] = useState(null)
    const [es, setES] = useState(null)
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() => {
        getSingleBooking(id)
        .then(json =>{
            setBooking(json.data)
            getSingleES(json.data.meeting_room_id)
            .then(json => {
                // console.log(json)
                setES(json)
            })
        })

    }, [])

    const deleteItem = (id) => {
        if(confirm(`Delete ${booking.name}?`)){
            deleteBooking(id)
            .then(json => {
                console.log(json)
                if(json.data.booking_id){
                    alert(`Deleted ${json.data.name}`)
                    navigate('/bookings')
                }
            })
        } else {
            console.log(false)
        }
    }

    return (
        <div>
            <BookingCardS data={booking} room={es}/>
            <Button 
                variant="danger"
                onClick={()=> deleteItem(booking.booking_id)}
                >
                Cancel
            </Button>
        </div>
    );
}

export default DetailsBookings;
