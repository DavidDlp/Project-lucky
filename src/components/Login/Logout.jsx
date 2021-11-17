import { useState } from "react";
import { useNavigate } from "react-router";

export default function Logout() {
  const [loggedOut, setLoggedOut] = useState(false);
  const navigate = useNavigate()

  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    setLoggedOut(true);
    navigate('/user/login')
  };

  return (
    <div className='logout'>
      <h2>LOGOUT</h2>
      <button onClick={logout}>Logout</button>;
    </div>
  );
}
