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
      <h2>LOGOUT</h2>
      <button onClick={logout}>Logout</button>;
    </div>
  );
}
