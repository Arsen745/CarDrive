import Buttons from "../../../components/buttonshome/ButtonsH"
import { Footer } from "../../../ui/footer/Footer"
import { Header } from "../../../ui/header/Header"
import "./Description.css"
import InforAudiTwo from "../../../components/inforAudiTwo/InforAudiTwo.jsx";
import AutoImgTwo from "../../../components/autoImgTwo/AutoImgTwo.jsx";

const Description = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Buttons />
        <h1 className="h1">Audi 2016 года за ~ 175,900 сом</h1>
        <div className="flex">
          <AutoImgTwo />
          <InforAudiTwo />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Description

