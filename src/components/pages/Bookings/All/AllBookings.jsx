import React from "react";
import { useState, useEffect } from "react";
import { getAllBookings, getAllES } from "../../../shared/apicallsbooking";
import BookingCardS from "../subcomponents/BookingCardS";


const AllBookings = () => {

    const [bookings, setBookings] = useState([{}])
    const [rooms, setRooms] = useState([{}])

    useEffect(() => {

        getAllBookings()
        // .then(json => {
        //     // console.log(json)
        //     setBookings(json.data)
        // })
        // getAllES()
        // .then(json => {
        //     // console.log(json)
        //     setRooms(json)
        // })
        
        
      
        }, [])
    
    // const dummyData = new Array(3).fill("True");
    // console.log(bookings);

  return (
  <>
        {bookings.map((data) => {
          const room = rooms.filter(room => room.meeting_room_id == data.meeting_room_id)[0]
          if(data.meeting_room_id){
            return <BookingCardS key={data.booking_id} data={data} room={room}/>;
          }
        })}
  </>


  );
};

export default AllBookings;
