import Banner from '../../../components/baner/Banner'
import { People } from '../../../components/people/People'
import Services from '../../../components/services/Services'
import { Footer } from '../../../ui/footer/Footer'
import { Header } from '../../../ui/header/Header'
import TrustSect from '../../../ui/trustSection/TrustSect'

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <TrustSect />
      <People />
      <Footer />
    </div>
  )
}
