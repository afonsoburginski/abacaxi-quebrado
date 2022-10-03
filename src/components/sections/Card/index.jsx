import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../../utils/SectionProps";
import SectionHeader from "../partials/SectionHeader";
// import Modal from "../elements/Modal";
// import Image from "../elements/Image";

import ImgOne from "../../../assets/images/gado1.png";
import ImgTwo from "../../../assets/images/gado2.png";
import ImgThree from "../../../assets/images/gado3.png";
import movieOne from "../../../assets/images/video1.mp4";
import movieTwo from "../../../assets/images/video2.mp4";
import movieThree from "../../../assets/images/video3.mp4";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  typeCarousel,
  setTypeCarousel,
  ...props
}) => {
  // const [, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // };

  const outerClasses = classNames(
    "feature section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const dataCarousel = {
    photos: [
      {
        data: [
          <div className="item-carousel">
            <img src={ImgOne} alt="gadoOne" />
          </div>,
          <div className="item-carousel">
            <img src={ImgTwo} alt="gadoTwo" />
          </div>,
          <div className="item-carousel">
            <img src={ImgThree} alt="gadoThree" />
          </div>,
        ],
      },
    ],
    movies: [
      {
        data: [
          <div className="item-carousel">
            <video controls>
              <source src={movieOne} type="video/mp4" />
            </video>
          </div>,
          <div className="item-carousel">
            <video controls>
              <source src={movieTwo} type="video/mp4" />
            </video>
          </div>,
          <div className="item-carousel">
            <video controls>
              <source src={movieThree} type="video/mp4" />
            </video>
          </div>,
        ],
      },
    ],
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const sectionHeader = {
    title: "GALERIA",
    subtitle: "Conheça a nossa fazenda",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" style={{ padding: "0" }} />
          <div className="navbar-carousel">
            <button type="button" onClick={() => setTypeCarousel("fotos")}>
              Fotos
            </button>
            <button type="button" onClick={() => setTypeCarousel("videos")}>
              Vídeos
            </button>
          </div>

          <div className={tilesClasses}>
            {typeCarousel === "fotos" ? (
              <AliceCarousel
                controlsStrategy="alternate"
                infinite
                autoPlay
                autoPlayInterval={2000}
                mouseTracking
                items={dataCarousel.photos[0].data}
                responsive={responsive}
              />
            ) : (
              <AliceCarousel
                controlsStrategy="alternate"
                infinite
                autoPlay
                autoPlayInterval={2000}
                mouseTracking
                items={dataCarousel.movies[0].data}
                responsive={responsive}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
