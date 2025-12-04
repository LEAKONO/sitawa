import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Certificates from './components/Sections/Certificates';
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
          <Experience />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;