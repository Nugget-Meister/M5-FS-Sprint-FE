import React from 'react'
import "./BookingCard.css"
import Card from "react-bootstrap/Card";

export default function BookingCard() {
  return (
    <div>
      <Card>
    <div className="bookingCard">
      <div className="cardTitle">
        <h1>Team Alpha - Scrum Set up</h1>
      </div>
      <div className="MeetingRoomName">
        <p>BoardRoom 2 </p>
      </div>
      <div className="StartDateTime">
        <p>Start: 2/1/2024 9:30AM</p>
      </div>
      <div className="EndDateTime">
        <p>End: 2/1/2024 10:30AM</p>
      </div>
      <div className="Floor">
        <p>Floor:21</p>
      </div>
    </div>
    </Card>
  </div>
  )
}
