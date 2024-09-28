import { NavLink } from "react-router-dom";
import ButtonRegister from "../../../../ui/header/butons/button-register/ButtonRegister";
import Button from "../../../../ui/header/butons/button/Button"

export const AllButtons = () => {

    const textBtn = [
        { name: 'Главная', to: '/' },
        { name: 'О нас', to: '/about' },
        { name: 'Услуги', to: '/services' },
        { name: 'Избранное', to: '/favorite' }
    ];

    return (
        <div className="navlink">
            {textBtn.map((el, index) => (
                <NavLink
                    key={index}
                    to={el.to}
                    className={({ isActive }) => isActive ? "navli active" : "navli"}
                >
                    <Button className='navbtn' name={el.name} />
                </NavLink>
            ))}
            <NavLink to='/register'>
                <ButtonRegister />
            </NavLink>
        </div>
    )
}
