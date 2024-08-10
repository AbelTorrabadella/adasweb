import '../css/slider2.css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider2 = (props) => {
  return (
    <div className='swipper2'>
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
                <SwiperSlide className='swiper2'>
                    <img src={imatge.foto} className='sliderfoto2'></img>
                    <div className='titols2'>{imatge.titol}</div>
                </SwiperSlide>
            )
        })}
    </Swiper>
    
    </div>
  );
};

export default Slider2;