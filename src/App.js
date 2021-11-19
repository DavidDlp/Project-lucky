import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";
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



function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [])

  
  return (
    <>
      <div className="App">
        {
        loading ? <Loading loading={loading}/>
        :
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Onboarding/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/pets" element={<Pets/>}/>
            <Route path="/pets/details/:id" element={<PetsDetails/>}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<PreLogin/>}/>
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/logout" element={<Logout />} />
            <Route path="/associations" element={<Association />} />
            <Route path="/associations/login" element={<AssociationLogin />} />
            <Route path="/associations/register" element={<AssociationRegister />} />
            <Route path="/associations/logout" element={<AssociationLogout />} />
            <Route path="/associationscreate" element={<AssociationCreate />} />
            <Route path="/petscrud" element={<PetsCrud/>} />
            <Route path="/petscreate" element={<PetsCreate />} />
          </Routes>
        </BrowserRouter>
        }
      </div>
    </>
  );
}

export default App;