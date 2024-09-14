import { FootCompany } from '../footCompany/FootCompany'
import { FootInternet } from '../footinternet/FootInternet'
import './Footer.css'
import LogoFoot from '../../../assets/svg/Logo.svg'

export const FootLogo = () => {
    return (
        <div className='foot-container'>
            <div className="cont">
                <div className="cont2-text container">
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

            </div>


        </div>
    )
}   
