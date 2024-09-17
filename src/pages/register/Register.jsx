import React, { useState } from "react";
import "./Register.css";
import Steering from "../../assets/svg/steering.svg";
import arow from "../../assets/svg/arrow.svg";
import Eyes from "../../assets/svg/eyes.svg"
import { NavLink } from "react-router-dom";



const RegistrationForm = () => {
  return (
    <div className="registration-container">
      <div className="info">
            <img className="infos" src={Steering} alt="car" />
           </div>
      <div className="steering">
        <div className="Registration">
      <div className="info">
            <img className="infos" src={arow} alt="car" />
           </div>
      <h2 className="h">Регистрация</h2>
          <label>
            ФИО*
            <input type="text" />
          </label>

        
        <label>
        <div >
            Email*
          <div className="glasss">
          <input className="imp" type="email" />
          <img className="in" src={Eyes} alt="car" />
          </div>
        </div>
          </label>

          <label >
           <div>
           Пароль*
            <div className="glasss">
           <input className="imp" type="password" />
            <img className="in" src={Eyes} alt="car" />
            </div>
           </div>
          </label>

          <label>
           <div>
           Подтвердите пароль*
            <div className="glasss">
          <input className="imp" type="password" />
            <img className="in" src={Eyes} alt="car" />
            </div>
           </div>
          </label>

          {/* <label className="remember-me">
            <input type="checkbox" />
            Запомнить
          </label> */}
          <button type="submit" className="register ">
            Регистрация
          </button>
          <p className="passwords">
            Вы ещё не зарегистрированы?
            <NavLink to="/sign-in">Забыли пароль?</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
