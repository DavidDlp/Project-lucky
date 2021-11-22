import React, { useEffect, useState } from "react";
import { getAssocionationById } from "../../../api/servicesPets/apiPets";
// import {deletePets } from "../../../api/apiPets";

const PetsCrud = () => {
  const [idAssociation, setIdAssociation] = useState({});
  const [associations, setAssociations] = useState([]);

  //Fernando y David.
  const getAssociationbyIdBd = async () =>{
    try{
      // console.log(idAssociation._id)
      const data = await getAssocionationById(idAssociation._id)
      setAssociations(data);
      console.log(data)
    
    }catch(error){
      console.error(error);
    }
  }

  //Anays pet crud.
  // const delPets = async (id) => {
  //     try {
  //       await deletePets(id);
  //       const newElements = pets.filter((item) => item._id !== id);
  //       console.log("esto es el ", newElements);
  //       setPets(newElements);
  //     } catch (error) {}
  //   };

  useEffect(() => {
    setIdAssociation(JSON.parse(localStorage.getItem("association")))
      {idAssociation._id &&
        getAssociationbyIdBd()
      }
  },[])  
  // console.log(idAssociation)
  let itemToRender;
  if(associations){
    itemToRender = associations.pets.map(pet =>{
      return <div><p>Nombre: {pet.name}</p>                         
      <img src={pet.imgPets} alt={pet.name}/>                 
      <p>Especie: {pet.species}</p>                         
      <p>Genero: {pet.gender}</p>                           
      <p>Cumpleaños: {pet.birthday}</p> 
      <p>Ciudad: {pet.city}</p>                         
      <p>Tamaño: {pet.size}</p>                 
      <p>Personalidad: {pet.personality}</p>                         
      <p>Historia: {pet.history}</p>  </div>
    })
  }

  return (
    <div>{itemToRender}</div>
      
  );
};

export default PetsCrud;
