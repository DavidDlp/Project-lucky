import React, {useEffect, useState} from "react";
import { getAllPets } from "../../api/servicesPets/apiPets";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

//Import Images
import arrow from './../../assets/img/arrow.png';
import search from './../../assets/img/buscar.png';
import add from './../../assets/img/mS.png';
import filtros from './../../assets/img/filtros.png';

  
// install Swiper modules
SwiperCore.use([Pagination]);

export default function Pets (){

    const [pets, setPets] = useState([])

    const getPetsApi = async () =>{
        try{
            const result = await getAllPets();
            setPets(result.data)
            console.log(result.data)

        }catch(error){
            return console.error(error)
        }   
    };
    
    useEffect(() =>{
            getPetsApi();
        }, [])

    return(
        <div className="Pets-main" >
            <div>
                <input className="input-btn" type="text" placeholder="Buscar" onChange={(e) =>{ }}/>
                <img src={search} alt="seach"/>
            </div>
            <div className= "favorite-pets" >
                <h3>Mis mascotas <img src={add} alt="add"/></h3>
                <p>Accede al perfil de tus mascotas</p>
                <div className= "separation">
                    <Swiper slidesPerView={3} spaceBetween={20} pagination={true} className="mySwiper">
                        <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="container-btn">
                <span>Estado de adopcion</span>
                <img src={arrow} alt="flecha"/>
            </div>
            <div className="container-list">
                <h3>Animales en adopcion</h3>
                <img src={filtros} alt="filtrado" />
            </div>
            <div>
                {pets.map(item => {
                        return (
                            <div key={JSON.stringify(item)}>
                                <img src={item.imgPets} alt="pets" />
                                <div>
                                    <h3>{item.name}</h3>
                                    <span>{item.city}</span>
                                </div>
                            </div>
                        )
                    })}
            </div>
            

        </div>
    )
}
