import { Baner } from "./baner/Baner"
import Modal from "./modal/Modal"
import './baner/Baner.css'
import BanerElements from "./baner-elements/BanerElements"

const Banner = () => {

  return (
    <div className="container-baner">
      <div className="baner-container">
        <div className="baner">
          <Baner />
        </div>
        <div className="modal">
          <Modal />
        </div>
        <div className="baner-elements">
          <BanerElements/>
        </div>
      </div>
    </div>
  )
}

export default Banner