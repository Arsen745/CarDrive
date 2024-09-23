import React from "react";
import Steering from "../../assets/svg/steering.svg";
import arrow from "../../assets/svg/arrow.svg";
import Eyes from "../../assets/svg/eyes.svg";
import "./login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo">
        <img className="logos" src={Steering} alt="car" />
      </div>
      <div className="login-form">
        <div className="navigation">
          <div className="arrow">
            <img className="arrow-image" src={arrow} alt="arrow" />
            <h2 className="title">Войти</h2>
          </div>
        </div>
        <label>
          <div>
            Email*
            <div className="input-container">
              <input className="input-field" type="email" />
            </div>
          </div>
        </label>

        <label>
          <div>
            Пароль*
            <div className="input-container">
              <input className="input-field" type="password" />
              <img className="eye-icon" src={Eyes} alt="eye" />
            </div>
          </div>
        </label>

        {/* <label className="remember-me">
                        <input type="checkbox" />
                        Запомнить
                    </label> */}

        <button type="submit" className="submit-button">
          Войти
        </button>
        <p className="forgot-password">
          Вы ещё не зарегистрированы?
          <NavLink to="/sign-in">Забыли пароль?</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
