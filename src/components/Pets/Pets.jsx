import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPets } from "../../api/servicesPets/apiPetsAxios";
//IMAGES
// import arrow from './../../assets/img/arrow.png';
import search from "./../../assets/img/buscar.png";
// import add from './../../assets/img/mS.png';
import filtros from "./../../assets/img/filtros.png";
import Navbar from "../Navbar/Navbar";

//SLIDER
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import addFavPet from "../User/pets/addFavorite";
// install Swiper modules
SwiperCore.use([Pagination]);

export default function Pets() {
  const [pets, setPets] = useState([]);
  const [finallyPet, setFinallyPet] = useState([]);
  const [searchPet, setSchearchPet] = useState("");
  const [userInLocal, setUserInLocal] = useState({});


  //PETICIONES
  const getPetsApi = async () => {
    try {
      const result = await getAllPets();
      setPets(result.data);
      setFinallyPet(result.data);
      // console.log(result.data);
    } catch (error) {
      return console.error(error);
    }
  };

  //FUNCIONALIDADES
  const handleChange = (e) => {
    // console.log("Busqueda: " +e.target.value);
    setSchearchPet(e.target.value);
    // console.log("search: " + searchPet)
    filterSearch(e.target.value);
  };

  const filterSearch = (parameterSearch) => {
    // eslint-disable-next-line array-callback-return
    let resultSearch = finallyPet.filter((element) => {
      if (
        element.name
          .toString()
          .toLowerCase()
          .includes(parameterSearch.toLowerCase()) ||
        element.species
          .toString()
          .toLowerCase()
          .includes(parameterSearch.toLowerCase()) ||
        element.city
          .toString()
          .toLowerCase()
          .includes(parameterSearch.toLowerCase())
      ) {
        return element;
      }
    });
    setPets(resultSearch);
  };
 
  
  useEffect(() => {
    setUserInLocal(JSON.parse(localStorage.getItem("user")));
    getPetsApi();
  }, []);

  // console.log(pets);

  return (
    <>
      <Navbar />
      <div className="pets">
        <div className="pets__search">
          <input
            value={searchPet}
            className="input-btn"
            type="text"
            placeholder="Buscar nombre"
            onChange={handleChange}
          />
          <img src={search} alt="search" />
        </div>
        {/* <div className= "favorite-pets" >
                <h3>Mis mascotas <img src={add} alt="add"/></h3>
                <p>Accede al perfil de tus mascotas</p>
                <div className= "separation">
                    <Swiper slidesPerView={3} spaceBetween={20} pagination={true} className="mySwiper">
                        <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide>
                    </Swiper>
                </div>
            </div> */}

        {/* <div className="container-btn">
                <span>Estado de adopcion</span>
                <img src={arrow} alt="flecha"/>
            </div> */}
        <div className="pets__separation" />
        <div className="pets__filter">
          <h3>Animales en adopcion</h3>
          <img src={filtros} alt="filtrado" />
        </div>
        <div className="pets__response">
          {pets.map((item) => {
            return (
              <div className="pets__response--item" key={JSON.stringify(item)}>
                <div className="pets__response--item--img">
                <button onClick={()=> addFavPet(userInLocal._id,item)}>Añadir a Favoritos</button>
                  <Link to={{ pathname: "/pets/details/" + item._id }}>
                    <img src={item.imgPets} alt="pets" />
                    <div className="pets__response--item--content">
                      <h3>{item.name}</h3>
                      <span>{item.city}</span>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
