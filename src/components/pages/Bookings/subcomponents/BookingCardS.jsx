import React from 'react';
import Card from 'react-bootstrap/Card'

const BookingCardS = ({data}) => {
    console.log(data)
    return (
    <Card>
        <Card.Title>{data.name}</Card.Title>
        <Card.Body>{"data"}</Card.Body>
        <Card.Body></Card.Body>
    </Card>
    );
}

export default BookingCardS;
