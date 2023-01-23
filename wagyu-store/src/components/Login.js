import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import Logo from "../assets/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // add code to handle form submission here
  }

  return (
    <div className="container">
      <div className="logo">
          <Link to="">
            <img src={Logo} alt="logo" />
          </Link>
      </div>
      <div className="box">
        <div className="form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>Password</span>
              <i></i>
            </div>
            <div className="links">
              <br />
              <br />
              <a href="#">Forgot Password?</a>
              <a href="#">Sign Up</a>
            </div>

            <input type="submit" value="Login" className="c" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
