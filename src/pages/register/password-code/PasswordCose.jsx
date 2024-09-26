import React from 'react'
import bac from '../../../assets/png/bac.png'
import { Flex, Input, Typography, Button } from 'antd';
import { NavLink } from 'react-router-dom';
const { Title } = Typography;
import './PasswordCose.css'


const PasswordCose = () => {
    const onChange = (text) => {
        console.log('onChange:', text);
    };
    const sharedProps = {
        onChange,
    };
    return (
        <div style={{ backgroundImage: `url(${bac})`, width: '100%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className='container' style={{ background: '#111120', width: 625, height: 613, padding: 84, borderRadius: 20, border: '1px solid red', position: 'relative', textAlign: 'center' }}>
                    <div className="title-password">\
                        <Title style={{ color: 'white', fontSize: 32, fontWeight: 500 }} level={1}>Введите 4-значный код</Title>
                    </div>
                    <div className="description-password">
                        <Title style={{ color: 'white', width: 400, margin: 'auto', fontSize: 20, fontWeight: 400 }} level={5}>На адрес электронной почты, который вы указали, должен был прийти четырехзначный код.</Title>

                    </div>
                    <Title level={5}>With formatter (Upcase)</Title>
                <div className="inputs-password">
                    <Input.OTP size='large' length={4} formatter={(str) => str.toUpperCase()} {...sharedProps} />
                </div>
                <div className="sms-code">
                    <NavLink>
                        <span>Отправить SMS ешё раз</span>
                    </NavLink>
                    <div className="span">
                        00:30
                    </div>
                </div>
                <div className="buttons-passwod">
                    <Button type='primary'>Отмена</Button>
                    <Button type='primary'>Подтвердит</Button>
                </div>

            </div>
        </div>
    )
}

export default PasswordCose