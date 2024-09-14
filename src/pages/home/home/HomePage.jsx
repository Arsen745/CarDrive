import Banner from '../../../components/baner/Banner'
import Services from '../../../components/services/Services'
import { Footer } from '../../../ui/footer/Footer'
import Header from '../../../ui/header/Header'
import TrustSect from '../../../ui/trustSection/TrustSect'



const HomePage = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Services/>
        <TrustSect />
        <Footer />
    </div>
  )
}

export default HomePage