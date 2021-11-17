import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { registerUser } from "../../api/Login/apiRegister";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import logoReg from "../../assets/img/logoRegister.png";

const eye = <FontAwesomeIcon icon={faEye} />;

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const submit = (data) => {
    /* console.table(data) */
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("telephone", data.telephone);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("imgAvatar", data.imgAvatar[0]);
    addUser(formData);
  };

  const addUser = async (user) => {
    try {
      const newUser = await registerUser(user);
      if (newUser) {
        navigate("/user/login");
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
            placeholder="¿Cuál es tu nombre?"
            type="text"
            name="name"
            {...register("name")}
          />
        </div>

        <div className="input-box">
          <input
            placeholder="¿Y el apellido?"
            type="text"
            name="surname"
            {...register("surname")}
          />
        </div>

        <div className="input-box">
          <input
            placeholder="Tu número de contacto"
            type="text"
            name="telephone"
            {...register("telephone")}
          />
        </div>

        <div className="input-box">
          <input
            placeholder="Aqui iría el email!"
            type="text"
            name="email"
            {...register("email")}
          />
        </div>

        <div className="pass-wrapper input-box">
          <input
            placeholder="Y aqui la contraseña!"
            type={passwordShown ? "text" : "password"}
            name="password"
            {...register("password")}
          />
          <i onClick={togglePasswordVisiblity}>{eye}</i>
        </div>

        <div className="input-box">
          <label className="custom-file-upload" htmlFor="imgAvatar">
            <input
              id="imgAvatar"
              type="file"
              name="imgAvatar"
              {...register("imgAvatar")}
            />
            <p>Tu Avatar!!!</p>
          </label>
        </div>
          <input className="button" type="submit" value="submit"/>
            <p>Listo!</p>
      </form>
    </div>
  );
};

export default Register;
