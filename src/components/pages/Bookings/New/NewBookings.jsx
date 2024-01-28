import React from 'react';
import Button from 'react-bootstrap/Button';

const NewBookings = () => {
    return (
    <div className="bookRooms">
      <h1>Book Room:</h1>
      <label>Start Date:</label>
      <input type="date" />
      <label>End Date:</label>
      <input type="date" />
      <label>Attendees:</label>
      <input type="number" />
      <Button variant="light">Submit</Button>
    </div>
    );
}

export default NewBookings;
