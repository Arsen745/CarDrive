import React from 'react';
import './InforAuto.css';
import glass from "../../assets/svg/glass.svg";
import com from "../../assets/svg/com.svg";


const InforAuto = () => {
    return (
        <>
            <div className='main'>
            <div className="car-info">
                <p>Характеристика</p>
                <p>Марка</p>
                <p>Модель:</p>
                <p>Год выпуска:</p>
                <p>Цена:</p>
              
            </div>
         <div className="company-details">
         <p>Характеристика автомобиля Audi А8 2016</p>
                <p>Audi</p>
                <p>А8</p>
                <p>2016 год</p>
                <p>175,900 сом</p>
            </div>
            </div>

           <div className='cars'> 
            <div className='inform'> 
            < img className='images' src={glass} alt="car" />
               <p>234</p>
               
               < img className='images' src={com} alt=" car" />
               <p>0</p>
           </div>
      
           
        </div>


          
        </>
    );
}

export default InforAuto;
