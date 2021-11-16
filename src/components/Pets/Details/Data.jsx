import React from 'react';
import pawIcon from './../../../assets/img/pawIcon.png';

const PetData = () => {
    
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
                    <p>Ave</p>
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
                    <p>03-07-2018</p>
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
                    <p>Macho</p>
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
                    <p>Pequeño</p>
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
                    <p>0,3kg</p>
                </div>
            </div>
            <div className="detailPet__Data--personality">
                <h3>Personalidad</h3>
                <div className="personality__tags">
                    <p>Bueno con niños</p>
                    <p>Cauteloso</p>
                    <p>Tímido</p>
                    <p>Juguetón</p>
                    <p>A veces maúllo, ladro...</p>
                </div>
            </div>
            <div className="detailPet__Data--history">
                <h3>Historia</h3>
                <div className="history__info">
                    <p>Me llamo Blue, era un pajarito muy bueno, pero ví cosas que no debería haber visto, que no debían de haber pasado. Por eso llamaron a LARA y vino a salvarnos la vida</p>
                </div>
            </div>
        </div>
    )
}

export default PetData;