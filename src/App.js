import './App.css';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div id='home'>
      <Banner/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;
