
import {Footer} from "../../../ui/footer/Footer"
import { Header } from "../../../ui/header/Header"
import "./Description.css"
import InforAudiTwo from "../../../components/inforAudiTwo/InforAudiTwo.jsx";
import AutoImgTwo from "../../../components/autoImgTwo/AutoImgTwo.jsx";
import Buttons from '../../../components/buttonshome/ButtonsH'

const Description = () => {
    return (
        <div className="container">
            <Header/>
            <Buttons />
            <h1 className="h1">Audi  2016 года за ~ 175,900 сом</h1>
            <div className="flex">
                <AutoImgTwo/>
                <InforAudiTwo/>
            </div>

            <Footer/>
        </div>
    )
}

export default Description