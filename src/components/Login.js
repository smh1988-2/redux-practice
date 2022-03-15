import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../slices/userSlice";

function Login() {
  const user = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  function handleUserLogin(e) {
    e.preventDefault();
    const user = { username: e.target[0].value, password: e.target[1].value };
    dispatch(login(user))
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => handleUserLogin(e)}>
        <input type="text" placeholder="Username"></input>
        <br />
        <br />
        <input type="password" placeholder="Password"></input>
        <br />
        <br />
        <button>Login</button>
      </form>
      <p>Current user: {user.user.username}</p>
    </div>
  );
}

export default Login;