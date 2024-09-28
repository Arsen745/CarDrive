import { AllHeader } from "./all-header/AllHeader"
import './AllCars.css'
import { TextSection } from "./text-Section/TextSection"
import { AllSection } from "./allSection/AllSection"
// import { AllCardSect } from "./allCardSect/AllCardSect"

const AllCars = () => {
  return (
    <div className="head-all-cars">
      <AllHeader />
      <div className="">
        <AllSection />
        <TextSection />
        {/* <AllCardSect /> */}
      </div>
    </div>
  )
}

export default AllCars