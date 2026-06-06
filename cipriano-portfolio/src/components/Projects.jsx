import { motion } from 'framer-motion';

const Github = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>
);
const ExternalLink = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const projects = [
  {
    title: 'E-Commerce Storefront',
    description: 'A high-performance headless e-commerce frontend. Features include real-time cart updates, optimistic UI, and instant search.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Redux Toolkit'],
    github: '#',
    live: '#'
  },
  {
    title: 'Interactive Data Dashboard',
    description: 'A financial dashboard rendering complex datasets with hardware acceleration. Custom data grids and charting solutions.',
    tech: ['TypeScript', 'React', 'Recharts', 'Vite'],
    github: '#',
    live: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 w-full relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Work</h2>
        <div className="flex-grow h-[1px] bg-slate-800"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.2 }}
            className="group relative glass rounded-sm overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-colors"
          >
            {/* The technical hover reveal: a mock code overlay */}
            <div className="absolute inset-0 bg-slate-950/95 flex flex-col justify-center px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 font-mono text-sm text-sky-400" aria-hidden="true">
              <p>{`<Project>`}</p>
              <p className="pl-4 text-slate-300">{`name="${project.title}"`}</p>
              <p className="pl-4 text-slate-300">{`status="deployed"`}</p>
              <p className="pl-4 text-slate-300">{`performance="optimized"`}</p>
              <p>{`</Project>`}</p>
            </div>

            <div className="p-8 h-full flex flex-col relative z-20 group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-2xl font-semibold mb-3 text-slate-100">{project.title}</h3>
              <p className="text-slate-400 mb-6 flex-grow leading-relaxed">{project.description}</p>
              
              <ul className="flex flex-wrap gap-2 mb-8 font-mono text-xs text-sky-400">
                {project.tech.map((t, idx) => (
                  <li key={idx} className="bg-sky-500/10 px-2 py-1 rounded-sm border border-sky-500/20">{t}</li>
                ))}
              </ul>

              <div className="flex gap-4">
                <a href={project.github} aria-label={`GitHub Repository for ${project.title}`} className="text-slate-400 hover:text-sky-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.live} aria-label={`Live Demo for ${project.title}`} className="text-slate-400 hover:text-sky-400 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
