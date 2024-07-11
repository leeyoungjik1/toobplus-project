import React from "react";
import styles from '../styles/Section1.module.css'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// photo_01.jpg, photo_02.jpg, photo_03.jpg를 데이터로 활용
import photo1 from '../assets/photo_01.jpg'
import photo2 from '../assets/photo_02.jpg'
import photo3 from '../assets/photo_03.jpg'
const photos = [photo1, photo2, photo3]

function Section1(){
    return (
        <div className={styles.section1Page}>
            {/* ii.	디바이스 높이를 가득 채우는 3개 섹션 제작. */}
            {/* iii. swiper 활용하여 총 3장의 슬라이드 제작. */}
            <Swiper
                // v. 자동 슬라이드, 페이지네이션, 내비게이션, 프로그레스바, 무한 슬라이드 옵션 적용. 
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true}}
                autoplay={{delay: 2000}}
                loop={true}
                style={{
                    height : "100%",
                }}
            >
                {photos.map((photo, id) =>
                    <SwiperSlide
                        key={id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    ><img src={photo}/></SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}
export default Section1