import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getAllPets } from "../../api/servicesPets/apiPets";
//IMAGES
import arrow from './../../assets/img/arrow.png';
import search from './../../assets/img/buscar.png';
import add from './../../assets/img/mS.png';
import filtros from './../../assets/img/filtros.png';

//SLIDER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination]);


export default function Pets (){

    const [pets, setPets] = useState([])
    const [finallyPet, setFinallyPet] = useState([])
    const [searchPet, setSchearchPet] = useState("")

//PETICIONES
    const getPetsApi = async () =>{
        try{
            const result = await getAllPets(); 
            setPets(result.data);
            setFinallyPet(result.data);
            console.log(result.data);

        }catch(error){
            return console.error(error)
        }   
    };

//FUNCIONALIDADES
    const handleChange = e =>{
        // console.log("Busqueda: " +e.target.value);
        setSchearchPet(e.target.value);
        // console.log("search: " + searchPet)
        filterSearch(e.target.value)
    };

    const filterSearch = (parameterSearch) =>{
        let resultSearch = finallyPet.filter((element) =>{
            if (element.name.toString().toLowerCase().includes(parameterSearch.toLowerCase())
                || element.species.toString().toLowerCase().includes(parameterSearch.toLowerCase())
                // || element.city.toString().toLowerCase().includes(parameterSearch.toLowerCase())
            ){
                return element;
            }
        });
        setPets(resultSearch)
    };
    
    useEffect(() =>{
            getPetsApi();
        }, []);

    return(
        <>
        {/* <Navbar /> */}
        <div className="Pets-main" >
            <div>
                <input value={searchPet} className="input-btn" type="text" placeholder="Buscar nombre" onChange={handleChange}/>
                <img src={search} alt="search"/>
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
            <div className="container-filter">
                <h3>Animales en adopcion</h3>
                <img src={filtros} alt="filtrado" />
            </div>
            <div>
                {pets.map(item => {
                        return (
                            <div key={JSON.stringify(item)}>
                                <Link to ={{ pathname: "/pets/details/"+item._id}}>
                                    <img src={item.imgPets} alt="pets"/>
                                </Link>
                                <div>
                                    <h3>{item.name}</h3>
                                    <span>{item.city}</span>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>        
        
        </>
    )
}
