import { Baner } from "./baner/Baner"
import Modal from "./modal/Modal"
import './baner/Baner.css'
import { NavLink } from "react-router-dom"

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
        <NavLink to='/description'>
          <button>Описание</button>
        </NavLink>

      </div>
    </div>
  )
}

export default Banner