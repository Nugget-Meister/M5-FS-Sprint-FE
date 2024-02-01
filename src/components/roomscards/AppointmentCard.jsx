import React from "react";
import "./AppointmentCard.css";
import Card from 'react-bootstrap/Card'


const AppointmentCard = ({data}) => {
  
    if(!data){
      data = {name: '', start:'', end:''}
    }
    return (
        <Card>
          <h2>{data.name}</h2>
          <p>{data.start_date}</p>
          <p>{data.end_date}</p>
        </Card>
    );
}
 
export default AppointmentCard;
