import React from 'react'
import Logo from './Logo/Logo'
import Buttons from './butons/Buttons'
import './Header.css'

const Header = () => {
  return (
    <div className='container-header'>
        <Logo/>
        <Buttons/>

    </div>
  )
}

export default Header