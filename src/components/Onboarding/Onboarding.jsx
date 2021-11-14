import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

//CSS
import 'swiper/swiper.scss';

import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/a11y/a11y.scss';

//Images
import onboarding1 from './../../assets/img/onboarding1.png';
import onboarding2 from './../../assets/img/onboarding2.png';
import onboarding3 from './../../assets/img/onboarding3.png';




const Onboarding = () => {

    return (
        <div className="onboarding">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                pagination={{"dynamicBullets": true}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src={onboarding1} alt="onboarding1" />
                    <h5>Encuentra todo tipo de servicios que tienes cerca de ti</h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={onboarding2} alt="onboarding2" />
                    <h5>Adopta desde tu móvil</h5>
                    <p>Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapte a ti</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={onboarding3} alt="onboarding3" />
                    <h5>Si eres una asociación sube a tus peludos para darles más difusión</h5>
                </SwiperSlide>
            </Swiper>
            
        </div>
    )
}

export default Onboarding;