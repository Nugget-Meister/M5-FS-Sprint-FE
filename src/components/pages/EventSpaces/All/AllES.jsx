import React from "react";
import { useState, useEffect } from "react";

import { getAllES } from "../../../shared/apicallsbooking";

import RoomCard from "../../../roomscards/RoomCard";
import AvailableRooms from "../../../forms/AvailableRooms";

const AllES = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    getAllES()
      .then((data) => {
        if (data) {
          setSpaces(data);
        }
      })
      .catch((error) => console.error("There was an error.", error));
  }, []);

  return (
    <div>
        <div>
            <AvailableRooms></AvailableRooms>
        </div>
    {spaces.map((space, index) => (
      <RoomCard key={index} data={space} />
    ))}
  </div>
);};

export default AllES;