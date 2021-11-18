import React from "react";
import pawIcon from "./../../../assets/img/pawIcon.png";

const PetHealth = ({pet}) => {


    let vaccinated = pet.vaccinated ? 'Sí' : 'No';
    let dewormed = pet.dewormed ? 'Sí' : 'No';
    let healthy = pet.healthy ? 'Sí' : 'No';
    let sterilized = pet.sterilized ? 'Sí' : 'No';
    let identified = pet.identified ? 'Sí' : 'No';
    let microchip = pet.microchip ? 'Sí' : 'No';

    console.log(pet.record.vaccinated);
    // let other = pet.other ? 'Sí' : 'No';
    
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
                    <p>{pet.record.vaccinated ? "Si" : "No"}</p>
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
                    <p>{dewormed}</p>
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
                    <p>{healthy}</p>
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
                    <p>{pet.record.sterilized ? "Si" : "No"}</p>
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
                    <p>{identified}</p>
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
                     {microchip}
                </div>
            </div>
        </div>
    );
};

export default PetHealth;
