import React from 'react'
import './Contact.css'
import h from "./h.png"

function Contact() {
  return (
    <div className="main1">
        <div className="div">
            <img src={h} alt="" className="element" />
            <div className="text-wrapper">Contact Us</div>
            <label className="text-wrapper-4">Email:</label>
            <div className="overlap">
            <input className="text-wrapper-5" placeholder='Enter your mail id...' type='text'/>

            </div>
            <label  className="text-wrapper-2">Enquiry:</label>
            <br/>
            
            <div className="overlap-group">
            <textarea  cols='30' rows='4' className="text-wrapper-5"  placeholder='Enter all your doubts...' />
            </div>
            
            
            <button className="get-blood-button">
                <div className="get-blood">
                    <div className="text-wrapper-6">
                        Submit
                    </div>
                </div>
            </button>

        </div>
    </div>
  )
}

export default Contact
