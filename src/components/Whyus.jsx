import React from 'react'
import "../css/whyus.css"
import { whyus } from '../data'
const Whyus = () => {
  return (
    <div className='why'>
        <div className="why-top">
            <span></span>
            <span></span>
            <div className="side-box"></div>
         </div>
         <div className="heading3">
              <div className="why-back">
                <div>Why <span> </span></div>
              </div>
              <span>Sponsor Us?</span>
         </div>
         <p>
            {whyus}
         </p>
        
         <button>sponsor us</button>
         <div className="side-box2"></div>
    </div>
  )
}

export default Whyus