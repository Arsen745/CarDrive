import km from '../../../../../assets/svg/km-speed.svg'
import './SpeedKM.css'

export const SpeedKM = () => {
  return (
    <div className='km'>
        <img src={km} alt="" />
        <p>356 Km/h</p>
    </div>
  )
}
