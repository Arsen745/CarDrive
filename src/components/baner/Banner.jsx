import { Baner } from "./baner/Baner"
import Modal from "./modal/Modal"
import './baner/Baner.css'

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
      </div>
    </div>
  )
}

export default Banner