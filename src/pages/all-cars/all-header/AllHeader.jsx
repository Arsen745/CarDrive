import { AllButtons } from "./buttons/AllButtons"
import { AllLogo } from "./logo/AllLogo"
import './AllHeader.css'
import { AllInput } from "./allInput/AllInput"

export const AllHeader = () => {
  return (
    <div className="container-allheader container">
        <AllLogo />
        <AllInput />
        <AllButtons />
    </div>
  )
}
