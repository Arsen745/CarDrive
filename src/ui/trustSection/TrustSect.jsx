import Left from "./left/Left"
import Right from "./right/Right"
import './TrustSect.css'

const TrustSect = () => {
  return (
    <div className="trust-container">
      <div className="trust1">
        <Left/>
        <Right/>
      </div>
      <div className="trust1">
        <Right/>
        <Left/>
      </div>
      <div className="trust1">
        <Left/>
        <Right/>
      </div>

    </div>
  )
}

export default TrustSect