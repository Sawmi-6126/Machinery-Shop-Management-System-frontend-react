import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import tools from "../../Images/landingpage.jpg";

function Signup() {
  const navigate = useNavigate();
  const navigateToSignin = () => {
    navigate("/");
  };

  //on form submit click handler
  const [user, setuser] = useState({
    username: "",
    password: "",
    passwordCheck: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setuser({
  //     ...user, //spread operator
  //     [name]: value,
  //   });
  // };

  // const signup = () => {
  //   const { username, password, passwordCheck } = user;
  //   if (username && password && passwordCheck) {
  //     axios
  //       .post("http://localhost:3001/signup", user)
  //       .then((res) => console.log(res));
  //   } else {
  //     alert("invalid input");
  //   }

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
          <h2 className="Auth-form-title">Sign Up</h2>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={navigateToSignin}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="String"
              className="form-control mt-1"
              placeholder="Username"
              id="username"
              // value={user.username}
              // onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              id="password"
              // value={user.password}
              // onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Re-Enter Password"
              id="passwordcheck"
              // value={user.passwordCheck}
              // onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              //onClick={signup}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
//}

export default Signup;
