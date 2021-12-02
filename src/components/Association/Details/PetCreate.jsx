import React, { useEffect,useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { registerPet } from '../../../api/servicesPets/apiPetsAxios';

const PetCreate = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [associationInLocal, setAssociationInLocal] = useState({});

    const prueba = associationInLocal._id;
    // console.log(prueba)

    const submit = (data) => {
        // console.table(data)
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("species", data.species);
        formData.append("gender", data.gender);
        formData.append("birthday", data.birthday);
        formData.append("city", data.city);
        formData.append("size", data.size);
        formData.append("weight", data.weight);
        formData.append("personality", data.personality);
        formData.append("imgPets", data.imgPets[0]);
        formData.append("history", data.history);
        // formData.append("vaccinated", data.record.vaccinated);
        // formData.append("dewormed", data.record.dewormed);
        // formData.append("healthy", data.record.healthy);
        // formData.append("sterilized", data.record.sterilized);
        // formData.append("identified", data.record.identified);
        // formData.append("microchip", data.record.microchip);
        // formData.append("other", data.record.other);
        
        addPet(formData, prueba);
      };

    const addPet = async (pet, id) =>{
      // console.log(pet, id)
        try{
            const newPet = await registerPet(pet, id)
            if (newPet){
                navigate("/petscrud")
            }
        }catch(error){
            return console.error(error)
        }
    };
  useEffect(() => {
    setAssociationInLocal(JSON.parse(localStorage.getItem("association")));
  }, []);

    return (
        <div className="cont-register">
      
      <div className="header">
        <p>¡Bienvenido a la pagina de registro de mascotas!</p>
      </div>

      <form className="cont-form-reg" onSubmit={handleSubmit(submit)}>
        <div className="input-box">
          <input
            placeholder="Nombre"
            type="text"
            name="name"
            {...register("name")}
          />
        </div>
        <div className="input-box">
          <input
            placeholder="Especie"
            type="text"
            name="species"
            {...register("species")}
          />
        </div>
        <div className="input-box">
          <input
            placeholder="Genero"
            type="text"
            name="gender"
            {...register("gender")}
          />
        </div>
        <div className="input-box">
          <input
            placeholder="Fecha de nacimiento"
            type="text"
            name="birthday"
            {...register("birthday")}
          />
        </div>
        <div className="input-box">
          <input
            placeholder="Ciudad"
            type="text"
            name="city"
            {...register("city")}
          />
        </div>
        <div className="input-box">
          <input
            placeholder="tamaño"
            type="text"
            name="size"
            {...register("size")}
          />
        </div>
        <div className="input-box">
          <input
            placeholder="peso"
            type="number"
            name="weight"
            {...register("weight")}
          />
        </div>
        <div className="input-box">
          <input
            placeholder="personalidad"
            type="text"
            name="personality"
            {...register("personality")}
          />
        </div>
        {/* <div className="input-box">
          <input
            placeholder="asociacion"
            type="text"
            name="association"
            value= {associationInLocal._id}
            {...register("association")}
          />
        </div> */}
        <div className="input-box">
          <input
            placeholder="Historial"
            type="text"
            name="history"
            {...register("history")}
          />
        </div>
        <div><h3>Datos de salud</h3></div>
        <div className="input-box">
          <input
            placeholder="vacunado"
            type="text"
            name="vaccinated"
            {...register("vaccinated")}
          />
        </div>
        <div className="input-box">
          <input
            placeholder="desparasitado"
            type="text"
            name="dewormed"
            {...register("dewormed")}
          />
        </div>
        <div className="input-box">
          <input
            placeholder="saludable"
            type="text"
            name="healthy"
            {...register("healthy")}
          />
        </div>
        <div className="input-box">
          <input
            placeholder="Esterilizado"
            type="text"
            name="sterilized"
            {...register("sterilized")}
          />
        </div>
        <div className="input-box">
          <input
            placeholder="identificado"
            type="text"
            name="identified"
            {...register("identified")}
          />
        </div>
        <div className="input-box">
          <input
            placeholder="microchip"
            type="text"
            name="microchip"
            {...register("microchip")}
          />
        </div>
        <div className="input-box">
          <input
            placeholder="Otras"
            type="text"
            name="other"
            {...register("other")}
          />
        </div>

        <div className="input-box">
          <label className="custom-file-upload" htmlFor="imgPets">
            <input
              id="imgPets"
              type="file"
              name="imgPets"
              {...register("imgPets")}
            />
            <p>Sube a tu mascota</p>
          </label>
        </div>
          <button className="button" type="submit" value="submit">
            <p>Listo!</p>
            </button>
      </form>
    </div>
    )
}

export default PetCreate;