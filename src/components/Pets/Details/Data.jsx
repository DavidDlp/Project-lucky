import React from 'react';
import pawIcon from './../../../assets/img/pawIcon.png';

const PetData = ({pet}) => {
    
    return (
        <div className="detailPet__Data">
            <div className="detailPet__Data--attribute">
                <div className="attribute__icon">
                    <img src={pawIcon} alt="genre" />
                </div>
                <div className="attribute__data">
                    <p>Especie</p>
                </div>
                <div className="attribute__res">
                    <p>{pet.species}</p>
                </div>
            </div>
            <div className="detailPet__Data--attribute">
                <div className="attribute__icon">
                    <img src={pawIcon} alt="genre" />
                </div>
                <div className="attribute__data">
                    <p>Fecha de nacimiento</p>
                </div>
                <div className="attribute__res">
                    <p>{pet.birthday}</p>
                </div>
            </div>
            <div className="detailPet__Data--attribute">
                <div className="attribute__icon">
                    <img src={pawIcon} alt="genre" />
                </div>
                <div className="attribute__data">
                    <p>Sexo</p>
                </div>
                <div className="attribute__res">
                    <p>{pet.gender}</p>
                </div>
            </div>
            <div className="detailPet__Data--attribute">
                <div className="attribute__icon">
                    <img src={pawIcon} alt="genre" />
                </div>
                <div className="attribute__data">
                    <p>Tamaño</p>
                </div>
                <div className="attribute__res">
                    <p>{pet.size}</p>
                </div>
            </div>
            <div className="detailPet__Data--attribute">
                <div className="attribute__icon">
                    <img src={pawIcon} alt="genre" />
                </div>
                <div className="attribute__data">
                    <p>Peso</p>
                </div>
                <div className="attribute__res">
                    <p>{pet.weight}</p>
                </div>
            </div>
            <div className="detailPet__Data--personality">
                <h3>Personalidad</h3>
                <div className="personality__tags">
                    <p>{pet.personality}</p>
                </div>
            </div>
            <div className="detailPet__Data--history">
                <h3>Historia</h3>
                <div className="history__info">
                    <p>{pet.history}</p>
                </div>
            </div>
        </div>
    )
}

export default PetData;