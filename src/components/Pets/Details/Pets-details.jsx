import React from 'react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Pagination } from 'swiper';
import { useParams } from 'react-router-dom';
import { getPetsById } from "./../../../api/servicesPets/apiPets";

import detailpetTest from './../../../assets/img/detailpetTest.png';
import favIcon from './../../../assets/img/favIcon.png';
import genreIcon from './../../../assets/img/genreIcon.png';
import PetData from './Data';
import PetHealth from './Health';

SwiperCore.use([EffectFade, Pagination]);

const PetsDetails = () => {
    
    const [showData, setShowData] = useState(true);
    const [pet, setPet] = useState({});

    const { id }  = useParams();    
    
    const getPets = async () => {
        const petbyid = await getPetsById(id);
        setPet(petbyid.data);
        console.log(petbyid);
    }

    useEffect(() => {
        getPets();
    }, [])



    return (
        <div className="detailPet">
            <div className="detailPet__sliderImg">
            <Swiper effect={'fade'} pagination={true} className="mySwiper">
                <SwiperSlide>
                    <img src={pet.imgPets} alt="detailpetTest" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={detailpetTest} alt="detailpetTest" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={detailpetTest} alt="detailpetTest" />
                </SwiperSlide>
            </Swiper>
            </div>
            <div className="detailPet__resume">
                <div className="detail__resume--genre">
                    <img src={genreIcon} alt="genre" />
                </div>
                <div className="detail__resume--data">
                    <p className="detail__resume--data--name">Blue</p>
                    <p>Madrid</p>
                </div>
                <div className="detail__resume--button">
                    <img src={favIcon} alt="" />
                </div>
            </div>
            <div className="detailPet__Navbar">
                <a onClick={() => setShowData(true)} className={showData ? 'active' : ''}>Datos</a>
                <a onClick={() => setShowData(false)} className={!showData ? 'active' : ''}>Salud</a>
            </div>
            {showData ? (
                <PetData />
            ) : (
                <PetHealth />
            )}

            <div className="detailPet__Data--button">
                <a href="#">Adoptar</a>
            </div>
        </div>
    )
}

export default PetsDetails;