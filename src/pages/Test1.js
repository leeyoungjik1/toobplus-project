import React from "react";
import styles from '../styles/Test1.module.css'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// iii. icon_01.png ~ icon_05.png를 데이터로 활용.
import icon1 from '../assets/icon_01.png'
import icon2 from '../assets/icon_02.png'
import icon3 from '../assets/icon_03.png'
import icon4 from '../assets/icon_04.png'
import icon5 from '../assets/icon_05.png'
const icons = [icon1, icon2, icon3, icon4, icon5]

function Test1({device}){
    const swiper = (perView, isAutoPlay) => {
        // ii. swiper 활용하여 총 5장의 슬라이드 제작. 
        return(
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                spaceBetween={50}
                slidesPerView={perView}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true}}
                autoplay={isAutoPlay ? {delay: 2000} : false}
                loop={true}
                style={{
                    height : "100%",
                }}
            >
                {icons.map((icon, id) =>
                    <SwiperSlide
                        key={id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    ><img src={icon}/></SwiperSlide>
                )}
            </Swiper>
        )
    }

    return (
        <div className={styles.test1Page}>
            {/* iv.	반응형 슬라이드 구현. */}
            {device === 'mobile' ? swiper(1, true) : 
                device === 'tablet' ? swiper(2, false) :
                swiper(3, true)
            }
        </div>
    )
}
export default Test1