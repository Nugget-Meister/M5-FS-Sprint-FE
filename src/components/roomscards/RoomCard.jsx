import React from "react";
// import "./RoomCard.css"
import Card from "react-bootstrap/Card"
import {useNavigate} from 'react-router'

const RoomCard = ({data}) => {
    const navigate = useNavigate();

    return (
        <div>
        <Card
        key = {data.meeting_room_id}
        onClick={() => navigate(`/events/${data.meeting_room_id}`)}>
        <div className="RoomCard">
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>Capacity: {data.capacity}</Card.Text>
            <Card.Text>Floor: {data.floor}</Card.Text>
        </div>
        </Card>
        </div>
    );
};

export default RoomCard;