import { useState } from 'react';

//Import React Components
import Time from './components/Time.jsx';
import Metro from './components/Metro.jsx';
import Weather from './components/Weather.jsx';

//Import Slick for slider
import Slider from 'react-slick';

//Import CSS
import './App.css'

function App() {

  function nextSlide() {
    console.log("next slide");


  }

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed : 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  }

  return (
    <>
      <div className="timeSection">
        <Time/>
      </div>
     <Slider {...settings}>
        <Metro/>
        <Weather/>
      </Slider>
    </>
  )
}

export default App
