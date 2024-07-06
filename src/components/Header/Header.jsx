import Navbar from "../Shared/Navbar/Navbar";
import "./Header.css";
import hero from "../../assets/hero-bg.png";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <div className="header-primary">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
