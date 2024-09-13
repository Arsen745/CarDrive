import React from 'react'
import "./Card.css"
import Logo from "../../../assets/svg/Logo.svg"

const Card = (props) => {
    const {text} = props

    return (
        <div>
            <div className="card">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="text"><h2>{text}</h2></div>
            </div> 
        </div>
    )
}

export default Card
