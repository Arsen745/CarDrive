import LogoFoot from '../../../assets/svg/Logo.svg'
import './Footer.css'

export const FootLogo = () => {
    return (
        <div>
        <div className="footLogo">
            <img src={LogoFoot} alt="" />
            <div className="auto">
                <h2>AUTO</h2>
            </div>
        </div>

    </div>
    )
}
