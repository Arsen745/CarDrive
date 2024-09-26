import Steering from "../../assets/svg/steering.svg";
import arrow from "../../assets/svg/arrow.svg";
import "./Password.css";

const Password = () => {
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
              <input className="text-input" type="email" />
            </div>
          </div>
        </label>
        <button type="submit" className="continue-button">
          Продолжать
        </button>
      </div>
    </div>
  );
};

export default Password;
