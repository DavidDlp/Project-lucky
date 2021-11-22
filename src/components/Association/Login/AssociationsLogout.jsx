import { useNavigate } from "react-router";

export default function AssociationLogout() {
 const navigate = useNavigate()

  const logout = () => {
    /* localStorage.setItem("token", "");
    localStorage.setItem("association", ""); */
    localStorage.clear()
    navigate('/associations/login')
  };

  return (
    <div className='logout'>
      <h2>LOGOUT</h2>
      <button onClick={logout}>Logout</button>;
    </div>
  );
}