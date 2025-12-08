// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Education from './components/Sections/Education';
import Projects from './components/Sections/Projects';
import Publications from './components/Sections/Publications';
import Gallery from './components/Sections/Gallery';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Publications />
          <Gallery /> 
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;