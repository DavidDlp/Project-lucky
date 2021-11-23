import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { loginAssociation } from "./../../../api/servicesLogin/AssociationLogin/AssociationLogin";

const eye = <FontAwesomeIcon icon={faEye}/>;

const AssociationLogin = () => {
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

  const signIn = async (association) => {
    try {
      const res = await loginAssociation(association);
      localStorage.setItem("token",res.token);
      localStorage.setItem("association", JSON.stringify(res.associationInBd));
      const associationInLocal = localStorage.getItem("association");
      if(associationInLocal){
        return(
          <Link
            to={{
              pathname: "/petscrud",
              state: associationInLocal
            }}
          >
            {navigate("/petscrud")}
          </Link>
        )
      }else{
        return(
          <>

          </>
        )
      }

      
    } catch (error) {
      return console.log(error);
    }
  };
  
  return (
    <div className="cont-Login cont-Login-protectora">
      <div className="cont-logo">
        <img src={logo} alt="logo:Lucky" />
      </div>
      <div className="cont-header">
        <p>Accede como protectora</p>
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
            onClick={() => navigate("/associations/register")}
          />
          <input className="in-session" type="submit" value="Iniciar sesión" />
        </div>
      </form>
    </div>
  );
};

export default AssociationLogin;

