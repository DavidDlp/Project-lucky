<<<<<<< HEAD
import React, { useContext } from "react";
import { DataContext } from "../../App";

const Associations = () => {
  const { data1 } = useContext(DataContext);

  return (
    <div>
        <h1>Asociaciones</h1>
    </div> 
  ); 
}
    

=======
import React, { useEffect, useState } from "react";
import { getAssociations, deleteAssociations } from "../../api/apiAssociation";

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
      setAssociatios(newElements);
    } catch (error) {}
  };

  useEffect(() => {
    getAssociationBD();
  }, []);

  return (
    <>
            <h1>Asociaciones</h1>     
      <div>
             
        {associations.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>Nombre: {item.name}</p>            
              <p>Email: {item.email}</p>            
              <p>Telefono: {item.phone}</p>            
              <p>Dirección: {item.address}</p>             
              <p>Ciudad: {item.city}</p>
              <button onClick={() => delAssociation(item._id)}>Borrar</button> 
                     
            </div>
          );
        })}
          
      </div>
         {" "}
    </>
  );
};
>>>>>>> ana

export default Association;
