import '../css/slider3.css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider3 = (props) => {
  return (
    <div className='swipper3'>
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
        {props.fotos.map((imatges, index ) => {
            return (
                <SwiperSlide className='swiper3'>
                    <img src={imatges.foto} className='sliderfoto3'></img>
                    <div className='titols3'>{imatges.titol}</div>
                </SwiperSlide>
            )
        })}
    </Swiper>
    
    </div>
  );
};

export default Slider3;