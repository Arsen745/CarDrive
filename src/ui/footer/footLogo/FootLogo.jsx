import LogoFoot from '../../../assets/svg/Logo.svg'
import { FootCompany } from '../footCompany/FootCompany'
import { FootInternet } from '../footInternet/FootInternet'
import './Footer.css'

export const FootLogo = () => {
    return (
        <div className='foot-container'>
            <div className="light1"></div>
            <div className="light2"></div>

            <div className="foot-flex">
                <div className="footLogo">
                    <img src={LogoFoot} alt="" />
                    <div className="auto">
                        <h2>AUTO</h2>
                    </div>
                </div>
                <div>
                    <p className='foot-prgf'>Мы предлагаем лучшие автомобили самых известных мировых брендов.</p>
                </div>
            </div>
                <FootCompany />
                <FootInternet />
        </div>
    )
}
