import React from "react";
import NavBar from "../../../NavBar";
import BookingCard from "../../../roomscards/BookingCard";

const AllBookings = () => {
    const dummyData = new Array(3).fill("True");
    console.log(dummyData);

  return (
    <div>
      <div>
        <h1>Bookings List:</h1>
        {dummyData.map((card) => {
          return <BookingCard />;
        })}
      </div>
    </div>
  );
};

export default AllBookings;
