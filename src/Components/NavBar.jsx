import "./NavBar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="navbar shadow-xl max-w-7xl fixed bg-white z-40 h-20">
      <div className="navbar-start h-20 ml-2">
        <Link to="/">
          <img className="w-24 h-full" src="logo.png" alt="logo" />
        </Link>
      </div>
      <div className="space-x-4 navbar-center">
        <Link className="" to="/" spy={true} smooth={true} duration={500}>
          Home
        </Link>
        <Link className="" to="about" spy={true} smooth={true} duration={500}>
          About
        </Link>
        <Link className="" to="service" spy={true} smooth={true} duration={500}>
          Services
        </Link>
        <Link className="" to="contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
      </div>
      <div className="navbar-end mr-2">
        <Link to="/login">
          <button className="btn btn-neutral bg-[#964B00]">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
