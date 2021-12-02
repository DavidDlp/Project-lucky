import React, { useEffect, useState } from "react";
import { getAssociations, deleteAssociations } from "../../api/servicesAssociation/apiAssociation";

const Association = () => {
  const [associations, setAssociatios] = useState([]);
  const [flag, setFlag] = useState(false);

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
    setFlag(true);
  }, [flag]);

  return (
    <>
      <h1>Asociaciones</h1>                
      <div className="content">
            
        {associations && associations.map((associations) => {
          return (
            <div key={JSON.stringify(associations)}>
                            <p>Nombre: {associations.name}</p>                 
                      <p>Email: {associations.email}</p>                 {" "}
              <p>Telefono: {associations.phone}</p>                         {" "}
              <p>Dirección: {associations.address}</p>                         
                <p>Ciudad: {associations.city}</p> 
              <button onClick={() => delAssociation(associations._id)}>
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
