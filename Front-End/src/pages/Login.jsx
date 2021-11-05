import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import HeaderLogin from "../components/HeaderLogin";
import postLogin from "../APIs/PostLogin";
import TaskContext from "../context/TaskContext";
import { setOnLocalStorage } from "../helpers/localStorage";

const Login = () => {
  const { user, handleChange, setToken, token } = useContext(TaskContext);
  const history = useHistory();

  const sendLogin = async () => {
    const getToken = await postLogin(user);
    setOnLocalStorage('token',getToken)
    history.push("/task");
  };

  return (
    <section>
      <HeaderLogin />
      <h1>LOGIN</h1>
      <input type="email" placeholder="Email" onChange={handleChange} />

      <input type="password" placeholder="Password" onChange={handleChange} />

      <button type="button" onClick={() => sendLogin()}>
        Entrar
      </button>
    </section>
  );
};

export default Login;
