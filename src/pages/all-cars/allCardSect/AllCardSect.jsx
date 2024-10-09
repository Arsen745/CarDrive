import AllFilter from './allFilter/AllFilter'
import { Dropdown } from './dropdownCard/Dropdown'
import './AllCardSect.css'

export const AllCardSect = () => {
  return (
    <div className='container pop'>
        <AllFilter />
        <Dropdown />
    </div>
  )
}
