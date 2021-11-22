import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Onboarding from "./components/Onboarding/Onboarding";

import Pets from "./components/Pets/Pets";
import PetsCreate from "./components/Pets/Create/PetsCreate"
import PetsDetails from "./components/Pets/Details/Pets-details";
import PetsCrud from "./components/Pets/Create/PetsCrud"

import PreLogin from "./components/Login/PreLogin";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import Register from "./components/Login/Register";

import Association from "./components/Association/Association";
import AssociationLogin from "./components/Association/Login/AssociationsLogin";
import AssociationCreate from "./components/Association/Create/AssociationCreate";
import "./styles/app.scss";
import AssociationRegister from "./components/Association/Login/AssociationsRegister";
import AssociationLogout from "./components/Association/Login/AssociationsLogout";
import ModifyProfileDetail from "./components/Profile/ModifyProfileDetail";



function App() {
  return (
    <>
      <div className="App">
        
        <BrowserRouter>
          {/* <Link to="/user/register">|Register|</Link>
          <Link to="/user/login">|Login|</Link>
          <Link to="/user/logout">|Logout|</Link>
          <Link to="/user">|PreLogin|</Link>
          <Link to="/pets">|Pets|</Link>
          <Link to="/home">|Home|</Link>
          <Link to="/">|Onboarding|</Link>
          <Link to="/associations">Associations</Link>
          <Link to="/associationscreate">AssociationCreate</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/petscrud">petscrud</Link>
          <Link to="/petscreate">petscreate</Link>*/}
          
       

          <Routes>
            <Route path="/" element={<Onboarding/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/profile" element={<Profile />} />

            <Route path="/user" element={<PreLogin/>}/>
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/logout" element={<Logout />} />
            <Route path="/user/patch/:id" element={<ModifyProfileDetail />} />

            <Route path="/associations" element={<Association />} />
            <Route path="/associations/login" element={<AssociationLogin />} />
            <Route path="/associations/register" element={<AssociationRegister />} />
            <Route path="/associations/logout" element={<AssociationLogout />} />

            <Route path="/associationscreate" element={<AssociationCreate />} />

            <Route path="/pets" element={<Pets/>}/>
            <Route path="/petscrud" element={<PetsCrud/>} />
            <Route path="/petscreate" element={<PetsCreate />} />
            <Route path="/pets/details/:id" element={<PetsDetails/>}/>         
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;