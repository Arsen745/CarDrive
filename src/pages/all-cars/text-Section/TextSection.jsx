import phone from '../../../assets/svg/Phone.svg'
import './TextSection.css'

export const TextSection = () => {
  return (
    <div className='container text2'>
        <div className='text1'>
            <h2>Электромобили</h2>
            <h2>в Бишкеке</h2>
        </div>
        <div className='sect'>
            <h3>РАССРОЧКА 6/9/12 МЕСЯЦЕВ</h3>
        </div>
        <div className='flex-sect'>
            <img src={phone} alt="" />
            <p>+996 700-72-77-45</p>
        </div>
    </div>
  )
}
