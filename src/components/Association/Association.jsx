import React, { useEffect, useState } from "react";
import { getAssociations, deleteAssociations } from "../../api/servicesAssociation/apiAssociation";

const Association = () => {
  const [associations, setAssociatios] = useState([]);

  const getAssociationBD = async () => {
    try {
      const data = await getAssociations();
      setAssociatios(data);
    } catch (error) {
      console.log(error);
    }
  };
  const delAssociation = async (id) => {
    try {
      await deleteAssociations(id);
      const newElements = associations.filter((item) => item._id !== id);
      console.log("esto es el ", newElements);
      setAssociatios(newElements);
    } catch (error) {}
  };

  useEffect(() => {
    getAssociationBD();
  }, []);

  return (
    <>
         <h1>Asociaciones</h1>                
      <div className="content">
            
        {associations.map((association) => {
          return (
            <div key={JSON.stringify(association)}>
                    <p>Nombre: {association.name}</p>                 
                    <p>Email: {association.email}</p>                 
                    <p>Telefono: {association.phone}</p>                       
                    <p>Dirección: {association.address}</p>                         
                     <p>Ciudad: {association.city}</p> 
                {association.pets.map((pet) => {
                  return(
                    <div key={JSON.stringify(pet)}>
                    <p>{pet.name}</p>
                    </div>
                  )

                })}
              <button onClick={() => delAssociation(association._id)}>
                Borrar
              </button>
                       
            </div>
          );
        })}
         
      </div>
    
    </>
  );
};

export default Association;
