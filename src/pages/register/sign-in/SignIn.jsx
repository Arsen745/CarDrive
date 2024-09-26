
import React from 'react'
import bac from '../../../assets/png/bac.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Typography, Switch } from 'antd';


const SignIn = () => {
  return (
    <div style={{backgroundImage: `url(${bac})`, width: '100%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className="forms-login">
      <div className='container' style={{ background: '#111120', width: 625, height: 658, padding: 55, borderRadius: 20, border: '1px solid red', position: 'relative' }}>
            <div onClick={() => {navigate('/')}} className="prev-icon" style={{position: 'absolute', top: 27, left: 32, cursor: 'pointer'}}>
                <i style={{fontSize: 40, color: 'white'}} className="bi bi-arrow-left"></i>
            </div>
            <div className="texts-register">
                <h1 style={{ textAlign: 'center', fontSize: 36, fontWeight: 500, marginBottom: 30 }}>Войти</h1>
            </div>
            <div className="inputs"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 25,

                }}>
                <div className="input" style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <label>Email*</label>
                    <Input.Password style={{ background: '#292E39', color: 'white' }} />
                </div>
                <div className="input" style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <label>Пароль*</label>
                    <Input.Password style={{ background: '#292E39', color: 'white' }} />
                </div>

            </div>
            <div className="check" style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 17 }}>
                <Switch style={{ border: '1px solid #868889' }} />
                <span>Запомнить</span>
            </div>
            <div className="buttons-register" style={{ marginTop: 30 }}>
                <Button type="primary" style={{ width: '100%', height: 53, fontWeight: 700, fontSize: '21px' }}>Войти</Button>
            </div>
            <div className="nav-register" style={{ textAlign: 'center', marginTop: 20 }}>
                <span>Вы ещё не зарегистрированы?</span>
                <NavLink to='/password' style={{ textDecoration: 'none', }}>
                    <span style={{ color: '#00D1FF' }}> Зарегистрировация</span>
                </NavLink>
            </div>



        </div>
      </div>
      
    </div>
  )
}

export default SignIn