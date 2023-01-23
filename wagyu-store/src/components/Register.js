import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";
import Logo from "../assets/logo.png";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        // add code to handle form submission here
    }

    return (
        <div className="login-container">
        <div className="login-logo register-logo">
            <Link to="/">
            <img src={Logo} alt="logo" />
            </Link>
        </div>
        <div className="box register-box">
            <div className="form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputBox">
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <span>Full Name</span>
                <i></i>
                </div>
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
                <div className="inputBox">
                <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span>Confirm Password</span>
                <i></i>
                </div>
                <input type="submit" value="Register" className="c" />
            </form>
            </div>
        </div>
        </div>
    );
}

export default Register;
