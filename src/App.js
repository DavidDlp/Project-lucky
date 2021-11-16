import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Pets from "./components/Pets/Pets";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import Register from "./components/Login/Register";
import Association from "./components/Association/Association";
import AssociationCreate from "./components/Association/Create/AssociationCreate";
import Profile from "./components/Profile/Profile";
import "./styles/app.scss";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Link to="/user/register">Register</Link>
          <Link to="/user/login">Login</Link>
          <Link to="/user/logout">Logout</Link>
          <Link to="/home">Home</Link>
          <Link to="/pets">Pets</Link>
          <Link to="/associations">Associations</Link>

          <Routes>
            <Route path="/pets" element={<Pets />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/logout" element={<Logout />} />
            <Route path="/association" element={<Association />} />
            <Route path="/associations" element={<AssociationCreate />} />
            <Route path="/" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
