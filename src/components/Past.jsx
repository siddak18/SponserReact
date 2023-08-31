import React from 'react'
import img from "../Assets/sebastian-herrmann-NbtIDoFKGO8-unsplash 1 (1).png"
import "../css/past.css"
const Past = () => {
  return (
    <div className='help'>
       <div className="content">
           <div id="del" class="heading4">How We helped <br/><span>Our past sponsors</span></div>
           
           <p>E-Cell NIT Bhopal has successfully staged Central India's Largest events, and now aims to attract audiences from all over the country. Our beneficiaries have got an opportunity to interact and advance their network among the youth and all other intended users. We have a family of satisfied sponsors who are pleased to have worked with us, interact with their targeted and enthusiastic audience and anticipate further collaborations too. Our team has generated successful conversions from associates and has fulfilled all deliverables and commitments. We consistently stand cooperative and obligated to our partners.</p>
      </div>
      <div className="images">
        <div id="hh" className="heading4">How We helped <br/><span>Our past sponsors</span></div>
        <div className="box-handel">
        <div className="box"></div>
        <div className="box2"></div>
    </div>
        <div className="images-img">
            <div className="box22"></div>
        <img src={img} alt="" width="100%" height="100%"/>
    </div>
      </div>
    </div>
  )
}

export default Past