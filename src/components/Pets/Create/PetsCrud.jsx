import React, { useEffect, useState } from "react";
import { getAssocionationById } from "../../../api/apiAssociation";
// import {deletePets } from "../../../api/apiPets";

const PetsCrud = () => {
  const [idAssociation, setIdAssociation] = useState({});
  const [associations, setAssociations] = useState([]);
  const [flag, setFlag] = useState(false)

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
  setFlag(true)
  if(idAssociation._id){
    getAssociationbyIdBd()
  }
},[flag])  
// console.log(idAssociation)

  return (
    <>
         <h1>Hola protectora</h1>                
      <div className="content">
              
        {associations.pets.map((pet) => {
          return (
            <div key={JSON.stringify(pet)}>
              <p>Nombre: {pet.name}</p>                         
              <img src={pet.imgPets} alt={pet.name}/>                 
              <p>Especie: {pet.species}</p>                         
              <p>Genero: {pet.gender}</p>                           
              <p>Cumpleaños: {pet.birthday}</p> 
              <p>Ciudad: {pet.city}</p>                         
              <p>Tamaño: {pet.size}</p>                 
              <p>Personalidad: {pet.personality}</p>                         
              <p>Historia: {pet.history}</p>                           
              {/* <button onClick={() => delPets(pet._id)}>Borrar</button>          */}
            </div>
          );
        })}
         
      </div>
         
    </>
  );
};

export default PetsCrud;
