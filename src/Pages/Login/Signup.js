import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const navigateToSignin = () => {
    navigate("/signin");
  };
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordCheck, setPasswordCheck] = useState("");

  //on form submit click handler
  const [user, setuser] = useState({
    username: "",
    password: "",
    passwordCheck: "",
  });

  const adduser = () => {
    axios.post("http://localhost:3001/signup", user);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" method="POST">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={navigateToSignin}>
              Sign In
            </span>
          </div>
          {/* <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div> */}
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="String"
              className="form-control mt-1"
              placeholder="Username"
              id="username"
              value={user.username}
              onChange={(event) => {
                setuser({ ...user, username: event.target.value });
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              id="password"
              value={user.password}
              onChange={(event) => {
                setuser({ ...user, password: event.target.value });
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Re-Enter Password"
              id="passwordcheck"
              value={user.passwordCheck}
              onChange={(event) => {
                setuser({ ...user, passwordCheck: event.target.value });
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={adduser}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
