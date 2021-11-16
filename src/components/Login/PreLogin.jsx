import { useNavigate } from "react-router";

export default function PreLogin() {
  const navigate = useNavigate();

  const navToLog = (e) => {
    if (e === "toUserLogin") {
      navigate("/user/login");
    } else if (e === "toAssosiationLogin") {
      navigate("/user/register");
    } else if (e === "toGuestHome") {
      navigate("/home");
    }
  };

  return (
    <>
      <div className="cont-preLog">
        <div classname="cont-text">
          <h4>¿Cómo quieres entrar?</h4>
        </div>
        <div className="cont-buttons">
          <button className="button" onClick={() => navToLog("toUserLogin")}>
            <p>Usuario</p>
          </button>
          <button className="button" onClick={() => navToLog("toAssosiationLogin")}>
            <p>Asociacion protectora</p>
          </button>
          <button className="button-dif" onClick={() => navToLog("toGuestHome")}>
            <p>Registrarse en otro momento</p>
          </button>
        </div>
      </div>
    </>
  );
}
