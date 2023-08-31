import React, { useState } from 'react'
import "../css/learnmore.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown, faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons'
import img3 from "../Assets/bargraph2.jpg"
import { svg10, svg11, svg2 } from '../data'
const Learnmore = () => {
  const [toggel,settoggel]=useState(false);
  const handeltoggel=()=>{
    settoggel(!toggel);
  }
  return (
    <div className=''>
      <div className="learn-more">
        <div className="heading5" id="toggel">
            Learn more <span id="rotate" onClick={handeltoggel}>
              { toggel?
                <FontAwesomeIcon icon={faAngleDoubleDown} style={{transition:'1s',marginLeft:'3px'}}></FontAwesomeIcon>:
                <FontAwesomeIcon icon={faAngleDoubleUp} style={{transition:'1s',marginLeft:'3px'}}></FontAwesomeIcon>
              }
            </span>
        </div>
        <div className="side-box b">
        </div>
       </div>
       <div className={!toggel?"toggel":"remove"}>
           
      <div className="heading7">E-Cell Marketing</div>
      <div class="types">
        <div class="self">
            {svg10}
                <div>Self Marketing</div>
        </div>
        <div class="ecell">
            {svg11}
                <div>Ecell Marketing</div>
        </div>
      </div>
      <div className="graph">
        <div className="graphh">
        <img src={img3} alt="" width="100%" height="100%"/>
    </div>
      </div>
      <div className="points">
       <ul>
        <li>{svg2} Our huge social media reach(8 lakhs+) and high website traffic elevates our Online Marketing conversion rates for a specified expenditure.</li>
        <li>{svg2}Our Email Marketing conversion rates are generally higher as our participants form the indispensable target audience you wish to extend your reach to.</li>
        <li>{svg2} We have an excellent network of start-ups, investors, past sponsors and alumni who will greatly increase your prospects to a higher conversion at Network Marketing.</li>
        <li>{svg2} We have an annual footfall of 25k+ participants from all over India, we also have a no. of VCs, AIs and other dignitaries adorning our events considerably favouring conversion odds.</li>
        <li>{svg2}Promoting yourself with us would lead you to build direct connections with our audience base and have a better impact on your target audience.</li>
       </ul>
      </div>
       </div>
    </div>
  )
}

export default Learnmore