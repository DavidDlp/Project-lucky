import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPets, getUserById } from "../../api/servicesPets/apiPetsAxios";
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
import Loading from "../Loading/Loading";
// import addAdoptedPet from "../User/pets/addAdopted";
// install Swiper modules
SwiperCore.use([Pagination]);

export default function Pets() {
  const [pets, setPets] = useState([]);
  const [user, setUser] = useState({});
  const [flag, setFlag] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  const [finallyPet, setFinallyPet] = useState([]);
  const [searchPet, setSearchPet] = useState("");
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

  const getUsersApi = async () => {
    try {
      const userByID = await getUserById(userInLocal._id);
      setUser(userByID.data);
      console.log(userByID.data);
    } catch (error) {
      return console.error(error);
    }
  };

  // const getUserInLocal = async () => {
  //   try{
  //     const result = await get
  //   }catch (error) {
  //     return console.error(error);
  //   }
  // }

  //FUNCIONALIDADES
  const handleChange = (e) => {
    // console.log("Busqueda: " +e.target.value);
    setSearchPet(e.target.value);
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
    setIsLoading(true);//mostramos loading
    setUserInLocal(JSON.parse(localStorage.getItem("user")));
    getPetsApi().then(() => setIsLoading(true)).finally(() => setIsLoading(false));
    if (userInLocal._id) {
      getUsersApi();
    }
    setFlag(true);

    // console.log(userInLocal);
    return () => {
      setFlag(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  const loading = (isLoading) ? <><Loading /></> : null;

  // console.log(user);
  
  return (
    <>
    {loading}
    <Navbar />
    {pets && pets.length > 0 ?
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
                    <div className="pets__response--item--containerImg">
                      <img src={item.imgPets} alt="pets" />
                      <div className="pets__response--item--favorite">
                      {/* {user.petsFavorite && !user.petsFavorite[user.petsFavorite.indexOf(item._id)] ? (
                          <i onClick={()=> addFavPet(user._id, item)} className="far fa-heart"></i>
                        ) : (
                          <i className="fas fa-heart"></i>
                        )
                      } */}
                      {user.petsFavorite && !user.petsFavorite[user.petsFavorite.indexOf(item._id)] ? (
                          <i onClick={()=> addFavPet(user._id, item)} className="far fa-heart"></i>
                        ) : (
                          <i className="fas fa-heart"></i>
                        )
                      }
                      </div>
                    </div>
                  <Link to={{ pathname: "/pets/details/" + item._id }}>
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
      : null 
      }
    </>
  );


}
