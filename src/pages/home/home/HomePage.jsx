import Banner from '../../../components/baner/Banner'
import Services from '../../../components/services/Services'
import { Card } from '../../../ui/cardSection/card/Card'
import { Footer } from '../../../ui/footer/Footer'
import Header from '../../../ui/header/Header'
import { Section } from '../../../ui/section/Section'
import TrustSect from '../../../ui/trustSection/TrustSect'



const HomePage = () => {
  return (
    <div className='container'>
        <Header/>
        <Banner/>
        <Services/>
        <Section />
        <Card />
        <TrustSect />
        <Footer />
    </div>
  )
}

export default HomePage