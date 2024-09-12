import LogoS from '../../../assets/svg/Logo.svg'
import './Logo.css'

const Logo = () => {
  return (
    <div>
        <div className="logo">
            <img src={LogoS} alt="" />
            <div className="auto">
                <h2>AUTO</h2>
            </div>
        </div>

    </div>
  )
}

export default Logo