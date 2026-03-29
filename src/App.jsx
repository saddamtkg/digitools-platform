import Navbar from './components/layout/Navbar';
import Banner from './components/home/Banner';
import Stats from './components/home/Stats';
import MainSection from './components/home/MainSection';
import Steps from './components/home/Steps';
import Pricing from './components/home/Pricing';
import CtaSection from './components/home/CtaSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <MainSection />
      <Steps />
      <Pricing />
      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
