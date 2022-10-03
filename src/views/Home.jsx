import React, { useState } from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from "../components/sections/Card/index.jsx";
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Contact from '../components/sections/Contact';

const Home = () => {
  const [typeCarousel, setTypeCarousel] = useState("fotos");

  return (
    <>
      <Hero/>
        <Testimonial typeCarousel={typeCarousel} setTypeCarousel={setTypeCarousel} topDivider />
      <FeaturesTiles typeCarousel={typeCarousel} setTypeCarousel={setTypeCarousel} />
      <FeaturesSplit invertMobile topDivider imageFill />
      <Cta split />
      <Contact />
    </>
  );
}

export default Home;