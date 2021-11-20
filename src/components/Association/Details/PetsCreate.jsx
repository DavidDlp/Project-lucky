import React, { useState } from "react";

import { postPets } from "../../../api/servicesPets/apiPetsFetch";
import { useNavigate } from "react-router-dom";

const INIT = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
};

const PetsCreate = () => {
  const [pet, setPet] = useState(INIT);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPet({ ...pet, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    addPet();
  };
  const addPet = async () => {
    try {
      const newPet = await postPets(pet);
      if (newPet) {
        navigate("/pets");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cont-register">
      
      <div className="header">
        <p>¡Registra tu Mascota!</p>
      </div>    

       <div className="logo">
        <img src={logoReg} alt="logo:Animales"/>
      </div>    
            
        <form className="cont-form-reg" onSubmit={submitForm}>
                                       
        <div className="input-box">                                          
    <div className="component-form">
      <div className="form-container-AF">
        <h3 className="title-container-AF">REGISTRO</h3>           
        <form onSubmit={submitForm}>
                         
          <fieldset>
                               
            <label>
                                      <p>Nombre de la Mascota</p>               
                     
              <input
                placeholder="Nombre"
                type="text"
                name="name"
                value={pet.name}
                onChange={handleInput}
              />                
            </div>

            <div className="input-box">                                          
              />
                               
            </label>
            <label>
                                      <p>Imagen de la Mascota</p>               
                     
              <input
                placeholder="Imagen"
                type="text"
                name="imgpets"
                value={pet.imgpets}
                onChange={handleInput}
              />               
            </div>
         
            <div className="input-box">                                          
              />
                               
            </label>
            <label>
                                      <p>Especie de la Mascota</p>             
                       
              <input
                placeholder="Especie"
                type="text"
                name="species"
                value={pet.species}
                onChange={handleInput}
              />
                               
            </div>

            <div className="input-box">                                          
            </label>
            <label>
                                      <p>Genero de la Mascota</p>               
                     
              <input
                placeholder="Genero"
                type="text"
                name="gender"
                value={pet.gender}
                onChange={handleInput}
              />
                               
            </div>

            <div className="input-box">                                          
            </label>
            <label>
                                      <p>Cumpleaños de la Mascota</p>           
                         
              <input
                placeholder="Cumpleaños"
                type="text"
                name="birthday"
                value={pet.birthday}
                onChange={handleInput}
              />
                               
            </div>

            <div className="input-box">                                          
            </label>
            <label>
                                      <p>Tamaño de la Mascota</p>               
                     
              <input
                placeholder="Tamaño"
                type="text"
                name="size"
                value={pet.size}
                onChange={handleInput}
              />
                               
            </div>

            <div className="input-box">                                          
            </label>
            <label>
                                      <p>Personalidad de la Mascota</p>         
                           
              <input
                placeholder="Personalidad"
                type="text"
               
                name="personality"
                value={pet.personality}
                onChange={handleInput}
              />
                               
            </div>

            <div className="input-box">                                          
            </label>
            <label>
                                      <p>Historia de la Mascota</p>             
                       
              <input
                placeholder="Historial"
                type="text"
                name="histoty"
                value={pet.history}
                onChange={handleInput}
              />
                               
            </div>
                          
            </label>
            <label>
                                      <p>Asociación de la Mascota</p>           
                         
              <input
                type="text"
                className="input-form-AF"
                name="association"
                value={pet.association}
                onChange={handleInput}
              />
                               
            </label>
                                                   
            <div className="terms-container-AF">
              <p>
                <input id="checkbox-AF" type="checkbox" />
                <label for="checkbox-AF">
                  <span></span>Acepto los términos y condiciones
                </label>
              </p>
            </div>
            <button className="button" type="submit" value="submit">
            <p>Guardar Mascota</p>
            </button>
                                 
          
              
                     
        </form>
  </div>
          
  
                               
            <div>
                                     
              <button className="btn-continue-AF" type="submit">
                Guardar Mascota
              </button>
                                 
            </div>
                           
          </fieldset>
                     
        </form>
      </div>
           
    </div>
  );
};

export default PetsCreate;
