import Search from '../../../../assets/svg/поиск.svg'
import './AllInput.css'

export const AllInput = () => {
  return (
    <div className="input-search">
        <img src={Search} alt="" />
        <input type="text" placeholder="Поиск"/>
    </div>
  )
}
