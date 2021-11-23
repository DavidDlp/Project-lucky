import React, { useState } from "react";

import { postPets } from "../../../api/servicesPets/apiPetsAxios";
import { useNavigate } from "react-router-dom";

const INIT = {
  name: "",
  species: "",
  brithday: "",
  gender: "",
  size: "",
  weight: "",
  history: "",
  personality: "",
  vaccinated: "",
  dewormed: "",
  healthy: "",
  sterilized: "",
  identified: "",
  microship: "",
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
    <div className="component-form">
      <div className="form-container-AF">
        <h3 className="title-container-AF">REGISTRO</h3>           
        <form onSubmit={submitForm}>
                         
          <fieldset>
                               
            <label>
                                      <p>Nombre de la Mascota:</p>                     
              <input  type="text" className="input-form-AF" name="name"   value={pet.name}  onChange={handleInput} />           
            </label>

            <label>
                                      <p>Imagen de la Mascota:</p>                   
              <input  type="file" className="input-form-AF"  name="imgpets"  value={pet.imgpets}  onChange={handleInput}   />                   
            </label>

            <label>
                                      <p>Especie de la Mascota:</p>                     
              <input type="text" className="input-form-AF" name="species"  value={pet.species}  onChange={handleInput}  />          
            </label>

            <label>
                                      <p>Cumpleaños de la Mascota:</p>                     
              <input type="text" className="input-form-AF"  name="birthday"  value={pet.birthday}  onChange={handleInput} />                 
            </label>

            <label>
                                      <p>Sexo de la Mascota:</p>               
              <input  type="text" className="input-form-AF" name="gender" value={pet.gender} onChange={handleInput}/>               
            </label>

            <label>
                                      <p>Tamaño de la Mascota:</p>             
              <input  type="text"   className="input-form-AF"  name="size" value={pet.size}   onChange={handleInput}  />
            </label>

            <label>
                                      <p>Peso de la Mascota:</p>                         
              <input type="text" className="input-form-AF"  name="weight" value={pet.weight} onChange={handleInput} />                               
            </label>

            <label>
                                      <p>Historia de la Mascota:</p>                     
              <input type="text" className="input-form-AF" name="histoty" value={pet.history} onChange={handleInput}/>                 
            </label>

            <label>
                                      <p>Personalidad de la Mascota:</p>       
              <input type="text" className="input-form-AF" name="personality" value={pet.personality} onChange={handleInput}/>                
            </label>
                                    <p>Vacunado:</p>             
            <input type="radio" name="vaccinated" value={pet.vaccinated} />
            <label for="si">Si</label>
            <input type="radio" name="vaccinated" value={pet.vaccinated} />
            <label for="no">No</label>     
                                                
                                     <p>Desparacitado:</p>             
            <input type="radio" name="dewormed" value={pet.dewormed} />
            <label for="si">Si</label>
            <input type="radio" name="dewormed" value={pet.dewormed} />
            <label for="no">No</label>      
                                               
                                     <p>Sano:</p>           
            <input type="radio" name="healthy" value={pet.healthy} />
            <label for="si">Si</label>
            <input type="radio" name="healthy" value={pet.healthy} />
            <label for="no">No</label>    
                                                 
                                     <p>Esterilizado:</p>             
            <input type="radio" name="sterilized" value={pet.sterilized} />
            <label for="si">Si</label>
            <input type="radio" name="sterilized" value={pet.sterilized} />
            <label for="no">No</label>    
                                                 
                                      <p>Identificado:</p>                       
            <input type="radio" name="identified" value={pet.identified} />
            <label for="si">Si</label>
            <input type="radio" name="identified" value={pet.identified} />
            <label for="no">No</label>  
                                 
                                     <p>Microchip:</p> 
            <input type="radio" name="microchip" value={pet.microchip} />
            <label for="si">Si</label>
            <input type="radio" name="microchip" value={pet.microchip} />
            <label for="no">No</label>                 
                     
            <div>                         
              <button className="btn-continue-AF" type="submit">Guardar Mascota</button>                      
            </div>
                         
          </fieldset>
                     
        </form>
      </div>
           
    </div>
  );
};

export default PetsCreate;
