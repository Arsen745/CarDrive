import { useNavigate } from 'react-router-dom';
import shopping from '../../../../assets/svg/ri_shopping-bag-2-line.svg'  // Путь к иконке
import './CardButtton.css'

export const CardButton = () => {
    const navigate = useNavigate();  

    const handleButtonClick = () => {
        navigate('/favorite'); 
        console.log('handleButtonClick');
    };

    return (
        <div>
            <button className='cardclick' onClick={handleButtonClick}>
                <img src={shopping} alt="Shopping Icon" />
            </button>
        </div>
    );
};
