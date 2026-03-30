import React from 'react';

import Banner from './Banner';
import Stats from './Stats';
import MainSection from './MainSection';
import Steps from './Steps';
import Pricing from './Pricing';
import CtaSection from './CtaSection';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Stats />
      <MainSection />
      <Steps />
      <Pricing />
      <CtaSection />
    </div>
  );
};

export default HomePage;
