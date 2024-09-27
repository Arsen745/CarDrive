import './BanerElements.css'
import facebook from '../../../assets/svg/ri_facebook-fill.svg'
import instagramm from '../../../assets/svg/ri_instagram-line.svg'
import twitter from '../../../assets/svg/ri_twitter-line.svg'
import telegram from '../../../assets/svg/telegram.svg'


const BanerElements = () => {
  return (
    <div className='baner-elements'>
        <h3>Наши социальные сети</h3>
        <div className="hybrid">
            <img src={facebook} alt="" />
            <img src={instagramm} alt="" />
            <img src={twitter} alt="" />
            <img src={telegram} alt="" />
        </div>

    </div>
  )
}

export default BanerElements