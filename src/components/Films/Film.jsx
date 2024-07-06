import { useState } from "react";
import "./Film.css";

const Film = ({ img }) => {
  return (
    <div className="film-image">
      <img src={img} alt="film image" />
    </div>
  );
};

export default Film;
