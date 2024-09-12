import {Route,Routes} from 'react-router-dom'
import HomePage from '../../pages/home/home/HomePage'
import About from '../../pages/about/About'
import Services from '../../pages/services/Services'
import Favorite from '../../pages/favorites/Favorite'
import Register from '../../pages/register/Register'

const rout = [
  {
    path: '/',
    component: <HomePage/>,
    key: 'home'
  },
  {
    path: '/about',
    component: <About/>,
    key: 'about'

  },
  {
    path: '/services',
    component: <Services/>,
    key: 'services'
  },
  {
    path: '/favorite',
    component: <Favorite/>,
    key: 'favorite'
  },
  {
    path: '/register',
    component: <Register/>,
    key: 'favorite'
  }
]

const AppRouter = () => {
  return (
    <Routes>
      {rout.map(el => (
        <Route path={el.path} element={el.component} key={el.key}/>
      ))}
    </Routes>
  )
}

export default AppRouter