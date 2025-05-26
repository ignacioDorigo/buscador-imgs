import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <form className="loginForm">
      <div className="div__campo__formulario">
        <label>Email</label>
        <input type="email"></input>
      </div>

      <div className="div__campo__formulario">
        <label>Password</label>
        <input type="password"></input>
      </div>
      <button className="btn_formulario">Ingresar</button>
    </form>
  );
}

export default LoginForm;
