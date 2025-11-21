import React from 'react'
import hero_img from '../../assets/hero.png';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero_container'>
        <div className='hero_content'>
          <h1>CLASSY FASHION</h1>
          <img src={hero_img} alt=''/>
        </div>
      </div>
    </div>
  )
}
export default Hero;
