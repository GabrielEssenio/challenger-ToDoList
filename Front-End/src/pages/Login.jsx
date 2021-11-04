import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  return (
    <section>
      <Header />
      <h1>login</h1>
      <input type="email" placeholder="Email" required />

      <input type="password" placeholder="Password" required />

      <button
        type="button"
        data-testid="login-submit-btn"
        // onClick={ <Redirect to="/task" /> }
      >
        Entrar
      </button>
    </section>
  );
};

export default Login;
