import Feature from "./Feature/Feature";
import "./Features.css";
import featureOne from "../../assets/features/feature-1.png";
import featureTwo from "../../assets/features/feature-2.png";
import featureThree from "../../assets/features/feature-3.png";
import featureFour from "../../assets/features/feature-4.png";
import featureStar from "../../assets/features/feature-star.svg";
import featureWatch from "../../assets/features/feature-watch.svg";
import featureQuality from "../../assets/features/feature-4k.svg";

const features = [
  {
    image: featureOne,
    title: "Samelill Sronle",
    details: {
      review: {
        icon: featureStar,
        text: "9.5",
      },
      time: {
        icon: featureWatch,
        text: "0.2h 30m",
      },
      quality: {
        icon: featureQuality,
        text: "4k Quality",
      },
    },
    genre: "Action, Comedy",
  },
  {
    image: featureTwo,
    title: "The Family Monky",
    details: {
      review: {
        icon: featureStar,
        text: "9.5",
      },
      time: {
        icon: featureWatch,
        text: "0.2h 30m",
      },
      quality: {
        icon: featureQuality,
        text: "4k Quality",
      },
    },
    genre: "Action, Comedy",
  },
  {
    image: featureThree,
    title: "Chiefly Universes",
    details: {
      review: {
        icon: featureStar,
        text: "9.5",
      },
      time: {
        icon: featureWatch,
        text: "0.2h 30m",
      },
      quality: {
        icon: featureQuality,
        text: "4k Quality",
      },
    },
    genre: "Action, Comedy",
  },
  {
    image: featureFour,
    title: "World War 02",
    details: {
      review: {
        icon: featureStar,
        text: "9.5",
      },
      time: {
        icon: featureWatch,
        text: "0.2h 30m",
      },
      quality: {
        icon: featureQuality,
        text: "4k Quality",
      },
    },
    genre: "Action, Comedy",
  },
];

const Features = () => {
  return (
    <div className="features">
      {features.map((f) => (
        <Feature
          image={f.image}
          title={f.title}
          review={f.details.review}
          time={f.details.time}
          quality={f.details.quality}
          genre={f.genre}
        />
      ))}
    </div>
  );
};

export default Features;
