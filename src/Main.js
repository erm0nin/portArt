import { useState } from "react";
import ModalWindow from './ModalWindow'
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import slide_image from "./12.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Main() {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () =>{
    setShowModal(true)
  }

  const handleCloseModal = () =>{
    setShowModal(false)
  }

  return (
    <div className="App">
      
      <header>
        <div className="menu">
          <a href="">Обо мне</a>
          <a href="">Услуги</a>
          <a href="">Отзывы</a>
          <a href="">Гарантии</a>
        </div>
        <button onClick={handleOpenModal} className="btn">Связаться</button>
        <ModalWindow show={showModal} onClose={handleCloseModal}>
          <h2 style={{color:"#4824ff", fontSize: "40px"}}>Контакты</h2>
          <p style={{fontSize: "22px"}}> Вы можете связаться со мной в telegram</p>
        </ModalWindow>
        <a className="icon telegram" target="_blank" href="https://t.me/romanov_t">1</a>
        <a className="icon instagram" target="_blank" href="https://t.me/romanov_t">1</a>
      </header>

      <div className="welcome-block">
        <div className="first-block">
          <h1>Видеоограф <span  className="title">Артем Романов</span></h1>
          <h2 style={{marginBottom:"7%", marginTop:"7%"}}>
            Создаю <span style={{color:"#4824ff"}}>качественные </span>
            видео <br /> под ваши запросы
          </h2>
        </div>
         <div className="main-image-box">
       </div>
      </div>
      
      <div className="service-block" draggable="false">
        <h1 style={{display:"flex",justifyContent:"center", fontSize: "52px"}}>Услуги</h1>
        <p style={{fontSize: "27px"}}>Создаю
          <span style={{color: "#4824ff"}}> видео по следущим напрвлениям:</span>
          </p>
          <div  style={{fontWeight:"700", display: "flex", gap:"10px", fontSize:"30px"}}>
          <p className="ys">Рекламные видео</p>
          <p className="ys">Сьемки мероприятий</p>
          <p className="ys">Корпаративы</p>
          <p className="ys">Монтаж роликов</p>
          <p className="ys">Видео под ключ</p>
          </div>
        <p style={{fontSize:'27px'}}>Создам видеоролики и их монтаж в соответствии с вашими индивидуальными требованиями.<br /> 
        Более подробную информацию готов предоставить в  
        <span onClick={handleOpenModal} style={{color:"#4824ff", cursor:"pointer"}}> личной переписке</span></p>
      </div>

      <div className="portfolio">
        <h2>Портфолио</h2>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate:0,
          stretch:0,
          depth:100,
          modifier:2.5,
        }}
        className="swiper_container"
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={'auto'}
      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="swiperSlide"><a href="https://t.me/romanov_t"><img src={slide_image} alt="" /></a></SwiperSlide>
       <SwiperSlide><a href="https://t.me/romanov_t"><img className="sliderImage" src={slide_image} alt="" /></a></SwiperSlide>
       <SwiperSlide><a href="https://t.me/romanov_t"><img src={slide_image} alt="" /></a></SwiperSlide>

    </Swiper>
      </div>
    </div>
    
  );
}

export default Main;
