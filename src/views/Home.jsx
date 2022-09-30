import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/Galery/Card';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Contact from '../components/sections/Contact';

const Home = () => {

  return (
    <>
      <Hero/>
      <Testimonial topDivider />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill />
      <Cta split />
      <Contact />
    </>
  );
}

export default Home;