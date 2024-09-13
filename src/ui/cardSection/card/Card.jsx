import { CardName } from "./cardName/CardName"
import "./Card.css"
import { CardImg } from "./cardImg/CardImg"
import { CardSpeed } from "./cardSpeed/CardSpeed"
import { CardButton } from "./cardButton/CardButton"
import { CardPrice } from "./cardPrice/CardPrice"

export const Card = () => {
    return (
        <div className="card-container">
            <CardName />
            <CardImg />
            <CardSpeed />
            <div style={{ display: 'flex', justifyContent: 'space-between' ,alignItems: 'center' }}>
                <CardPrice />
                <CardButton />
            </div>
        </div>
    )
}
