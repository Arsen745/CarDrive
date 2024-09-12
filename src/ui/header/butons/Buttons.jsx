import Button from './button/Button';
import { NavLink } from 'react-router-dom';

const Buttons = () => {
    const text = [
        { name: 'Главная', to: '/' },
        { name: 'О нас', to: '/about' },
        { name: 'Услуги', to: '/services' },
        { name: 'Избранное', to: '/favorite' }
    ];

    return (
        <div className="navlink">
            {text.map((el, index) => (
                <NavLink to={el.to}>
                    <Button key={index} name={el.name} />
                </NavLink>
            ))}
        </div>
    );
}

export default Buttons;
