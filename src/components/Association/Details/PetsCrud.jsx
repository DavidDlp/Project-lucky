import React, { useEffect, useState } from "react";
import { getAllPets, deletePets } from "../../../api/servicesPets/apiPetsAxios";

const PetsCrud = () => {
  const [pets, setPets] = useState([]);

  const getPetBD = async () => {
    try {
      const data = await getAllPets();
      setPets(data);
      console.log("esto es", pets);
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
              <img src={pet.imgPets} alt={pet.name} />                               
              <p>Especie: {pet.species}</p>   
              <p>Cumpleaños: {pet.birthday}</p> 
              <p>Sexo: {pet.gender}</p> 
              <p>Tamaño: {pet.size}</p>                             
              <p>Peso: {pet.weight}</p>                         
              <p>Historia: {pet.history}</p>   
              <p>Personalidad:</p>            
              <div>
               {pets.personality.map((item) => {
                return (
                <div key={JSON.stringify(item)}>
                <p>{item}</p>
               </div>
                );
                })}
              </div>
              <p>Vacunado:</p>
              <div>
                <p>{pet.record.vaccinated ? "Sí" : "No"}</p>
              </div>
              <div>
                <p>Desparasitado</p>
                <p>{pet.record.dewormed ? "Sí" : "No"}</p>
              </div>
              <p>Sano</p>
              <div>
             <p>{pet.record.healthy ? 'Sí' : 'No'}</p>
            </div>
            <p>Esterilizado:</p>
            <div>
            <p>{pet.record.sterilized ? 'Sí' : 'No'}</p>
            </div>
            <p>Identificado</p>
            <div >
           <p>{pet.record.identified ? 'Sí' : 'No'}</p>
            </div>
            <p>Microchip</p>
            <div >
            <p>{pet.record.microchip ? 'Sí' : 'No'}</p>
           </div>
              <button onClick={() => delPets(pet._id)}>Borrar</button>         
            </div>
          );
        })}
         
      </div>
         
    </>
  );
};

export default PetsCrud;
