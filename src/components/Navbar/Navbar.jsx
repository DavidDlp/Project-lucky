import React from 'react';

import navbarHome from './../../assets/img/navbarHome.png';
import navbarPets from './../../assets/img/navbarPets.png';
import navbarMenu from './../../assets/img/navbarMenu.png';

const Navbar = () => {
    
    return (
        <div className="navbar">
            <img src={ navbarHome } alt="Menu Home" />
            <img src={ navbarPets } alt="Menu Pets" />
            <img src={ navbarMenu } alt="Menu" />
        </div>
    )
}

export default Navbar;