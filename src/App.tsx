import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import NxtWavePodcast from './components/NxtWavePodcast';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { I18nProvider } from './contexts/I18nContext';

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <NxtWavePodcast />
        <Contact />
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;
