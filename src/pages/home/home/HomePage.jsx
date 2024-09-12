import Banner from '../../../components/baner/Banner'
import { Footer } from '../../../ui/footer/Footer'
import Header from '../../../ui/header/Header'

const HomePage = () => {
  return (
    <div className='container'>
        <Header/>
        <Banner/>
        <Footer />
    </div>
  )
}

export default HomePage