import "./Navbar.css";
import logo from "../../../assets/logo.svg";
import buttonIcon from "../../../assets/button-icon.png";
import avatar from "../../../assets/avatar.png";
import logoSub from "../../../assets/logo-sub.png";

const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="navbar_left">
        <img src={logo} alt="logo" />
        <img src={logoSub} className="logo-sub" alt="logo sub icon" />
      </div>
      <div className="navbar_sub">
        <button className="main_button">
          <img src={buttonIcon} alt="button icon" />
          Subscribe Now
        </button>
        <img src={avatar} className="avatar" alt="avatar icon" />
      </div>
    </div>
  );
};

export default Navbar;
