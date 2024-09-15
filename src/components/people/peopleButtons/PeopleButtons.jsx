import leftbtn from '../../../assets/svg/arrow-left.svg';
import rightbtn from '../../../assets/svg/arrow-right.svg';
import './PeopleButtons.css';

export const PeopleButtons = ({ scrollLeft, scrollRight }) => {
    return (
        <div>
            <div className='btns'>
                <button onClick={scrollLeft}>
                    <div className='leftbtn'><img src={leftbtn} alt="Scroll left" /></div>
                </button>
                <button onClick={scrollRight}>
                    <div className='rightbtn'><img src={rightbtn} alt="Scroll right" /></div>
                </button>
            </div>
            <div className='btn-review'>
                <button className='btn-rev'>Оставить отзыв</button>
            </div>
        </div>
    );
};
