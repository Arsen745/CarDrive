import { NavLink } from "react-router-dom";
import Button from "../../header/butons/button/Button";
import './FooterCompany.css'

export const FootCompany = () => {
    const text = [
        { name: 'Главная', to: '/' },
        { name: 'О нас', to: '/about' },
        { name: 'Услуги', to: '/services' },
        { name: 'Избранное', to: '/favorite' }
    ];

    const sortedText = text.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="nav">
            <h1>Компания</h1>
            {sortedText.map((el, index) => (
                <NavLink
                    key={index}
                    to={el.to}

                >
                    <Button name={el.name} />
                </NavLink>
            ))}


        </div>
    );
}
