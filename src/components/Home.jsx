import React, { useState } from 'react';
import '../css/home.css'; // Make sure the path to your CSS file is correct
import image from '../Assets/ecell.png';
import { svg1 } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,  faTimes } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  const [display,setdisplay]=useState(false);
  const handeltog=()=>{
      setdisplay(!display);
  }
  return (
    <div className='home'>
      <header className="header">
        <nav className="navbar">
          <div className="ecell-img">
            <img src={image} alt="Ecell Logo" height="90px" width="90px" />
          </div>
          <ul className="nav-items">
                <li>HOME</li>
                <li>{svg1}</li>
                <li>ABOUT US</li>
                <li>{svg1}</li>
                <li>WHY SPONSER US</li>
                <li>{svg1}</li>
                <li>CONTACT US</li>
            </ul>
            <div className='toggle' >
              { !display?
               <FontAwesomeIcon onClick={handeltog} icon={faBars}></FontAwesomeIcon>:
               <FontAwesomeIcon onClick={handeltog} icon={faTimes} ></FontAwesomeIcon>
              }
            </div>
        </nav>
        <div className= {display?'togitems':'none'}>
             <ul className='tog-items'>
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>WHY SPONSER US</li>
              <li>CONTACT US</li>
              </ul>   
        </div>
      </header>
      <div className="heading1">Forge ahead your <br /> network</div>
      <div className="heading2">Growth and collaborations that are bound to make a change</div>
    </div>
  );
};

export default Home;
