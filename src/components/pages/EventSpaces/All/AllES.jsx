import React from "react";
import { useState, useEffect } from "react";
import { getAllBookings } from "../../../shared/apicallsbooking";
import RoomCard from "../../../roomscards/RoomCard";

const AllES = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    getAllBookings()
      .then((data) => {
        if (data) {
          setSpaces(data);
        }
      })
      .catch((error) => console.error("There was an error.", error));
  }, []);

  return (
    <div>
    {spaces.map((space, index) => (
      <RoomCard key={index} data={space} />
    ))}
  </div>
);};

export default AllES;
