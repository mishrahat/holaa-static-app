import "./HeroFeature.css";

const HeroFeature = ({ icon, text }) => {
  return (
    <div className="hero-feature">
      <img src={icon} alt="hero-feature-icon" />
      <p>{text}</p>
    </div>
  );
};

export default HeroFeature;
