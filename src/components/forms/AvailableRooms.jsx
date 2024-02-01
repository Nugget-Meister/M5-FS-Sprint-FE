import React, { useState } from "react";
import { Form, Button, Card, FormControl } from 'react-bootstrap';
import {useNavigate} from 'react-router';

export default function AvailableRooms() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [floor, setFloor] = useState("");
  const [capacity, setCapacity] = useState("");
  const navigate = useNavigate();

  const handleFindRooms = () => {
    
  };

  return (
    <div className="available-rooms m-3">
    <h1>Find Available Rooms</h1>
    <Form>
      <Form.Group className="start-date">
        <Card.Title>Start Date:</Card.Title>
        <Form.Control
          type="date"
          value={startDate}
          onChange={(setStart) => setStartDate(setStart.target.value)}
        />
      </Form.Group>

      <Form.Group className="end-date">
        <Card.Title>End Date:</Card.Title>
        <Form.Control
          type="date"
          value={endDate}
          onChange={(setEnd) => setEndDate(setEnd.target.value)}
        />
      </Form.Group>

      <Form.Group className="floor">
        <Card.Title>Floor:</Card.Title>
        <Form.Control
          type="number"
          value={floor}
          onChange={(setFloor) => setFloor(setFloor.target.value)}
        />
      </Form.Group>

      <Form.Group className="capacity">
        <Card.Title>Capacity:</Card.Title>
        <Form.Control
          type="number"
          value={capacity}
          onChange={(setCap) => setCapacity(setCap.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleFindRooms}>
        Find
      </Button>
    </Form>
  </div>
  );
}
