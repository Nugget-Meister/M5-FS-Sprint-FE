import React from 'react';
import Card from 'react-bootstrap/Card'
import {useNavigate} from 'react-router'

const BookingCardS = ({data, room}) => {
    // console.log(data, room, data == null)
    const navigate = useNavigate()
    if(data == null){
        data = {
            name: '$value', start_time:'$value', end_time:'$value'
        }
    }
    if(!room){
        room = {
            name: '$value', floor: '$value'
        }
    }



    return (
        <Card 
            key={data.booking_id}
            className='text-start btn btn-dark'
            onClick={() => navigate(`/bookings/${data.booking_id}`)}    
                >
        <Card.Title>{data.name}</Card.Title>
            <Card.Text>{room.name}</Card.Text>
            <Card.Text>Start: {data.start_time}</Card.Text>
            <Card.Text>End: {data.end_time}</Card.Text>
            <Card.Text>Floor: {room.floor}</Card.Text>
    </Card>
    );
}

export default BookingCardS;
