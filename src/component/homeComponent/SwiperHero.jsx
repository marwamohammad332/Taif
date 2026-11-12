import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import women from '../../imges/women.webp'
import { Box, Button, Typography } from '@mui/material';
import  SlideOne  from "./SlideOne";
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import SlideFour from './SlideFour';


export default function SwiperHero() {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
            >
                <SwiperSlide>
                    <SlideOne />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideTwo />
                </SwiperSlide>
                <SwiperSlide>
                   <SlideThree />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideFour />
                </SwiperSlide>

            </Swiper>
        </>
    )
}
