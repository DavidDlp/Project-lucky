/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link  } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Pagination } from 'swiper';

import { getPetsById } from "./../../../api/servicesPets/apiPets";
import PetData from './Data';
import PetHealth from './Health';

import favIcon from './../../../assets/img/favIcon.png';
import genreIcon from './../../../assets/img/genreIcon.png';

SwiperCore.use([EffectFade, Pagination]);

const PetsDetails = () => {
    
    const [showData, setShowData] = useState(true);
    const [pet, setPet] = useState({});
    const { id }  = useParams();

    
    const getPets = async () => {
        const petbyid = await getPetsById(id);
        setPet(petbyid.data);
        // console.log(petbyid);
    }

    useEffect(() => {
        getPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="detailPet">
            <div className="detailPet__sliderImg">
            <Swiper modules={[EffectFade]} effect="fade" className="mySwiper" slidesPerView={1} spaceBetween={0} pagination={true}>
                <SwiperSlide>
                    <img src={pet.imgPets} alt={pet.name} />
                </SwiperSlide>
            </Swiper>

                {/* {
                numberImg > 0 ?
                    <Swiper modules={[EffectFade]} effect="fade" className="mySwiper">
                    {pet.map((data) =>
                        <SwiperSlide key={data.imgPets}>
                            <img src={data.imgPets} alt={data.name} />
                        </SwiperSlide>
                    )}
                    </Swiper>
                    :
                    <h3>No hay fotos de la mascota</h3>
                } */}
            </div>
            <div className="detailPet__resume">
                <div className="detail__resume--genre">
                    <img src={genreIcon} alt="genre" />
                </div>
                <div className="detail__resume--data">
                    <p className="detail__resume--data--name">{pet.name}</p>
                    <p>{pet.city}</p>
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
                <PetData pet={pet} />
            ) : (
                <PetHealth pet={pet} />
            )}

            <div className="detailPet__Data--button">
                <a href="#">Adoptar</a>
            </div>
            <Link to="/pets">
                <span className="back--button">
                    <i className="fas fa-chevron-left"></i>
                </span>
            </Link>
        </div>
    )
}

export default PetsDetails;