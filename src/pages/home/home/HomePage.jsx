import Banner from '../../../components/baner/Banner'
import Services from '../../../components/services/Services'
import { Footer } from '../../../ui/footer/Footer'
import Header from '../../../ui/header/Header'
import { Section } from '../../../ui/section/Section'



const HomePage = () => {
  return (
    <div className='container'>
        <Header/>
        <Banner/>
        <Services/>
        <Section />
        <Footer />
    </div>
  )
}

export default HomePage