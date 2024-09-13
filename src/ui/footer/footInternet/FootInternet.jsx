import facebook from '../../../assets/svg/ri_facebook-fill.svg'
import instagramm from '../../../assets/svg/ri_instagram-line.svg'
import twitter from '../../../assets/svg/ri_twitter-line.svg'
import './FooterInternet.css'

export const FootInternet = () => {
  return (
    <div className='internet-foot'>
        <div>
            <h1>Наши социальные сети</h1>
        </div>
        <div className='svg-internet'>
            <img src={facebook} alt="" />
            <img src={instagramm} alt="" />
            <img src={twitter} alt="" />
        </div>
    </div>
  )
}
