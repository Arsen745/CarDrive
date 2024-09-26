import React from 'react'
import Header from '../../../ui/header/Header'
import Buttons from '../../../components/buttonshome/ButtonsH'
import AutoImg from '../../../components/autoImg/AutoImg'
import InforAuto from '../../../components/InforAuto/InforAuto'
import'./Characteristics.css';
import { Footer } from '../../../ui/footer/Footer'

const Characteristics = () => {
  return (
    <div className='mashina container'> 
      <Header/>
      <Buttons/>
      <h1 className='auto'> Audi A8-технические характеристики</h1>
     <div className='audi'>
      <AutoImg/>
      <InforAuto/>
     </div>
      <Footer/>
     </div>
  )
}
export default Characteristics