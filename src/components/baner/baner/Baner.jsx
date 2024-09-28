import BannerText from '../baner-text/BanerText'
import './Baner.css'

export const Baner = () => {
  return (
    <div
      className='baner'
      style={{ backgroundImage: `url('https://www.fonstola.ru/images/201410/fonstola.ru_149391.jpg')`, height: 700, backgroundRepeat: 'no-repeat' , backgroundPosition: 'center', width: '100%', backgroundSize: 'cover' }}
    >
        <BannerText />
    </div>
  )
}
