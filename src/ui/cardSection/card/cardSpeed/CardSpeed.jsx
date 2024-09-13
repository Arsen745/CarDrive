import { SpeedElectr } from "./SpeedElectr/SpeedElectr"
import { SpeedKM } from "./SpeedKM/SpeedKM"
import { SpeedSec } from "./SpeedSec/SpeedSec"

export const CardSpeed = () => {
    return (
        <div>
            <div style={{display: 'flex', gap: 20, marginBottom: 8}}>
                <SpeedSec />
                <SpeedKM />
            </div>
            <SpeedElectr />
        </div>
    )
}
