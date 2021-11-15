import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import dogIcon from './../../assets/img/dogIcon.png';


SwiperCore.use([Pagination]);


const Home = () => {
    
    return (
        <div className="home">
            <h2>¡Hola Celia!</h2>
            <div className="slider">
                <Swiper
                    slidesPerView={1}
                    pagination={true}
                    spaceBetween={0}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="homeSlider">
                            <div className="homeSlider__img">
                                <img src={ dogIcon } alt="Home Slider 1" />
                            </div>
                            <div className="homeSlider__content">
                                <h5>Estado de la adopción</h5>
                                <p>Revisa el proceso de tus adopciones en curso</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="homeSlider">
                            <div className="homeSlider__img">
                                <img src={ dogIcon } alt="Home Slider 1" />
                            </div>
                            <div className="homeSlider__content">
                                <h5>Estado de la adopción</h5>
                                <p>Revisa el proceso de tus adopciones en curso</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="homeSlider">
                            <div className="homeSlider__img">
                                <img src={ dogIcon } alt="Home Slider 1" />
                            </div>
                            <div className="homeSlider__content">
                                <h5>Estado de la adopción</h5>
                                <p>Revisa el proceso de tus adopciones en curso</p>
                            </div>
                        </div>
                    </SwiperSlide>
            </Swiper> 
            </div>
        </div>
    )
}

export default Home;