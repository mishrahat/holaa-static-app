import "./NewReleases.css";
import union from "../../assets/Union.png";
import innerLeft from "../../assets/inner-arrow.png";
import innerRight from "../../assets/inner-arrow-right.png";
import filmOne from "../../assets/films/film-1.png";
import filmTwo from "../../assets/films/film-2.png";
import filmThree from "../../assets/films/film-3.png";
import filmFour from "../../assets/films/film-4.png";
import Film from "../Films/Film";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";

const filmImages = [
  { image: filmOne },
  { image: filmTwo },
  { image: filmThree },
  { image: filmFour },
  { image: filmOne },
  { image: filmTwo },
  { image: filmThree },
  { image: filmFour },
  { image: filmFour },
  { image: filmOne },
  { image: filmTwo },
];

const NewReleases = () => {
  const swiper = useSwiper();

  return (
    <div className="releases">
      <div className="releases-header container">
        <div className="releases-title">
          <p>NEWEST RELEASES</p>
          <img src={union} className="releases-image" alt="union icon" />
        </div>
        <div className="releases-arrows">
          <div className="arrow" onClick={() => swiper.slidePrev()}>
            <img src={innerLeft} alt="inner left arrow" />
          </div>
          <div className="arrow" onClick={() => swiper.slideNext()}>
            <img src={innerRight} alt="inner right arrow" />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={6}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {filmImages.map((film, index) => (
          <SwiperSlide key={index}>
            <Film img={film.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="films">
        {filmImages.map((film) => (
          <Film img={film.image} />
        ))}
      </div> */}
    </div>
  );
};

export default NewReleases;
