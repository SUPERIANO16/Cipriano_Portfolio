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
      className="min-h-[90vh] flex flex-col justify-center items-start pt-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="flex items-center gap-3 mb-6">
        <div className="h-[1px] w-12 bg-sky-500"></div>
        <p className="font-mono text-sky-400 text-sm tracking-widest uppercase">System Initialization</p>
      </motion.div>
      
      <motion.h1 variants={item} className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-100 mb-4 leading-tight">
        Building interfaces <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600 text-glow">
          with precision.
        </span>
      </motion.h1>

      <motion.p variants={item} className="max-w-2xl text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10">
        I'm a 3rd Year Computer Science student engineering high-performance, accessible, and beautiful web experiences. Looking for a Frontend Developer Internship to push boundaries.
      </motion.p>

      <motion.div variants={item} className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-sky-500 text-slate-950 font-medium rounded-sm hover:bg-sky-400 transition-colors flex items-center gap-2">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 border border-slate-700 text-slate-300 font-medium rounded-sm hover:border-sky-500 hover:text-sky-400 transition-colors">
          Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
}
