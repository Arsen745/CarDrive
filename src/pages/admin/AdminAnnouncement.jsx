import "./AdminAnnouncement.css"
import LogoImage from "./assets/svg/Image-logo.svg"
const AdminAnnouncement = () => {
  return (
    <div className='MyAds-container'>
      <div className='add-ad-container'><h1 className='add-ad'>Добавить объявление</h1></div>
      <div className='ZagLogoImg-container'>
        <h2 className='Zagolovok'>Заголовок</h2>
        <div className='Logo-Image-container'><img src={LogoImage} alt="" className='Logo-Image'/></div>
      </div>
      <hr />
      <div className='inputs-adds-container'>
        <h1 className='add-activ'>Добавить обзор активности</h1>
        <div className='inputs-container'>
          <div className='inputs-right'>
            <input type="text" placeholder='Заголовок' className='Zagolovok-input'/><br />
            <input type="text" placeholder='Описание' className='Opisanie-input'/><br />
            <input type="number" placeholder='+996 (      )' className='Number-input'/><br />
            <input type="text" placeholder='Рассрочка 6\9\12  месяцев' className='Rasrochka-input'/>
          </div>
          <div className='input-left-container'>
            <button className='Download-image-button'>Загрузите изображение</button>
            <h3 className='Formats'>Допустимые форматы : PNG , GIF , <br /> WEBP , 
            MP3 , and MP4 </h3>
          </div>
        </div>
      </div>
      <div className='two-buttons-container'>
        <button className='back-button'>Назад</button>
        <button className='Save-and-publish-button'>Сохранить и опубликовать</button>
      </div>
    </div>
  )
}

export default AdminAnnouncement