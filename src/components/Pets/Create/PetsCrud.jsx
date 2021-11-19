import React, { useEffect, useState } from "react";
import { getPets, deletePets } from "../../../api/apiPets";

const PetsCrud = () => {
  const [pets, setPets] = useState([]);

const getPetBD = async () => {
    try {
      const data = await getPets();
      setPets(data);
  console.log("esto es", pets)
    } catch (error) {
      console.log(error);
    }
  };
const delPets = async (id) => {
    try {
      await deletePets(id);
      const newElements = pets.filter((item) => item._id !== id);
      console.log("esto es el ", newElements);
      setPets(newElements);
    } catch (error) {}
  };

  useEffect(() => {
    getPetBD();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
         <h1>Mascotas</h1>                
      <div className="content">
              
        {pets.map((pet) => {
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
              <button onClick={() => delPets(pet._id)}>Borrar</button>         
            </div>
          );
        })}
         
      </div>
         
    </>
  );
};

export default PetsCrud;
