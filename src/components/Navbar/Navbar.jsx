import React from 'react';
import { Link } from 'react-router-dom';

import navbarHome from './../../assets/img/navbarHome.png';
import navbarPets from './../../assets/img/navbarPets.png';
import navbarMenu from './../../assets/img/navbarMenu.png';

const Navbar = () => {
    
    return (
        <div className="navbar">
            <Link to="/home">
                <img src={ navbarHome } alt="Menu Home" />
            </Link>
            <Link to="/pets">
                <img src={ navbarPets } alt="Menu Pets" />
            </Link>
            <Link to="/profile">
                <img src={ navbarMenu } alt="Menu" />
            </Link>
        </div>
    )
}

export default Navbar;