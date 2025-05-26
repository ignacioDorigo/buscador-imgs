import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const imprimirFormulario = (e) => {
    console.log("email: " + email);
    console.log("password: " + password);
    e.preventDefault();
  };

  return (
    <form className="loginForm">
      <div className="div__campo__formulario">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
      </div>

      <div className="div__campo__formulario">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
      </div>
      <button className="btn_formulario" onClick={(e) => imprimirFormulario(e)}>
        Ingresar
      </button>
    </form>
  );
}

export default LoginForm;
