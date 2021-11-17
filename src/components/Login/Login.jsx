import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginUser } from "../../api/Login/apiLogin";
import logo from "../../assets/img/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye}/>;


const Login = () => {
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {
    register,
    handleSubmit,
  } = useForm();

  const submit = (data) => {
    signIn(data);
  };

  const signIn = async (user) => {
    try {
      const res = await loginUser(user);
      localStorage.setItem("token",res.data);
      localStorage.setItem("user", JSON.stringify(res.userInBd));
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div className="cont-Login">
      <div className="cont-logo">
        <img src={logo} alt="logo:Lucky" />
      </div>
      <div className="cont-header">
        <p>¡Hola! para continuar, inicia sesión o crea una cuenta</p>
      </div>
      <form className="cont-form" onSubmit={handleSubmit(submit)}>
        <input
          className="input"
          placeholder="email@email.com"
          type="text"
          name="email"
          {...register("email", {
            required: true,
          })}
        />
        <div className="pass-wrapper">
           <input
          className="input"
          placeholder="password"
          type={passwordShown ? "text" : "password"}
          name="password"
          {...register("password", {
            required: true,
          })}
        />
        <i onClick={togglePasswordVisiblity}>{eye}</i>
        </div>
       
        <div className="forgot-pass">
          <p>¿Has olvidado tu contraseña?</p>
        </div>
        <div className="cont-inputs-buttons">
          <input
            className="create-acc"
            type="button"
            value="Crear cuenta"
            onClick={() => navigate("/user/register")}
          />
          <input className="in-session" type="submit" value="Iniciar session" />
        </div>
      </form>
    </div>
  );
};

export default Login;
