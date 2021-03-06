import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import '../../../styles/image.scss';
import { Box } from '@mui/material';
import { Fragment } from 'react';
import { EffectCube, Autoplay } from 'swiper';

export const Carousel = () => {
  const sampleImages = ['./Otis.jpeg', './Cow.jpeg', './Boy.jpeg', './Water.jpeg']

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, m: 1, display: { xs: 'flex', md: 'none' } }}>
        <Swiper modules={[EffectCube, Autoplay, Navigation, Pagination, Scrollbar, A11y]} effect="cube"
          spaceBetween={1}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          loop={true}
        >
          <SwiperSlide><img src='./small-Boy.jpeg' /></SwiperSlide>
          <SwiperSlide><img src='./small-Otis.jpeg' /></SwiperSlide>
          <SwiperSlide><img src='./small-Cow.jpeg' /></SwiperSlide>
          <SwiperSlide><img src='./small-Water.jpeg' /></SwiperSlide>

        </Swiper>
      </Box>

      <Box sx={{ mx: 11, m: 3, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Swiper modules={[EffectCube, Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
        >
          <SwiperSlide><img src='./Boy.jpeg' /></SwiperSlide>
          <SwiperSlide><img src='./Otis.jpeg' /></SwiperSlide>
          <SwiperSlide><img src='./Cow.jpeg' /></SwiperSlide>
          <SwiperSlide><img src='./Water.jpeg' /></SwiperSlide>
        </Swiper>
      </Box>
    </Fragment>
  );
};
