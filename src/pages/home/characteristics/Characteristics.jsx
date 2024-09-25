import { Header } from '../../../ui/header/Header'
import { Footer } from '../../../ui/footer/Footer'
import Buttons from '../../../components/buttonshome/ButtonsH'
import AutoImg from '../../../components/autoImg/AutoImg'
import InforAuto from '../../../components/InforAuto/InforAuto'
import './Characteristics.css';



export const Characteristics = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Buttons />
        <h1 className='auto'> Audi A8-технические характеристики</h1>
        <div className='audi'>
          <AutoImg />
          <InforAuto />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Characteristics
