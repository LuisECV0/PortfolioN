import React, { Suspense, lazy } from 'react';
import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';
import './App.css';

const AboutMe = lazy(() => import('./Components/AboutMe').then(module => ({ default: module.AboutMe })));
const Projects = lazy(() => import('./Components/Projects'));
const Skills = lazy(() => import('./Components/Skills'));


function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <AboutMe />
        <Projects />
        <Skills />
     
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
