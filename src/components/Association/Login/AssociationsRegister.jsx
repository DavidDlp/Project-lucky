import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import logoReg from "../../../assets/img/logoRegister.png";
import { registerAssociation } from "../../../api/Login/AssociationLogin/AssociationLogin";

const eye = <FontAwesomeIcon icon={faEye} />;

const AssociationRegister = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const submit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("phone", data.phone);
    formData.append("city", data.city);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("imgLogo", data.imgLogo[0]);
    addAssociation(formData);
    console.table("form data ->",formData)
  };

  const addAssociation = async (user) => {
    try {
      const newAssociation = await registerAssociation(user);
      if (newAssociation) {
        navigate("/associations/login");
      }
    } catch (error) {
      return console.log(error);
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
            placeholder="Dirección"
            type="text"
            name="address"
            {...register("address")}
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
            placeholder="Teléfono"
            type="text"
            name="phone"
            {...register("phone")}
          />
        </div>

        <div className="input-box">
          <input
            placeholder="Correo electrónico"
            type="text"
            name="email"
            {...register("email")}
          />
        </div>

        <div className="pass-wrapper input-box">
          <input
            placeholder="Password"
            type={passwordShown ? "text" : "password"}
            name="password"
            {...register("password", {
              required: true,
            })}
          />
          <i onClick={togglePasswordVisiblity}>{eye}</i>
        </div>

        <div className="input-box">
          <label className="custom-file-upload" htmlFor="imgLogo">
            <input
              id="imgLogo"
              type="file"
              name="imgLogo"
              {...register("imgLogo")}
            />
            <p>Sube tu Logo</p>
          </label>
        </div>
          <button className="button" type="submit" value="submit">
            <p>Listo!</p>
            </button>
      </form>
    </div>
  );
};

export default AssociationRegister;