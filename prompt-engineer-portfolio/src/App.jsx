import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Playground from './components/Playground';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--color-dark-950)] text-[var(--color-text-primary)] selection:bg-[var(--color-accent-cyan)]/20 overflow-x-hidden">
      <Background />
      <Navbar />
      <main className="relative z-10 flex flex-col gap-24 sm:gap-32 pb-24">
        <Hero />
        <Expertise />
        <Projects />
        <Playground />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
