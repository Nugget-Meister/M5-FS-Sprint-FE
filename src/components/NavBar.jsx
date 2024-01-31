import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'

import "./NavBar.css";

const NavBar = () => {

  return (
    <div>
      <div className="navbar">

        <Link to="/">
          <Button variant="light">Meeting Rooms</Button>
        </Link>
        <Link to="/bookings">
          <Button variant="light">Bookings</Button>
        </Link>
        <Link to='/events/new'>
          <Button variant="light">New Room</Button>
        </Link>

      </div>
    </div>
  );
};

export default NavBar;