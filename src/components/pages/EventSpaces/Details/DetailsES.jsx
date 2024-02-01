import React from "react";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import AppointmentCard from "../../../roomscards/AppointmentCard";
import {getAllBookings, getSingleES} from "../../../shared/apicallsbooking";
import BookRoom from "../../../forms/BookRoom";

const DetailsES = () => {
  const [roomDetails, setRoomDetails] = useState(null);
  const [bookings, setBookings] = useState(null);

  const {id} = useParams()

  useEffect(() => {
    // const roomId = match.params.id;

    getSingleES(id)
      .then((response) => {
        setRoomDetails(response);
        return response
      })
      .then(res => {
        console.log(res)
          getAllBookings()
          .then(json => json.data)
          .then(data => {
            setBookings(data.filter(booking => res.meeting_room_id == booking.meeting_room_id))}
            )
      })
      .catch((error) => {
        console.error("Error fetching room details:", error);
      });


  }, []);

  return (
    <div>
      <h2>Room Details</h2>
      {roomDetails ? (
        <div>
          <p>Name: {roomDetails.name}</p>
          <p>Capacity: {roomDetails.capacity}</p>
          <p>Location: {roomDetails.location}</p>
        </div>
      ) : null}
    <BookRoom />
      <h2>Bookings List For This Room</h2>
      <div>
        {bookings ? bookings.map((booking, index) => (
          <AppointmentCard key={index} data={booking} />
        )) : null}
      </div>
    </div>
  );
}

export default DetailsES;