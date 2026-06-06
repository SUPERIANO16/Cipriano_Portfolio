import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="bg-noise"></div>
      <div className="relative min-h-screen text-slate-100 flex flex-col items-center selection:bg-sky-500/30 selection:text-white">
        <main className="w-full max-w-6xl px-6 md:px-12 flex flex-col gap-32 pb-32">
          <Hero />
          <Projects />
          <Skills />
        </main>
        <Contact />
      </div>
    </>
  );
}

export default App;
