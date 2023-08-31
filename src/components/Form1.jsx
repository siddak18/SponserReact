import React from 'react';
import "../css/form1.css"
const Form1 = () => {
  return (
    <div className='become'>
      <div className="heading9">Become Our Sponsor</div>
      <form action="" className="form1">
        <div className="row">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Company name" />
        </div>
        <div className="row">
          <input type="text" placeholder="Contact no" />
          <input type="text" placeholder="Email" />
        </div>
        <textarea cols="30" rows="8" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form1;
