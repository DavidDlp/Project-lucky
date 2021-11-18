import { useNavigate } from "react-router";

export default function Logout() {
 const navigate = useNavigate()

  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    navigate('/user/login')
  };

  return (
    <div className='logout'>
      <span className="logout__back--button">
        <button onClick={logout}>Cerrar sesión</button>
      </span>
    </div>
  );
}
