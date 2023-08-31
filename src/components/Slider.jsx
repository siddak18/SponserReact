import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../css/slider.css"
import Sliderinfo from './Sliderinfo';


const Sliderr = () => {
    const setting={
        dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000,
    }
  return (
    <div style={{overflow:'hidden',WebkitOverflowScrolling:false}}>
      <Slider {...setting}>
      <Sliderinfo></Sliderinfo>
      <Sliderinfo></Sliderinfo>
      <Sliderinfo></Sliderinfo>
      <Sliderinfo></Sliderinfo>
      <Sliderinfo></Sliderinfo>
      </Slider>
    </div>
  )
}

export default Sliderr