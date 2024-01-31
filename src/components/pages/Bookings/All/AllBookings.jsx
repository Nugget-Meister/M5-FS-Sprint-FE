import React from "react";
import { useState, useEffect } from "react";
import { getAllBookings, getAllES } from "../../../shared/apicallsbooking";
import BookingCardS from "../subcomponents/BookingCardS";


const AllBookings = () => {

    const [bookings, setBookings] = useState([{}])
    const [rooms, setRooms] = useState(null)

    useEffect(() => {

        getAllBookings()
        .then(json => {
            // console.log(json.data)
            setBookings(json.data)
        })
        getAllES()
        .then(json => {
            // console.log(json)
            setRooms(json)
        })
        
        
      
        }, [])
    
    // const dummyData = new Array(3).fill("True");
    // console.log(bookings);

  return (
  <>x
        {
          bookings ? 
            bookings.map((data) => {
              if(data.meeting_room_id && rooms){
                const room = rooms.filter(room => room.meeting_room_id == data.meeting_room_id)[0]
                return <BookingCardS key={data.booking_id} data={data} room={room}/>;
              }
            })
          : null
        }
        
  </>


  );
};

export default AllBookings;
