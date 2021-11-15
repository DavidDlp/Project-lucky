import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import Register from "./components/Login/Register";

import "./styles/app.scss";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Link to="/user/register">Register</Link>
          <Link to="/user/login">Login</Link>
          <Link to="/user/logout">Logout</Link>

          <Routes>
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
