import { AllAuto } from "./allAuto/AllAuto"
import { Indicator } from "./indicator/Indicator"
import { YourCar } from "./yourCar/YourCar"

export const Section = () => {
  return (
    <div>
        <AllAuto />
        <YourCar />
        <Indicator />
    </div>
  )
}
