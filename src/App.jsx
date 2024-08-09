import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Skills from './components/Skills/Skills';
import WebPort from './components/WebPort/WebPort';
import DesignPort from './components/DesignPort/DesignPort';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
     <Header />
     <main>
      <Hero />
      <Companies />
      <Skills />
      <WebPort />
      <DesignPort />
      <About />
     </main>
     <Footer />
    </>
  )
}

export default App
