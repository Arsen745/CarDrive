import { Header } from '../../ui/header/Header';
import { Footer } from '../../ui/footer/Footer';
import Banner from '../../components/baner/Banner';

export const About = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="container">
        <div className='our-comp'>
          <p>
            обро пожаловать в "Бишкек AUTO" –Авторынок- это онлайн авторынок, где собрана подробная информация о подержанных и новых машинах, ценах и доступных комплектациях.У нас вы сможете разместить бесплатные объявления о покупке, аренде, продаже авто, коммерческого транспорта, спецтехники и авто услуг по всему Кыргызстану. На сайте вы сможете подобрать легковые автомобили с пробегом, новые, на обмен и в рассрочку.Продажа авто в Бишкеке с фото, в рассрочку и дешево.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}