import { CardName } from "./cardName/CardName"
import "./Card.css"
import { CardImg } from "./cardImg/CardImg"
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
            </div>
            <div className="price-butt">
                <CardPrice />
                <CardButton />
            </div>
        </div>
    )
}
