import "./HeroButton.css";

const HeroButton = ({ icon }) => {
  return (
    <>
      <img className="hero-button-icon" src={icon} alt="button icons" />
    </>
  );
};

export default HeroButton;
