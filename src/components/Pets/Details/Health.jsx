import React from "react";
import pawIcon from "./../../../assets/img/pawIcon.png";

const PetHealth = ({pet}) => {
    
    return (
        <div className="detailPet__Health">
            <div className="detailPet__Health--attribute">
                <div className="attribute__icon">
                    <img src={pawIcon} alt="genre" />
                </div>
                <div className="attribute__data">
                    <p>Vacunado</p>
                </div>
                <div className="attribute__res">
                    <p>{pet.record.vaccinated ? 'Sí' : 'No'}</p>
                </div>
            </div>
            <div className="detailPet__Health--attribute">
                <div className="attribute__icon">
                    <img src={pawIcon} alt="genre" />
                </div>
                <div className="attribute__data">
                    <p>Desparasitado</p>
                </div>
                <div className="attribute__res">
                    <p>{pet.record.dewormed ? 'Sí' : 'No'}</p>
                </div>
            </div>
            <div className="detailPet__Health--attribute">
                <div className="attribute__icon">
                    <img src={pawIcon} alt="genre" />
                </div>
                <div className="attribute__data">
                    <p>Sano</p>
                </div>
                <div className="attribute__res">
                    <p>{pet.record.healthy ? 'Sí' : 'No'}</p>
                </div>
            </div>
            <div className="detailPet__Health--attribute">
                <div className="attribute__icon">
                    <img src={pawIcon} alt="genre" />
                </div>
                <div className="attribute__data">
                    <p>Esterilizado</p>
                </div>
                <div className="attribute__res">
                    <p>{pet.record.sterilized ? 'Sí' : 'No'}</p>
                </div>
            </div>
            <div className="detailPet__Health--attribute">
                <div className="attribute__icon">
                    <img src={pawIcon} alt="genre" />
                </div>
                <div className="attribute__data">
                    <p>Identificado</p>
                </div>
                <div className="attribute__res">
                    <p>{pet.record.identified ? 'Sí' : 'No'}</p>
                </div>
            </div>
            <div className="detailPet__Health--attribute">
                <div className="attribute__icon">
                    <img src={pawIcon} alt="genre" />
                </div>
                <div className="attribute__data">
                    <p>Microchip</p>
                </div>
                <div className="attribute__res">
                     <p>{pet.record.microchip ? 'Sí' : 'No'}</p>
                </div>
            </div>
        </div>
    );
};

export default PetHealth;
