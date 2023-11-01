import React from 'react';
import { useState } from 'react';
import './carousel.css';

import {images} from "../data/CarouselData";

export const CAROUSEL = () => {

    const [currImg, setCurrImg] = useState(1);

  return (
    <div className='CAROUSEL'>
        <div className="carouselInner img-container cursor">

            <div className="arrows left-arrow cursor" onClick={ () => {currImg > 0 && setCurrImg(currImg - 1)}
            }>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill='currentcolor'><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
            </div>

            <div className="arrows right-arrow cursor" onClick={ () => {currImg < 2 && setCurrImg(currImg + 1)}
            }>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill='currentcolor'><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </div>

            <img src={images[currImg].img} alt="" />
        </div>
        {/* style={ {backgroundImage: `url(${images[currImg].img})`} } */}
    </div>
  )
}
