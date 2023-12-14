
import React from 'react'
import { Home } from '../src/Home/Home'
import Volunteer from '././Volunteer/Volunteer'
import Fundraise from '././Fundraise/Fundraise'
import Contact from '././Contact/Contact'
import Footer from '././Footer/Footer'

function App() {
  return (
    <div>
      {/* <Home/> */}
      <Volunteer/>
      {/* <Fundraise/> */}
      <Contact/>
      <Footer/>
    </div>
    // <Home/>
    
  )
}

export default App