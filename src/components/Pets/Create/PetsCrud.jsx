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
  }, []);

  return (
    <>
         <h1>Mascotas</h1>                
      <div className="content">
              
        {pets.map((pets) => {
          return (
            <div key={JSON.stringify(pets)}>
              <p>Nombre: {pets.name}</p>                         
              <img src={pets.imgPets} alt={pets.name}/>                 
              <p>Especie: {pets.species}</p>                         
              <p>Genero: {pets.gender}</p>                           
              <p>Cumpleaños: {pets.birthday}</p> 
              <p>Ciudad: {pets.city}</p>                         
              <p>Tamaño: {pets.size}</p>                 
              <p>Personalidad: {pets.personality}</p>                         
              <p>Historia: {pets.history}</p>                           
              <button onClick={() => delPets(pets._id)}>Borrar</button>         
            </div>
          );
        })}
         
      </div>
         
    </>
  );
};

export default PetsCrud;
