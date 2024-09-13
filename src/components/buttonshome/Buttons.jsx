import React from 'react';
import './Buttons.css';
import { NavLink } from 'react-router-dom';

const Buttons = () => {
  return (
    <div className='buttons'>
      <NavLink
        to='/description'
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <button>Описание</button>
      </NavLink>

      <NavLink
        to='/charecteristics'
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <button>Характеристики</button>
      </NavLink>
    </div>
  );
}

export default Buttons;
