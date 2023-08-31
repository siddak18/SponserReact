import React from 'react'
import "../css/slider.css"
import { svg4, svg5 } from '../data'


const Sliderinfo = () => {
  return (
    <div className='info'>
        <div className="slide-items" id="slide-item">
            <div className="prob-content">
                {svg4}
                    <div className="aws">AWS</div>
                    <div className="heading10">
                        {svg5}
                        Web Services Partner
                        {svg5}
                    </div>
                    <div className="con">It’s been really great working with Entrepreneurship Cell NIT Bhopal considering the structure and size of the event. Our web services team was delighted with the quality of the visitors and the caliber of participants, which were much greater than expected and we are grateful to have  helped the budding startups with their journey ahead.</div>
                    <div className="circle">
                        <div ></div>
                        <div id="colorid"></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div> 
         </div>
    </div>
  )
}

export default Sliderinfo