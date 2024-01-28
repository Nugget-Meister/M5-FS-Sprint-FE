import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'

// Import Pages
import AllBookings from './components/pages/Bookings/All/AllBookings'
import AllES from './components/pages/EventSpaces/All/AllES'
import NewES from './components/pages/EventSpaces/New/NewES'
import DetailsES from './components/pages/EventSpaces/Details/DetailsES'
import NewBookings from './components/pages/Bookings/New/NewBookings'
import DetailsBookings from './components/pages/Bookings/Details/DetailsBookings'

function App() {

  return (
   
   <>
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<AllES/>}/>
          <Route path='/bookings' element={<AllBookings/>}/>
          <Route path='/bookings/new' element={<NewBookings/>}/>
          <Route path='/bookings/:id' element={<DetailsBookings/>}/>
          {/* <Route path='/events' element={<AllES/>}/> */}
          <Route path='/events/new' element={<NewES/>}/>
          <Route path='/events/:id' element={<DetailsES/>}/>
        </Routes>
      </main>
    </Router>
   </>
  )
}

export default App
