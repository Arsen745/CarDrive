import LogoFoot from '../../../assets/svg/Logo.svg'
import './Footer.css'

export const FootLogo = () => {
    return (
        <div>
            <div className='foot-logo'>
                <img src={LogoFoot} alt="" />
                <h1>AUTO</h1>
                <div>
                    <p className='foot-prgf'>Мы предлагаем лучшие автомобили самых известных мировых брендов.</p>
                </div>
            </div>
        </div>
    )
}
