// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/autoplay';
import '../../../styles/image.scss';
import { Box } from '@mui/material';
import { Fragment } from 'react';
import { EffectCube, Autoplay } from 'swiper';

export const Carousel = () => {
  const sampleImages = ['./PaintBrush.jpeg', './Otis.jpeg', './Cow.jpeg', './Boy.jpeg', './Mum.jpeg']

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, m: 3, display: { xs: 'flex', md: 'none' } }}>
        <Swiper modules={[EffectCube, Autoplay]} effect="cube"
          spaceBetween={1}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
          loop={true}
        >
          <SwiperSlide><img src='./small-PaintBrush.jpeg' /></SwiperSlide>
          <SwiperSlide><img src='./small-Boy.jpeg' /></SwiperSlide>
          <SwiperSlide><img src='./small-Otis.jpeg' /></SwiperSlide>
          <SwiperSlide><img src='./small-Cow.jpeg' /></SwiperSlide>
          <SwiperSlide><img src='./small-Mum.jpeg' /></SwiperSlide>

        </Swiper>
      </Box>

      <Box sx={{ mx: 11, m: 3, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Swiper modules={[EffectCube, Autoplay]} 
          spaceBetween={1}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false
        }}
        >
          <SwiperSlide><img src='./PaintBrush.jpeg' /></SwiperSlide>
          <SwiperSlide><img src='./Boy.jpeg' /></SwiperSlide>
          <SwiperSlide><img src='./Otis.jpeg' /></SwiperSlide>
          <SwiperSlide><img src='./Cow.jpeg' /></SwiperSlide>
          <SwiperSlide><img src='./Mum.jpeg' /></SwiperSlide>
        </Swiper>
      </Box>
    </Fragment>
  );
};
