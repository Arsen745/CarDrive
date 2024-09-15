import Logo from './Logo/Logo'
import Buttons from './butons/Buttons'
import './Header.css'


export const Header = () => {
  return (
    <div className='container-header container'>
      <Logo/>
      <Buttons/>
    </div>
  )
}
