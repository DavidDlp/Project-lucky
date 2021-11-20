import React, { useState } from "react";
import logoReg from "../../../assets/img/logoRegister.png"
import { postPets } from "../../../api/apiPets";
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
              <input
                placeholder="Nombre"
                type="text"
                name="name"
                value={pet.name}
                onChange={handleInput}
              />                
            </div>

            <div className="input-box">                                          
              <input
                placeholder="Imagen"
                type="text"
                name="imgpets"
                value={pet.imgpets}
                onChange={handleInput}
              />               
            </div>
         
            <div className="input-box">                                          
              <input
                placeholder="Especie"
                type="text"
                name="species"
                value={pet.species}
                onChange={handleInput}
              />
                               
            </div>

            <div className="input-box">                                          
              <input
                placeholder="Genero"
                type="text"
                name="gender"
                value={pet.gender}
                onChange={handleInput}
              />
                               
            </div>

            <div className="input-box">                                          
              <input
                placeholder="Cumpleaños"
                type="text"
                name="birthday"
                value={pet.birthday}
                onChange={handleInput}
              />
                               
            </div>

            <div className="input-box">                                          
              <input
                placeholder="Tamaño"
                type="text"
                name="size"
                value={pet.size}
                onChange={handleInput}
              />
                               
            </div>

            <div className="input-box">                                          
              <input
                placeholder="Personalidad"
                type="text"
               
                name="personality"
                value={pet.personality}
                onChange={handleInput}
              />
                               
            </div>

            <div className="input-box">                                          
              <input
                placeholder="Historial"
                type="text"
                name="histoty"
                value={pet.history}
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
            <button className="button" type="submit" value="submit">
            <p>Guardar Mascota</p>
            </button>
                                 
          
              
                     
        </form>
  </div>
          
  
  );
};

export default PetsCreate;
