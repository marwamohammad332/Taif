import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@mui/material';


export default function Hero() {
  return (
    <>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{delay:4000}}
      loop
    >
      <SwiperSlide>
        <Box>

        </Box>
      </SwiperSlide>
    </Swiper>
    </>
  )
}
