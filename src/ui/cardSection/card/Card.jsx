import { CardName } from "./cardName/CardName"
import "./Card.css"
import { CardImg } from "./cardImg/CardImg"
import { CardSpeed } from "./cardSpeed/CardSpeed"
import { CardButton } from "./cardButton/CardButton"
import { CardPrice } from "./cardPrice/CardPrice"
import { useNavigate } from "react-router-dom"

export const Card = () => {

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/description')
        console.log('card');

    }

    return (
        <div className="card-container">
            <div onClick={handleCardClick}>
                <CardName />
                <CardImg />
                <CardSpeed />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <CardPrice />
                <CardButton />
            </div>
        </div>
    )
}
