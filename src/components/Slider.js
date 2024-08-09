import '../css/swiper.css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = (props) => {
  return (
    <div className='swipper'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={100}
      slidesPerView={1}
      /*navigation TREC LES FLETXES*/
      autoplay
      //pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {props.imatges.map((imatge, index ) => {
            return (
                <SwiperSlide className='swiper'>
                  {/*<div className='blacked'>
                    <div className='textblacked'>
                    <h1 className='titol_imatge'>{imatge.titol}</h1>
                    <span className='text_imatge'>{imatge.text}</span>
                    </div>
                  </div>*/}
                    <img src={imatge.foto} className='sliderfoto'></img>
                </SwiperSlide>
            )
        })}
    </Swiper>
    
    </div>
  );
};

export default Slider;