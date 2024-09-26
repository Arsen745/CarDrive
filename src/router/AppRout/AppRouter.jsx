import { Route, Routes } from 'react-router-dom'
import { About } from '../../pages/about/About'
import { Services } from '../../pages/services/Services'
import { Favorite } from '../../pages/favorites/Favorite'
import  Register from '../../pages/register/Register'
import { HomePage } from '../../pages/home/home/HomePage'
import  Description from '../../pages/home/description/Description'
import { Characteristics } from '../../pages/home/characteristics/Characteristics'
import { CardButton } from '../../ui/cardSection/card/cardButton/CardButton'
import SignIn from '../../pages/register/sign-in/SignIn'
import Password from '../../pages/password/password'
import PasswordCose from '../../pages/register/password-code/PasswordCose'
import AdminHomePage from '../../pages/admin/AdminHomePage'
import AddNew from '../../pages/admin/AddNew'
import AdminAnnouncement from '../../pages/admin/AdminAnnouncement'

const rout = [
  {
    path: '/',
    component: <HomePage />,
    key: 'home'
  },
  {
    path: '/about',
    component: <About />,
    key: 'about'

  },
  {
    path: '/services',
    component: <Services />,
    key: 'services'
  },
  {
    path: '/favorite',
    component: <Favorite />,
    key: 'favorite',
  },

  {
    path: '/register',
    component: <Register />,
    key: 'favorite',
  },
  {
    path: '/home',
    component: <HomePage />,
    key: 'home',
  },
  {
    path: '/description',
    component: <Description />,
    key: 'descriptiion',
  },
  {
    path: '/charecteristics',
    component: <Characteristics />,
    key: 'charecteristics',
  },
  {
    path: '/card-button',
    component: <CardButton />,
    key: 'cardButton',
  },
  {
    path: '/login',
    component: <SignIn/>,
    key: 'login',
  },
  {
    path: '/password',
    component: <Password/>,
    key: 'password',
  },
  {
    path: '/passwordcode',
    component: <PasswordCose/>,
    key: 'passwordcode',
  },
  {
    path: '/admin',
    component: <AdminHomePage/>,
    key: 'adminhome'
  },
  {
    path: '/add-new-admin',
    component: <AddNew/>,
    key: 'add-new-admin',
  },
  {
    path: '/adminannouncement',
    component: <AdminAnnouncement/>,
    key: 'adminannouncement',
  }

]
const AppRouter = () => {
  return (
    <Routes>
      {rout.map(el => (
        <Route path={el.path} element={el.component} key={el.key} />
      ))}
    </Routes>
  )
}

export default AppRouter