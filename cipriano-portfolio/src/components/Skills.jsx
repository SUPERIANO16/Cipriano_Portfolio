import { motion } from 'framer-motion';

const skills = [
  "React",
  "Flutter",
  "Tailwind CSS",
  "Next.js",
  "Redux Toolkit",
  "JavaScript",
  "Python",
  "Supabase",
  "OpenCV",
  "Git",
  "REST APIs",
  "Accessibility (a11y)"
];


export default function Skills() {
  return (
    <section id="skills" className="py-20 w-full relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Core Competencies</h2>
        <div className="flex-grow h-[1px] bg-slate-800"></div>
      </div>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="px-6 py-3 glass border border-slate-800 hover:border-sky-500 hover:text-sky-400 hover:bg-sky-500/5 transition-all cursor-default font-mono text-sm tracking-wide"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
