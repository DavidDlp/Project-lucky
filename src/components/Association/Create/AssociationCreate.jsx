import React, { useState } from "react";

import { postAssociations } from "../../../api/apiAssociation";
import { useNavigate } from "react-router-dom";

const INIT = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
};

const AssociationCreate = () => {
  const [association, setAssociation] = useState(INIT);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAssociation({ ...association, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    addAssociation();
  };
  const addAssociation = async () => {
    try {
      const newAssociation = await postAssociations(association);
      if (newAssociation) {
        navigate("/associations");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="component-form">
      <div className="form-container-AF">
        <h3 className="title-container-AF">REGISTRO</h3>           {" "}
        <form onSubmit={submitForm}>
                         {" "}
          <fieldset>
                               {" "}
            <label>
                                      <p>Nombre de la Asociación</p>
                                     {" "}
              <input
                type="text"
                className="input-form-AF"
                name="name"
                value={association.name}
                onChange={handleInput}
              />
                                 {" "}
            </label>
                               {" "}
            <label>
                                      <p>Email de la Asociación</p>
                                     {" "}
              <input
                type="text"
                className="input-form-AF"
                name="email"
                value={association.email}
                onChange={handleInput}
              />
                                 {" "}
            </label>
                               {" "}
            <label>
                                      <p>Telefono de la Asociación</p>
                                     {" "}
              <input
                type="text"
                className="input-form-AF"
                name="phone"
                value={association.phone}
                onChange={handleInput}
              />
                                 {" "}
            </label>
                               {" "}
            <label>
                                      <p>Dirección de la Asociación</p>
                                     {" "}
              <input
                type="text"
                className="input-form-AF"
                name="address"
                value={association.address}
                onChange={handleInput}
              />
                                 {" "}
            </label>
                               {" "}
            <label>
                                      <p>Ciudad</p>
                                     {" "}
              <input
                type="text"
                className="input-form-AF"
                name="city"
                value={association.city}
                onChange={handleInput}
              />
                                 {" "}
            </label>
            <div className="terms-container-AF">
              <p>
                <input id="checkbox-AF" type="checkbox" />
                <label for="checkbox-AF">
                  <span></span>Acepto los términos y condiciones
                </label>
              </p>
            </div>
                               {" "}
            <div>
                                     {" "}
              <button className="btn-continue-AF" type="submit">
                Guardar Asociación
              </button>
                                 {" "}
            </div>
                           {" "}
          </fieldset>
                     {" "}
        </form>
      </div>
           {" "}
    </div>
  );
};

export default AssociationCreate;
