import './App.css';
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects';

function App() {
  return (
    <div id='home'>
      <Banner/>
      <AboutMe/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
