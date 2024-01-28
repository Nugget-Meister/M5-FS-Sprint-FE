import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <Button variant="light">Meeting Rooms</Button>
        <Button variant="light">Bookings</Button>
        <Button variant="light">New Room</Button>
        {/* <Link to="/components/pages/EventSpaces/All/AIIES">Meeting Rooms</Link>
        <Link to="/components/pages/Bookings/All/AllBookings">Bookings</Link>
        <Link to="/components/pages/EventSpaces/New/NewES">New Room</Link> */}
      </div>
    </div>
  );
};

export default NavBar;