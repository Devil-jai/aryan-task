import { Swiper, SwiperSlide } from "swiper/react";
import HeroImg from "../../assets/Hero1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import Sidebar from "../Sidebar";
// import { Sidebar } from "flowbite-react";

export default function HeroSlider() {
  return (
    <>
    <div className="absolute z-10"><Sidebar/></div>
      <div className="w-auto relative">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative h-screen w-screen">
              <button className="absolute top-3/4 left-1/2 transform -translate-x-1/2 font-bold text-white border-2 px-20 py-3 rounded">
                Meet Chef Matt
              </button>
              <img
                src={HeroImg}
                alt="Slide 1"
                className="h-full w-full object-center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-screen w-screen">
              <button className="absolute top-3/4 left-1/2 transform -translate-x-1/2 font-bold text-white border-2 px-20 py-3 rounded">
                Meet Chef Matt
              </button>
              <img
                src={HeroImg}
                alt="Slide 1"
                className="h-full w-full object-center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-screen w-screen">
              <button className="absolute top-3/4 left-1/2 transform -translate-x-1/2 font-bold text-white border-2 px-20 py-3 rounded">
                Meet Chef Matt
              </button>
              <img
                src={HeroImg}
                alt="Slide 1"
                className="h-full w-full object-center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-screen w-screen">
              <button className="absolute top-3/4 left-1/2 transform -translate-x-1/2 font-bold text-white border-2 px-20 py-3 rounded">
                Meet Chef Matt
              </button>
              <img
                src={HeroImg}
                alt="Slide 1"
                className="h-full w-full object-center"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
