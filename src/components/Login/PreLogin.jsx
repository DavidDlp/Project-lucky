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

        <div className="cont-text">
          <p className="cont-text__p">¿Cómo quieres entrar?</p>
        </div>

        <div className="cont-buttons">
          <button className="button" onClick={() => navToLog("toUserLogin")}>
            <p>Usuario</p>
          </button>
          <button className="button" onClick={() => navToLog("toAssosiationLogin")}>
            <p>Asociacion protectora</p>
          </button>
        </div>

        <div>
            <p onClick={() => navToLog("toGuestHome")}
            className="p">Registrarse en otro momento</p>
        </div>

      </div>
    </>
  );
}
