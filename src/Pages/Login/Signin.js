import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import login from "../../Images/login_image.svg";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate("/signup");
  };
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="Auth-form-container">
      {/* <img src={login} alt="Login-Image" className="login" /> */}
      <form className="Auth-form" method="POST">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary" onClick={navigateToSignup}>
              Sign Up
            </span>
          </div>
          <div className="form-group mt-3"></div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Username"
              // value={login.username}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              // value={login.password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={navigateToDashboard}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
