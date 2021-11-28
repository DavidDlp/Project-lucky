import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { patchUserById } from "../../api/UserServices/UserPatch";
import Logout from "../User/Login/Logout";

export default function ModifyProfileDetail() {
    const { register, handleSubmit } = useForm();
    const {id} = useParams()

  function submit(data) {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("surname", data.surname);
        formData.append("DNI", data.DNI);
        formData.append("city", data.city);
        formData.append("street", data.street);
        formData.append("pc", data.pc);
        formData.append("telephone", data.telephone);
        formData.append("imgAvatar", data.imgAvatar[0]);
        updateUser(formData);
    }

  const updateUser = async (data) => {
    try {
      const updatedUser = await patchUserById(id, data);
      console.log("updatedUser -->",updatedUser)
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <>
      <div className="cont-register">
      <div className="header">
        <p>Modifica el/los campo/s que desees</p><br/>
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
            placeholder="Apellidos"
            type="text"
            name="surname"
            {...register("surname")}
          />
        </div>

        <div className="input-box">
          <input
            placeholder="DNI"
            type="text"
            name="DNI"
            {...register("DNI")}
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
            placeholder="Calle"
            type="text"
            name="street"
            {...register("street")}
          />
        </div>

        <div className="input-box">
          <input
            placeholder="Codigo Postal"
            type="text"
            name="pc"
            {...register("pc")}
          />
        </div>

        <div className="input-box">
          <input
            placeholder="Teléfono"
            type="text"
            name="telephone"
            {...register("telephone")}
          />
        </div>

        <div className="input-box">
          <label className="custom-file-upload" htmlFor="imgAvatar">
            <input
              id="imgAvatar"
              type="file"
              name="imgAvatar"
              {...register("imgAvatar")}
            />
            <p>Avatar</p>
          </label>
        </div>
          <button className="button" type="submit" value="submit">
            <p>Aplicar cambios</p>
            </button>
      </form>
            <Logout/>
      </div>
    </>
  );
}
