import Banner1 from '../assets/banner1.png'
import Banner2 from '../assets/banner2.jpg'
import Banner3 from '../assets/banner3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div>
      <Swiper
       modules={[Navigation,Pagination,Autoplay]}
      //  navigation={true} 
       pagination={{clickable:true}} 
       autoplay={{delay:2500}} 
       loop={true}
       >
        <SwiperSlide>
           <div>
            <img src={Banner1} className="w-full h-full object-cover"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
           <div>
            <img src={Banner2} className="w-full h-full object-cover"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
           <div>
            <img src={Banner3} className="w-full h-full object-cover"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
