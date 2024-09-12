import React from 'react';
import Button from './button/Button';
import { NavLink } from 'react-router-dom';
import './Buttons.css';
import ButtonRegister from './button-register/ButtonRegister';

const Buttons = () => {
    const text = [
        { name: 'Главная', to: '/' },
        { name: 'О нас', to: '/about' },
        { name: 'Услуги', to: '/services' },
        { name: 'Избранное', to: '/favorite' }
    ];

    return (
        <div className="navlink">
            {text.map((el, index) => (
                <NavLink
                    key={index}
                    to={el.to}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    <Button name={el.name} />
                </NavLink>
            ))}
            <NavLink to='/register'>
                <ButtonRegister />
            </NavLink>

        </div>
    );
}

export default Buttons;
