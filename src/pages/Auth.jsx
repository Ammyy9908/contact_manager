import React from "react";
import "./Auth.css";
import login from "../utils/login";
import Cookies from "js-cookie";
import register from "../utils/register";
import { Link, useHistory } from "react-router-dom";

function Field({ type, placeholder, value, setValue }) {
  return (
    <div className="form-field">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
function Auth({ type }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Please fill the form");
    } else {
      login(email, password)
        .then((d) => {
          const { token } = d;
          if (token) {
            Cookies.set("AUTH_TOKEN", token);
            window.location.href = "/";
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Please fill the form");
    } else {
      register(email, password)
        .then((feedback) => {
          if (!feedback.error) {
            history.push("/auth/login");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div className="auth-screen">
      <div className="auth-form-field">
        <form onSubmit={type === "login" ? handleLogin : handleRegister}>
          <Field
            type="text"
            placeholder="Email"
            value={email}
            setValue={setEmail}
          />
          <Field
            type="password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />
          <span className="auth-options">
            <a href="#">Forgot Password?</a>
            <input
              type="submit"
              value={type === "login" ? "Login" : "Register"}
            />
          </span>
        </form>
        <div className="auth-switch">
          <Link to={`/auth/${type == "login" ? "register" : "login"}`}>
            {type === "login"
              ? "Not have account yet?Register"
              : "Already have account?Login"}
          </Link>
        </div>
      </div>
      <div className="auth-screen-picture"></div>
    </div>
  );
}

export default Auth;
