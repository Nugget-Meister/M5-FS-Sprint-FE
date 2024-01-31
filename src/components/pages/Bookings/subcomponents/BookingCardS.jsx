import React from 'react';
import Card from 'react-bootstrap/Card'

const BookingCardS = ({data}) => {
    // console.log(data)
    return (
        <Card className='text-start'>
        <Card.Title>{data.name}</Card.Title>
            <Card.Text>Room</Card.Text>
            <Card.Text>Start</Card.Text>
            <Card.Text>End</Card.Text>
            <Card.Text>Floor</Card.Text>
    </Card>
    );
}

export default BookingCardS;
