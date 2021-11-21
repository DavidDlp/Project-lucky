import React, { useEffect, useState } from "react";
import { getAssocionationById } from "../../../api/servicesAssociation/apiAssociation";
import { getPets, deletePets } from "../../../api/servicesPets/apiPetsFetch";
import Loading from "../../../components/Loading/Loading";

const PetsCrud = () => {
  const [association, setAssociation] = useState([]);
  const [pets, setPets] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  const getPetBD = async () => {
    try {
      const data = await getAssocionationById(association);
      setAssociation(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  const delPets = async (id) => {
    try {
      await deletePets(id);
      const newElements = pets.filter((item) => item._id !== id);
      // console.log("esto es el ", newElements);
      setPets(newElements);
    } catch (error) { }
  }

  useEffect(() => {
    setIsLoading(true);//mostramos loading
    getPetBD().then(() => setIsLoading(true)).finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPets]);

  const loading = (isLoading) ? <><Loading /></> : null;

  return (
    <>
    {loading}
      <div className="petsCrudContent">
        <h2>Hola Protectora</h2>        
        {pets.map((pet) => {
          return (
            <div className="petsCrudContent__card" key={JSON.stringify(pet)}>
              <div className="petsCrudContent__card--img">
                <img src={pet.imgPets} alt={pet.name} />
              </div>
              <div className="petsCrudContent__card--info">
                <p><span>Nombre: </span> {pet.name}</p>
                <p><span>Especie: </span>  {pet.species}</p>
                <p><span>Genero: </span> {pet.gender}</p>
                <p><span>Cumpleaños: </span>  {pet.birthday}</p>
                <p><span>Ciudad: </span> {pet.city}</p>
                <p><span>Tamaño: </span> {pet.size}</p>
                <p><span>Personalidad: </span>{pet.personality}</p>
              </div>
              <div className="petsCrudContent__card--history">
                <p><span>Historia: </span> {pet.history}</p>
              </div>
              <div className="petsCrudContent__card--button">
                <button onClick={() => delPets(pet._id)}>Borrar</button>
              </div>
            </div>
          );
        })}
      </div>

    </>
  );
};

export default PetsCrud;
