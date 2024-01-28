import React from "react";
// import "./AvailableRooms.css"

export default function AvailableRooms() {
  return (
    <div className="available-rooms">
      <h1>Find Available Rooms</h1>
      <label>Start Date:</label>
      <label>End Date:</label>
      <label>Floor:</label>
      <input type="number" />
      <label>Capacity:</label>
      <input type="number" />
      {/* <button onClick={DoSomething}>Find</button> */}
    </div>
  );
}
