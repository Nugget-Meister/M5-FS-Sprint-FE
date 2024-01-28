import React from 'react';
import BookingCard from '../../../roomscards/BookingCard';
import Button from 'react-bootstrap/Button';
const DetailsBookings = () => {
    return (
        <div>
           <BookingCard />
           <Button variant="danger">Cancel</Button>
        </div>
    );
}

export default DetailsBookings;
