import React, { useState } from 'react'
import "./Volunteer.css"
function Volunteer() {
  // let yellow = '#ffc800';
  // const [bgColor, setBgColor] = useState(yellow);
  //  const changeColor =()=>{
  //     let purple = '#A020F0';
  //     setBgColor(purple);
  //   }
  return (
    <div className="main">
      <div className="div">
        <div className="overlap-group">
          <div className="your-donations">
            Your donations
            <br />
            impacts lives
          </div>
          <p className="text-wrapper">
            Donating blood ? Complete your pre-reading and health history questions online before visiting your blood
            drive location
          </p>
          <img className="element" alt="Element" src="https://c.animaapp.com/QLoRG39j/img/3-11@2x.png" />
        </div>
        <div className="overlap">
          <div className="because-your-help">
            Because your
            <br />
            help matters
          </div>
          <p className="find-the-nearest">
            Find the nearest blood donation center <br />
            and save life
          </p>
          <img className="img" alt="Element" src="https://c.animaapp.com/QLoRG39j/img/4-1@2x.png" />
          <div className="get-blood-button">  
            <div className="get-blood">
              <div className="text-wrapper-2">Volunteer Yourself</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Volunteer