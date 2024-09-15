import leftbtn from '../../../assets/svg/arrow-left.svg'
import rightbtn from '../../../assets/svg/arrow-right.svg'
import './PeopleButtons.css'

export const PeopleButtons = () => {
    return (
        <div>
            <div className='btns'>
                <button><div className='leftbtn'><img src={leftbtn} alt="" /></div></button>
                <button><div className='rightbtn'><img src={rightbtn} alt="" /></div></button>
            </div>
            <div className='btn-review'>
                <button className='btn-rev'>Оставить отзыв</button>
            </div>
        </div>
    )
}
