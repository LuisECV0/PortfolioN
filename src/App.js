import {NavBar} from './Components/NavBar';
import { Footer } from './Components/Footer';
import { AboutMe } from './Components/AboutMe';
import { Contact } from './Components/Contact';
import './App.css';


function App() {
  return (
    <div className="App">
  
      <NavBar />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;