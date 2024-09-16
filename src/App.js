import {NavBar} from './Components/NavBar';
import { Footer } from './Components/Footer';
import { AboutMe } from './Components/AboutMe';
import { Contact } from './Components/Contact';
import  Carrusel  from './Components/Carrusel';
import   Skills   from './Components/Skills';
import  Projects  from './Components/Projects';
import './App.css';


function App() {
  return (
    <div className="App">
  
      <NavBar />
      <AboutMe />
      <Projects />
      <Skills />
      <Carrusel />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;