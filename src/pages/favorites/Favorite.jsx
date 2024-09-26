
import { Footer } from '../../ui/footer/Footer'
import { Header } from '../../ui/header/Header'
// import { FavoriteIndicator } from './fav-indicator/FavoriteIndicator'
// import { FavoriteText } from './fav-text/FavoriteText'
import './Favorite.css'
import { Card } from '../../ui/cardSection/card/Card'
import Banner from '../../components/baner/Banner'


export const Favorite = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className='container cards-cont'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />  
      </div>
      <Footer />
    </div>
  )
}
