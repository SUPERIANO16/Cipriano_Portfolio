import { motion } from 'framer-motion';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
  };

  return (
    <motion.section
      id="home"
      className="min-h-[90vh] flex flex-col justify-center items-start pt-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="flex items-center gap-3 mb-6">
        <div className="h-[1px] w-12 bg-sky-500"></div>
        <p className="font-mono text-sky-400 text-sm tracking-widest uppercase">Frontend Developer Portfolio</p>
      </motion.div>

      <motion.h1 variants={item} className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-100 mb-4 leading-tight">
        Jaedrian Terrence
        T. Cipriano
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600 text-glow">
          Building purposeful
          interfaces.
        </span>
      </motion.h1>

      <motion.p variants={item} className="max-w-2xl text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10">
        I am a Computer Science student who builds purposeful interfaces, from AI-powered tools to freelance web applications, with a focus on clean user experiences and real-world impact.
      </motion.p>

      <motion.div variants={item} className="flex flex-wrap gap-4">
        <a href="#projects" className="px-6 py-3 bg-sky-500 text-slate-950 font-medium rounded-sm hover:bg-sky-400 transition-colors flex items-center gap-2">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 border border-slate-700 text-slate-300 font-medium rounded-sm hover:border-sky-500 hover:text-sky-400 transition-colors">
          Contact Me
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-slate-700 text-slate-300 font-medium rounded-sm hover:border-sky-500 hover:text-sky-400 transition-colors flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Resume
        </a>
      </motion.div>
    </motion.section>
  );
}
