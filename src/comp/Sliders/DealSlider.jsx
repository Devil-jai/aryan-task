
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import DealImg from '../../assets/deal.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function DealSlider() {
  return (
    <>
      <div className="">
        <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
  <div className="relative h-96 w-screen text-center">
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 font-bold ">
      <p className='text-3xl font-normal'>Online Only</p>
      <div className='bg-black h-1 w-20 mx-auto my-10'></div>
      <p className='text-3xl font-normal w-2/3 mb-10 mx-auto'>GET 20% OFF YOUR ORDER OF $50 OR MORE
      Use code “Chef20”</p>
      <button className="absolute left-1/2 transform -translate-x-1/2 font-bold text-black border-2 border-black px-20 py-3 rounded">
      Meet Chef Matt
    </button>

    </div>
    <img 
      src={DealImg} 
      alt="Slide 1" 
      className="h-full w-full object-center"
    />
  </div>
</SwiperSlide>
        <SwiperSlide>
  <div className="relative h-96 w-screen text-center">
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 font-bold ">
      <p className='text-3xl font-normal'>Online Only</p>
      <div className='bg-black h-1 w-20 mx-auto my-10'></div>
      <p className='text-3xl font-normal w-2/3 mb-10 mx-auto'>GET 20% OFF YOUR ORDER OF $50 OR MORE
      Use code “Chef20”</p>
      <button className="absolute left-1/2 transform -translate-x-1/2 font-bold text-black border-2 border-black px-20 py-3 rounded">
      Meet Chef Matt
    </button>

    </div>
    <img 
      src={DealImg} 
      alt="Slide 1" 
      className="h-full w-full object-center"
    />
  </div>
</SwiperSlide>
        <SwiperSlide>
  <div className="relative h-96 w-screen text-center">
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 font-bold ">
      <p className='text-3xl font-normal'>Online Only</p>
      <div className='bg-black h-1 w-20 mx-auto my-10'></div>
      <p className='text-3xl font-normal w-2/3 mb-10 mx-auto'>GET 20% OFF YOUR ORDER OF $50 OR MORE
      Use code “Chef20”</p>
      <button className="absolute left-1/2 transform -translate-x-1/2 font-bold text-black border-2 border-black px-20 py-3 rounded">
      Meet Chef Matt
    </button>

    </div>
    <img 
      src={DealImg} 
      alt="Slide 1" 
      className="h-full w-full object-center"
    />
  </div>
</SwiperSlide>
        <SwiperSlide>
  <div className="relative h-96 w-screen text-center">
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 font-bold ">
      <p className='text-3xl font-normal'>Online Only</p>
      <div className='bg-black h-1 w-20 mx-auto my-10'></div>
      <p className='text-3xl font-normal w-2/3 mb-10 mx-auto'>GET 20% OFF YOUR ORDER OF $50 OR MORE
      Use code “Chef20”</p>
      <button className="absolute left-1/2 transform -translate-x-1/2 font-bold text-black border-2 border-black px-20 py-3 rounded">
      Meet Chef Matt
    </button>

    </div>
    <img 
      src={DealImg} 
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
