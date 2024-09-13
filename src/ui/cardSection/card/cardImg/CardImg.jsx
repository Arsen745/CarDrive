import Car from '../../../../assets/png/brand1.png'
import "./CardImg.css"

export const CardImg = () => {
  return (
    <div className='card-img'>
        <img src={Car} alt="" />
    </div>
  )
}
