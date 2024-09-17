import React from 'react';
import './AutoImg.css';
import audi from "../../assets/png/AUDI.png";


const AutoImg = () => {
    return (
        <div>
           <div className="car-image">
               < img className='cars-image' src={audi} alt="audi car" />
           </div>
        </div>
    );
}

export default AutoImg;
