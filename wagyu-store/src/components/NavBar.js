import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="">
          <img src={Logo} alt="logo"/>
        </Link>
      </div>
      <div className="navbar-right">
        <button className="signup">
          Sign up
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </div>
      <div className="navbar-pages">
        <Link to="">Home</Link>
        <Link to="">Products</Link>
      </div>
    </div>
  );
};

export default NavBar;
