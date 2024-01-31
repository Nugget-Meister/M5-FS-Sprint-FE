import React from "react";
import { useState, useEffect } from "react";
import { getAllBookings, getSingleBooking } from "../../../shared/apicallsbooking";
import BookingCardS from "../subcomponents/BookingCardS";


const AllBookings = () => {

    const [bookings, setBookings] = useState([''])
    const [rooms, setRooms] = useState([''])

    useEffect(() => {

        getAllBookings()
        .then(json => {
            console.log(json)
            setBookings(json.data)
        })
        
      
        }, [])
    
    // const dummyData = new Array(3).fill("True");
    console.log(bookings);

  return (
    <div>
      <div>
        {/* <h1>Bookings List:</h1> */}
        {bookings.map((card) => {
          return <BookingCardS data={card}/>;
        })}
      </div>
    </div>
  );
};

export default AllBookings;
