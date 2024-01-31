import React from "react";
import "./RoomCard.css"

const RoomCard = ({data}) => {
    return (
        <div className="RoomCard">
           <h1>{data.name}</h1>
            <p>Capacity: {data.capacity}</p>
            <p>Floor: {data.floor}</p>
        </div>
    );
};

export default RoomCard;