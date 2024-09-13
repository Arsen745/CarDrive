
import { Footer } from '../../ui/footer/Footer'
import Header from '../../ui/header/Header'
import { FavoriteIndicator } from './fav-indicator/FavoriteIndicator'
import { FavoriteText } from './fav-text/FavoriteText'
import './Favorite.css'
import { Card } from '../../ui/cardSection/card/Card'

const Favorite = () => {
  return (
    <div>
      <Header />
      <FavoriteText />
      <FavoriteIndicator />      
      <Card />
      <Footer />
    </div>
  )
}

export default Favorite