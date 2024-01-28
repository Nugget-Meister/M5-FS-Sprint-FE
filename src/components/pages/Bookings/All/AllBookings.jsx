import React from 'react';
import AvailableRooms from '../../../forms/AvailableRooms';
import RoomCard from '../../../roomscards/RoomCard';


const AllBookings = () => {
    return (
        <div>
            <NavBar/>
            <AvailableRooms/>
            <RoomCard/>
        </div>
    );
}

export default AllBookings;