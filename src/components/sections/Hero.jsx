import React, { useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Background from "../../assets/images/background.gif";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Container = styled.div`
  background-image: url(${Background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width:415px) {
    background-size: 145%;
    background-position: top;
    height: 250px;

  }
`;
const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );


  return (
    <section {...props} className={outerClasses}>
      <Container>
        <div className={innerClasses} >
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom ta-l is-revealed hero-mobile"
              data-reveal-delay="200"
            >
              Confinamento Abacaxi Quebrado
            </h1>
            <div className="container-m">
              <p
                className="m-0 mb-32 reveal-from-bottom ta-l is-revealed hero-mobile"
                data-reveal-delay="400"
                style={{ fontSize: "20px" }}
              >
                Valorizando a qualidade do gado.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
