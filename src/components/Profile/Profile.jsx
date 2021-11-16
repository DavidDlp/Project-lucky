import React from "react";
import profilePhoto from "../../assets/icons/user.svg";
import profileIcono from "../../assets/icons/chica.svg";
import localizacion from "../../assets/icons/localization.svg";
import favorites from "../../assets/icons/favoritosCopy.svg";
import notificaciones from "../../assets/icons/notification.svg";
import mascota from "../../assets/icons/mascota_2.svg";
import adelante from "../../assets/icons/adelante.svg";

export default function Profile() {
  return (
    <>
             {" "}
      <div className="total-container">
        <div className="content">
                  <img className='img-profile' src={profilePhoto} alt="imagen de usuario" />       {" "}
        </div>
               {" "}
        <div className='user-data-container'>
                      <img className='data-ico' src={profileIcono} alt="icono" />           {" "}
          <h2>Mi perfil</h2>
                      <img className='adelante-arrow' src={adelante} alt="icono" />       {" "}
        </div>
               {" "}
        <div className='user-data-container'>
                      <img className='data-ico' src={localizacion} alt="icono" />           {" "}
          <h2>Direcciones</h2>
                      <img className='adelante-arrow' src={adelante} alt="icono" />       {" "}
        </div>
               {" "}
        <div className='user-data-container'>
                      <img className='data-ico'src={favorites} alt="icono" />           {" "}
          <h2>Favoritos</h2>
                      <img className='adelante-arrow' src={adelante} alt="icono" />       {" "}
        </div>
               {" "}
        <div className='user-data-container'>
                      <img img className='data-ico' src={notificaciones} alt="icono" />           {" "}
          <h2>Notificaciones</h2>
                      <img className='adelante-arrow'src={adelante} alt="icono" />       {" "}
        </div>
               {" "}
        <div className='user-data-container'>
                      <img className='data-ico' src={mascota} alt="icono" />           {" "}
          <h2>Estado de Adopcion</h2>
                      <img className='adelante-arrow' src={adelante} alt="icono" />       {" "}
        </div>
        
      </div>
             {" "}
    </>
  );
}
