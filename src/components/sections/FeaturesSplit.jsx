import React, { useState } from "react";
import styled from "styled-components";
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import ReactPlayer from 'react-player'
import Modal from '../elements/Modal';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  Feature,
  topOuterDivider,
  bottomOuterDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  alignTop,
  imageFill,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'SOBRE A EMPRESA',
    paragraph: 'Nós do confinamento abacaxi quebrado temos o orgulho de sermos um grande diferencial, estando focado no compromisso com o meio ambiente, com muita dedicação e bem estar aos animais, e assim trabalhando com sistemas  automatizados para a distribuição e nutrição animal nos setores de baias preparadas para confinação bovina.'
  };

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 170) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "  ...Ver Mais" : " Ver Menos"}
        </span>
      </p>
    );
  };

  const TitleStyle = styled.h2`
    color: white;
    font-size: 2rem;
    margin-top: 0rem;
  `;
  

  return (
    <section {...props} className={outerClasses}>
      <div className="container" id="1">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content"></SectionHeader>
          <div className={splitClasses}>


{/*             <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <p className="m-0">

                </p>
              </div>
            </div> */}

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <TitleStyle>NOSSO GADO</TitleStyle>
                <p className="m-0" id="justify">
                  &nbsp; &nbsp; O <b> confinamento abacaxi quebrado </b> possue um sistema de produção de gado de corte para o abastecimento, com carne de origem segura e padrão de qualidade constante,
                  tanto para o mercado interno quanto para a exportação.
                </p>

                <br/>

                <p className="m-0" id="justify">
                  <ReadMore>
                  &nbsp; &nbsp; No momento em que os animais oriundos de compras, chegam ao confinamento, eles passam por um tratamento sanitário profilático para garantir a devida imunização contra
                  algumas enfermidades e parasitas que possam a cometer sua saúde, feito isso os animais são separados em lotes por idade, tamanho e peso padrão para que sejam direcionados as devidas baias onde começam a ser suplementados com ração.
                  </ReadMore>
                </p>

              </div>

              <ReactPlayer className="playerMobile"
                width='100%'
                height= '300px'
                url='https://youtu.be/KRr4PLcsOLk'
              />

             {/*  <div className="hero-figure reveal-from-bottom" data-reveal-value="20px" data-reveal-delay="800">
                <a
                  data-video="https://player.vimeo.com/video/740134746"
                  href="#0"
                  aria-controls="video-modal"
                  onClick={openModal}
                >
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/video-placeholder.png')}
                    alt="Hero"
                    width={896}
                    height={504} />
                </a>
              </div>

              <Modal
                id="video-modal"
                show={videoModalActive}
                handleClose={closeModal}
                video="https://player.vimeo.com/video/740134746"
                videoTag="iframe" 
              /> */}
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <TitleStyle>HISTÓRIA</TitleStyle>
                <p className="m-0" id="justify">
                  &nbsp; &nbsp; Com mais de dez anos no seguimento de confinamento de gado, uma parceria entre Flavio Martins Simone e Moises Maciel Veiga Ribeiro
                  ao longo desses anos atingindo a sua meta de 22.500,00 mil animais estáticos. No ano de 2021 abatendo 42.000.00 mil animais,
                  e nesse ano de 2022 ate o mês de julho foram abatidos 32.000,00 mil bovinos, não trabalhamos com boi tell.
                </p>

                <br/>

                <p className="m-0" id="justify">
                  &nbsp; &nbsp; O <b> Confinamento Abacaxi </b> trabalha com cem por cento de rebanho próprio, nosso compromisso é com o bem estar dos animais,
                  meio ambiente, com os nossos colaboradores e fornecedores.
                </p>
              </div>

              <ReactPlayer className="playerMobile"
                width='100%'
                height= '300px'
                url='https://youtu.be/oM_mq5Sr880'
              />

              {/* <div className="hero-figure reveal-from-bottom" data-reveal-value="20px" data-reveal-delay="800">
                <a
                  data-video="https://player.vimeo.com/video/740134746"
                  href="#0"
                  aria-controls="video-modal"
                  onClick={openModal}
                >
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/video-placeholder.png')}
                    alt="Hero"
                    width={896}
                    height={504} />
                </a>
              </div>

              <Modal
                id="video-modal"
                show={videoModalActive}
                handleClose={closeModal}
                video="https://player.vimeo.com/video/740134746"
                videoTag="iframe" 
              /> */}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;