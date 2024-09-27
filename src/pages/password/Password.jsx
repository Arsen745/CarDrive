import Steering from "../../assets/svg/steering.svg";
import arrow from "../../assets/svg/arrow.svg";
import "./Password.css";
import {Input} from 'antd'
import { useNavigate } from "react-router-dom";

const Password = () => {
  const navigate = useNavigate()
  return (
    <div className="auth-container">
      <img className="brand-logo" src={Steering} alt="car" />
      <div className="auth-form">
        <div className="passwort">
          <div className="back-arrow">
            <img className="arrow-icon" src={arrow} alt="arrow" />
          </div>
          <h2 className="heading">Забыли пароль</h2>
          <p className="subheading">Введите свой аккаунт!</p>
        </div>
        <label>
          <div>
            Email*
            <div className="input-wrapper">
            <Input style={{ background: '#292E39', color: 'white' }} />
            </div>
          </div>
        </label>
        <button onClick={() => {
          navigate('/passwordcode')
        }} type="submit" className="continue-button">
          Продолжать
        </button>
      </div>
    </div>
  );
};

export default Password;
