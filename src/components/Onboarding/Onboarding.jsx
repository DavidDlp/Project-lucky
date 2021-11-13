import React from 'react';

//Import Swiper JS
import { Swiper, SwiperSlide } from './../../../node_modules/swiper/react/react';

//Import Swiper SCSS
import '~/../swiper/swiper.scss';

//Images
import onboarding1 from './../../assets/img/undrawGoodDoggy4Wfq.png';

const Onboarding = () => {
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        loop: false
    });

    return (
        <Swiper navigation={true} className="swiper">
            <SwiperSlide>
                <img src={onboarding1} alt="onboarding1" />
                <h5>Encuentra todo tipo de servicios que tienes cerca de ti</h5>
            </SwiperSlide>
            <SwiperSlide>
                <img src="" alt="onboarding2" />
                <h5>Adopta desde tu móvil</h5>
                <p>Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapte a ti</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src="" alt="onboarding3" />
                <h5>Si eres una asociación sube a tus peludos para darles más difusión</h5>
            </SwiperSlide>
        </Swiper>
    )
}

export default Onboarding;