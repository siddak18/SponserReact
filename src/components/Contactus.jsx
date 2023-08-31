import React from 'react';
import "../css/Contactus.css";
import { svg6, svg7, svg8, svg9 } from '../data';

const Contactus = () => {
  return (
    <div className='footer'>
        <div>
      <div className="foot1"> 
        <div>Contact Us</div>
        <p>
          {svg9}+91 89894 73997
        </p>
        <p>
         {svg8} support@ecellnitb.com
        </p>
        <p>
        {svg7} Maulana Azad National Institute <br/> of Technology, Bhopal
        </p>
      </div>
      <div className="writeto">
        <div className="line2">
          {svg6}
        </div>
        <div style={{ width: "100%" }}>
          <div>write to us</div>
          <form action="" className="form2">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="4" placeholder="message"></textarea>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contactus;
