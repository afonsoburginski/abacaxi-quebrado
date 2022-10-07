import React, {useState} from "react";
import classNames from "classnames";

import { SectionTilesProps } from "../../utils/SectionProps";

import { projectsNav } from "../../components/sections/Galery/Data";

/* onst Projects = () => {
  const [item, setItem] = useState({ name: "Foto" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "Foto") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
}; */

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
  const outerClasses = classNames(
    "testimonial section",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    bottomDivider && "has-bottom-divider",
    "paddingTopZero"
  );

  const [isActive, setIsactive] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>

          <div className="container-m">
            <p
              className="m-0 mb-32 reveal-from-bottom ta-l is-revealed"
              data-reveal-delay="400"
              style={{ 
                textAlign: "center",
                fontSize: "20px", 
                fontWeight: "600",
              }}
            >
              Valorizando a qualidade do gado.
            </p>
          </div>

          <div className={tilesClasses}>
            <a
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
              href="#1"
              onClick={() => setActiveNav("#1")}

            >
              <div className="tiles-item-inner paddingZero" >
                <h4 className="dark">Sobre</h4>
                <p className="text-sm mb-0 dark">Nosso gado e história</p>
              </div>
            </a>

            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
              onClick={() => setTypeCarousel("fotos")}
            >
              <div className="tiles-item-inner paddingZero">
                <h4 className="dark">Fotos</h4>
                <p className="text-sm mb-0 dark">Conheça nossa fazenda</p>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
              onClick={() => setTypeCarousel("videos")}
            >
              <div className="tiles-item-inner paddingZero">
                <h4 className="dark">Vídeos</h4>
                <p className="text-sm mb-0 dark">Nossos vídeos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
