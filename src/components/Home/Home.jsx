import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCube, Pagination } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-cube/effect-cube.scss';

import dogIcon from './../../assets/img/dogIcon.png';
import info1 from './../../assets/img/info1.png';
import info2 from './../../assets/img/info2.png';
import Navbar from '../Navbar/Navbar';

SwiperCore.use([EffectCube, Pagination]);

const Home = () => {
      //Para consumir los datos hay que utilizar useEffect con JSON.parse
    const [userInLocal, setUserInLocal] = useState({});
    
    useEffect(() => {
        setUserInLocal(JSON.parse(localStorage.getItem("user")));
    },[])

    // console.log(userInLocal);
    return (
        <>
        <Navbar />
        <div className="home">
            <h2>¡Hola {userInLocal.name}!</h2>
            <div className="slider">
                <Swiper
                    slidesPerView={1}
                    pagination={true}
                    spaceBetween={30}
                    autoHeight={true}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        "shadow": false,
                        "slideShadows": false,
                        "shadowOffset": 0,
                        "shadowScale": 0
                    }}
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
            <div className="separation"></div>
            <div className="info">
                <h4>Novedades</h4>
                <div className="info-card">
                    <img src={ info1 } alt="info 1" />
                    <h3>10 Curiosidades sobre las chinchillas</h3>
                </div>
                <div className="info-card">
                    <img src={ info2 } alt="info 2" />
                    <h3>¿Sabes qué comen las iguanas?</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;