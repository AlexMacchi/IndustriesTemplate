"use client";
// Swiper components, modules and styles
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import styles from '../../../styles/components/Blog.module.css'
import Blog_Card from './BlogCard';


export default function BlogCard(){
    return(
        <div className={styles.container}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                }}
                // pagination={true}
                modules={[EffectCoverflow,Pagination,Autoplay]}
                className="mySwiper"
                >
                <SwiperSlide>
                    <Blog_Card 
                        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nesciunt consectetur molestias labore ullam, reiciendis, 
                        sapiente quasi inventore eos voluptatum incidunt asperiores 
                        doloribus laudantium nulla quae. Minus tenetur nostrum voluptatibus quae?'
                        image='./images/People_1.jpg'
                        title='Someone Famous'
                        workingPosition='Creative Designer'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Blog_Card 
                        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nesciunt consectetur molestias labore ullam, reiciendis, 
                        sapiente quasi inventore eos voluptatum incidunt asperiores 
                        doloribus laudantium nulla quae. Minus tenetur nostrum voluptatibus quae?'
                        image='./images/People_2.jpg'
                        title='Someone Famous'
                        workingPosition='Creative Designer'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Blog_Card 
                        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nesciunt consectetur molestias labore ullam, reiciendis, 
                        sapiente quasi inventore eos voluptatum incidunt asperiores 
                        doloribus laudantium nulla quae. Minus tenetur nostrum voluptatibus quae?'
                        image='./images/People_3.jpg'
                        title='Someone Famous'
                        workingPosition='Creative Designer'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Blog_Card 
                        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nesciunt consectetur molestias labore ullam, reiciendis, 
                        sapiente quasi inventore eos voluptatum incidunt asperiores 
                        doloribus laudantium nulla quae. Minus tenetur nostrum voluptatibus quae?'
                        image='./images/People_4.jpg'
                        title='Someone Famous'
                        workingPosition='Creative Designer'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Blog_Card 
                        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nesciunt consectetur molestias labore ullam, reiciendis, 
                        sapiente quasi inventore eos voluptatum incidunt asperiores 
                        doloribus laudantium nulla quae. Minus tenetur nostrum voluptatibus quae?'
                        image='./images/People_5.jpg'
                        title='Someone Famous'
                        workingPosition='Creative Designer'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Blog_Card 
                        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nesciunt consectetur molestias labore ullam, reiciendis, 
                        sapiente quasi inventore eos voluptatum incidunt asperiores 
                        doloribus laudantium nulla quae. Minus tenetur nostrum voluptatibus quae?'
                        image='./images/People_6.jpg'
                        title='Someone Famous'
                        workingPosition='Creative Designer'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}