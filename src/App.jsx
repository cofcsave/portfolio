import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Skills from './components/Skills/Skills';
import WebPort from './components/WebPort/WebPort';
import DesignPort from './components/DesignPort/DesignPort';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import DotGrid from './components/DotsBkg/DotsBkg';

function App() {

  return (
    <>
     <Header />
      <Hero />
      <Companies />
      <Skills />
      <WebPort />
      <DesignPort />
      <About />
     <Footer />
      <div style={{ width: '100%', height: '100%', position: 'absolute', top:'0', left:'0',zIndex:'-1' }}>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#202020"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
    </>
  )
}

export default App
