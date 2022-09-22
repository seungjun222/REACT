import React from 'react';
import './css/PianoSlide.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';
SwiperCore.use([Navigation, Pagination])	

const PianoBrand = ({ pianoId }) => {
  // yamaha: 1, steinway: 2, boesendorfer: 3

  return (
    <>
          <Swiper
            className='swiper'
            modules={[Pagination, Navigation]}
            spaceBetween={0}
            loop
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {pianoId === 1 && <a href='https://usa.yamaha.com/products/musical_instruments/pianos/premium_pianos/cf_series/cf-series.html' target={'_blank'} rel={'noopener noreferrer'}><img src="/images/y1.jpg" alt="YAMAHA" /></a>}
              {pianoId === 2 && <a href="https://www.steinway.com/pianos/steinway/grand" target={'_blank'} rel={'noopener noreferrer'}><img src="/images/s1.jpg" alt="STEINWAY" /></a>}
              {pianoId === 3 && <a href="https://www.boesendorfer.com/en/pianos/pianos" target={'_blank'} rel={'noopener noreferrer'}><img src="/images/b1.jpg" alt="BOESENDORFER" /></a>}
            </SwiperSlide>
            <SwiperSlide>
              {pianoId === 1 && <a href='https://usa.yamaha.com/products/musical_instruments/pianos/premium_pianos/cf_series/cf-series.html' target={'_blank'} rel={'noopener noreferrer'}><img src="/images/y2.jpg" alt="YAMAHA" /></a>}
              {pianoId === 2 && <a href="https://www.steinway.com/pianos/steinway/grand" target={'_blank'} rel={'noopener noreferrer'}><img src="/images/s2.jpg" alt="STEINWAY" /></a>}
              {pianoId === 3 && <a href="https://www.boesendorfer.com/en/pianos/pianos" target={'_blank'} rel={'noopener noreferrer'}><img src="/images/b2.jpg" alt="BOESENDORFER" /></a>}
            </SwiperSlide>
            <SwiperSlide>
              {pianoId === 1 && <a href='https://usa.yamaha.com/products/musical_instruments/pianos/premium_pianos/cf_series/cf-series.html' target={'_blank'} rel={'noopener noreferrer'}><img src="/images/y3.jpg" alt="YAMAHA" /></a>}
              {pianoId === 2 && <a href="https://www.steinway.com/pianos/steinway/grand" target={'_blank'} rel={'noopener noreferrer'}><img src="/images/s3.jpg" alt="STEINWAY" /></a>}
              {pianoId === 3 && <a href="https://www.boesendorfer.com/en/pianos/pianos" target={'_blank'} rel={'noopener noreferrer'}><img src="/images/b3.jpg" alt="BOESENDORFER" /></a>}
            </SwiperSlide>
          </Swiper>

    </>
  );
};


export default PianoBrand;
