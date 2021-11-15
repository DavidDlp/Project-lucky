import React, { useContext } from "react";
import { DataContext } from "../../App";

const Associations = () => {
  const { data1 } = useContext(DataContext);

  return (
    <>
      <h1>Asociaciones</h1>
      <div>
        {data1.associations.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>Nombre: {item.name}</p>
              <p>Email: {item.email}</p>
              <p>Telefono: {item.phone}</p>
              <p>Dirección: {item.address}</p>
              <p>Ciudad: {item.city}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Associations;














































