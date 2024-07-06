import "./Feature.css";

const Feature = ({ image, title, review, time, quality, genre }) => {
  return (
    <div className="feature">
      <img className="feature-img" src={image} alt="image of film" />
      <p className="feature-title">{title}</p>
      <div className="feature-details">
        <div className="feature-detail">
          <img src={review.icon} alt="" />
          <p>{review.text}</p>
        </div>
        <div className="feature-detail">
          <img src={time.icon} alt="" />
          <p>{time.text}</p>
        </div>
        <div className="feature-detail">
          <img src={quality.icon} alt="" />
          <p>{quality.text}</p>
        </div>
      </div>
      <p className="feature-genre">{genre}</p>
    </div>
  );
};

export default Feature;
