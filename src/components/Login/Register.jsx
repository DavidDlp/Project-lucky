import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { registerUser } from "./../../api/servicesLogin/UserLogin/apiRegister";
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
    // console.table(data)
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("telephone", data.telephone);
    formData.append("street", data.street);
    formData.append("city", data.city);
    formData.append("pc", data.pc);
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
          <label className="custom-file-upload" htmlFor="imgAvatar">
            <input
              id="imgAvatar"
              type="file"
              name="imgAvatar"
              {...register("imgAvatar")}
            />
            <p>Sube tu Avatar</p>
          </label>
        </div>
          <button className="button" type="submit" value="submit">
            <p>Listo!</p>
            </button>
      </form>
    </div>
  );
};

export default Register;
