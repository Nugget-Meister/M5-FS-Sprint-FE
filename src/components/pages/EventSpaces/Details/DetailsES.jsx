import React from "react";
import { useState, useEffect } from "react";
import AppointmentCard from "../../../roomscards/AppointmentCard";
import {getSingleES,getBookingsForRoom} from "../../../shared/apicallsbooking";
import BookRoom from "../../../forms/BookRoom";

const DetailsES = () => {
  const [roomDetails, setRoomDetails] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const roomId = match.params.id;

    getSingleES(roomId)
      .then((response) => {
        setRoomDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching room details:", error);
      });

    getBookingsForRoom(roomId)
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, [match.params.id]);

  return (
    <div>
      <h2>Room Details</h2>
      {roomDetails && (
        <div>
          <p>Name: {roomDetails.name}</p>
          <p>Capacity: {roomDetails.capacity}</p>
          <p>Location: {roomDetails.location}</p>
        </div>
      )}
      <div>
        <BookRoom />
      </div>
      <h2>Bookings List For This Room</h2>
      <div>
        {bookings.map((booking, index) => (
          <AppointmentCard key={index} data={booking} />
        ))}
      </div>
    </div>
  );
};

export default DetailsES;
