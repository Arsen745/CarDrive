import './BanerElements.css'
import ElectricCar from '../../../assets/svg/ElecrticCar.svg'
import Hybrid from '../../../assets/svg/mdi_gasoline.svg'


const BanerElements = () => {
  return (
    <div className='baner-elements'>
        <div className="electric-car">
            <img src={ElectricCar} alt="" />
            <h3>Electric car</h3>

        </div>
        <div className="start">
            <div className="start2">
                <h4>Start</h4>
            </div>

        </div>
        <div className="hybrid">
            <img src={Hybrid} alt="" />
            <h3>Hybrid Electric</h3>

        </div>
    </div>
  )
}

export default BanerElements