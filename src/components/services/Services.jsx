import React from 'react'
import './Services.css'
import Logo from '../../assets/png/Loco1.png'
import Card from './card-services/Card'
import './card-services/Card.css'

const Services = () => {
    const text = [
        {
            text: 'Оценка автомобиля'
        },
        {
            text: 'Подготова к продаже '
        },
        {
            text: 'Комиссионная продажа'
        },
        {
            text: 'Консультатция по рынку'
        },
        {
            text: '-Обмен старого автомобиля на новый с доплатой'
        },
        {
            text: 'Фотосъемка и создание объявления'
        }
    ]
    return (
        <div className='container22 container' style={{ backgroundImage: `url(${Logo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <h1 className='texth1-service'>Наши Услуги</h1>
            <div className='cards'>
                {text.map((el, index) => (
                    <Card text={el.text} key={index} />
                ))}
            </div>

        </div>
    )
}

export default Services 