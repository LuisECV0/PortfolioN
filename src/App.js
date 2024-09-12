import logo from './logo.svg';
import {NavBar} from './Components/NavBar';
import { Footer } from './Components/Footer';
import {Body} from './Components/Body';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}
export default App;