import React, { useState } from "react";

import { postAssociations } from "../../../api/servicesAssociation/apiAssociation";
import { useNavigate } from "react-router-dom";
import logoReg from "../../../assets/img/logoRegister.png"
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
    <div className="cont-register">
      
      <div className="header">
        <p>¡Bienvenido a la pagina de registro!</p>
      </div>      
      
      <div className="logo">
        <img src={logoReg} alt="logo:Animales"/>
      </div>
          
        <form className="cont-form-reg" onSubmit={submitForm}>
         
          <div className="input-box">                                          
              <input
                placeholder="Nombre"
                name="name"
                type="text"
                value={association.name}
                onChange={handleInput}
              />
              </div>                  
            
              <div className="input-box">                    
              <input
                placeholder="Email"
                type="text"
                name="email"
                value={association.email}
                onChange={handleInput}
              />
                                 
              </div> 

              <div className="input-box">    
              <input
                placeholder="Telefono"
                type="text"
                name="phone"
                value={association.phone}
                onChange={handleInput}
              />
                                
             </div> 
               <div className="input-box">   
              <input
              placeholder="Dirección"
                type="text"
                name="address"
                value={association.address}
                onChange={handleInput}
              />
                 </div> 

                <div className="input-box">  
              <input
              placeholder="Ciudad"
                type="text"
                name="city"
                value={association.city}
                onChange={handleInput}
              />             
            </div>
            <div className="terms-container-AF">
              <p>
                <input id="checkbox-AF" type="checkbox" />
                <label for="checkbox-AF">
                  <span></span>Acepto los términos y condiciones
                </label>
              </p>
            </div>
                              
            <div>
                                    
              <button className="button" type="submit" value="submit">
            <p>Guardar Asociación</p>
            </button>
                                
            </div>
                          
        
                   
        </form>
      </div>
          
    
  );
};

export default AssociationCreate;
