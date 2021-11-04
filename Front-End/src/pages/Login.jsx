import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import HeaderLogin from "../components/HeaderLogin";
import axios from "axios";

const Login = () => {

  // const [newuser, setNewUser] = useState('');

    const loginUser = async () => {
      history.push("/task")
    };
   
  const history = useHistory();
  return (
    <section>
      <HeaderLogin />
      <h1>LOGIN</h1>
      <input type="email" placeholder="Email" required />

      <input type="password" placeholder="Password" required />

      <button type="button" onClick={() => loginUser}>
        Entrar
      </button>
    </section>
  );
};

export default Login;
