import React from "react";
import { Link } from 'react-router-dom';

import profilePhoto from "../../assets/icons/user.svg";

export default function Profile() {
  return (
    <>
      <div className="total-container">
        <div className="content">
          <img className='img-profile' src={profilePhoto} alt="imagen de usuario" />
          <h4>Nombre</h4>
          <h5>Apellidos</h5>
          <p>Email: </p>
          <p>DNI: </p>
          <p>Telefono: </p>
          <p>Dirección: </p>
        </div>
        <div className="logout">
          <Link to="/user">
                <span className="back--button">
                    <button>Cerrar Sesión</button>
                </span>
            </Link>
        </div>
        
      </div>
    </>
  );
}
