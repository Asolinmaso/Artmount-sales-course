import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Numbers from './components/Numbers';
import About from './components/About';
import Curriculum from './components/Curriculum';
import WhoShouldJoin from './components/WhoShouldJoin';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <Numbers />
        <About />
        <Curriculum />
        <WhoShouldJoin />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
