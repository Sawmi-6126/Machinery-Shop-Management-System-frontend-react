import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import tools from "../../Images/landingpage.jpg";

const Signin = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate("/signup");
  };
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  // const [user, setuser] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setuser({
  //     ...user,
  //     [name]: value,
  //   });
  // };

  // const login = () => {
  //   axios.get("http://localhost:3001/signup", user).then((res) => {
  //     alert(res.data.message);
  //     setLoginUser(res.data.user);
  //     navigate.push("/");
  //     // navigate(navigateToDashboard);
  //   });
  // };

  return (
    <div className="Auth-form-container">
      <img
        src={tools}
        alt="Tools"
        className="tools"
        style={{ width: "50%", height: "100%" }}
      />
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Login</h1>
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
              //value={user.username}
              //onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              //value={user.password}
              //onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              //onClick={login}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
