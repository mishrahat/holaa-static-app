import { useState } from "react";
import "./HeroButton.css";
import playlist from "../../../assets/playlist.png";

const HeroButton = ({ icon }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {hovered ? (
        <div
          style={{
            width: "196px",
            height: "65px",
            borderRadius: "50px",
            border: "1px solid",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginRight: "7rem",
            paddingInline: "1rem",
            background: " rgba(40, 40, 40, 1)",
            borderImageSource:
              "linear-gradient(92.28deg, #5A0DFF 0%, #FF29B8 38.6%, #FF581C 97.73%)",
          }}
          onMouseLeave={() => setHovered(false)}
          className="hover-component"
          alt="button icons"
        >
          <p
            style={{
              fontFamily: "Big Shoulders Display",
              fontWeight: "700",
              fontSize: "18px",
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            ADD TO PLAYLIST
          </p>
          <img
            style={{ width: "24.05px", height: "19.24px" }}
            src={playlist}
            alt=""
          />
        </div>
      ) : (
        <img
          onMouseEnter={() => setHovered(true)}
          className="hero-button-icon"
          src={icon}
          alt="button icons"
        />
      )}
    </>
  );
};

export default HeroButton;
