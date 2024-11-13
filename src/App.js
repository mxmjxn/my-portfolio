// src/App.js
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import WorkHistory from './components/WorkHistory';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      {/* Other components */}
      <AboutMe />
      <Projects />
      <WorkHistory />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
