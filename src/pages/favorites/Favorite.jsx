
import { Footer } from '../../ui/footer/Footer'
import { Header } from '../../ui/header/Header'
// import { FavoriteIndicator } from './fav-indicator/FavoriteIndicator'
// import { FavoriteText } from './fav-text/FavoriteText'
import './Favorite.css'
import { Card } from '../../ui/cardSection/card/Card'


export const Favorite = () => {
  return (
    <div className='container'>
      <Header />
      <Card/>
      <Footer />
    </div>
  )
}
