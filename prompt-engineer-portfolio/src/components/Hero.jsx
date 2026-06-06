import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const titles = ['LLM Optimization', 'Agentic Frameworks', 'RAG Systems', 'Context Design'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      }, 100);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent-cyan)]/30 bg-[var(--color-accent-cyan)]/5 backdrop-blur-md">
          <Sparkles size={16} className="text-[var(--color-accent-cyan)] animate-pulse-slow" />
          <span className="text-sm font-mono text-[var(--color-accent-cyan)] uppercase tracking-wider">
            Advanced AI Tooling Specialist
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.1]">
          Engineering Context. <br className="hidden sm:block" />
          <span className="gradient-text">Orchestrating Intelligence.</span>
        </h1>

        {/* Typing effect */}
        <div className="h-12 flex items-center justify-center">
          <p className="text-xl sm:text-3xl text-[var(--color-text-secondary)] font-medium">
            Expert in <span className="text-[var(--color-text-primary)]">{displayText}</span>
            <span className="inline-block w-[3px] h-[1em] bg-[var(--color-accent-cyan)] ml-1 align-middle animate-[typing-cursor_1s_infinite]" />
          </p>
        </div>

        <p className="max-w-2xl mx-auto text-lg text-[var(--color-text-muted)] mt-6">
          I design sophisticated prompt architectures, build autonomous multi-agent swarms, and optimize enterprise RAG pipelines to push the boundaries of what LLMs can achieve.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] text-white font-semibold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
          >
            <span className="relative z-10">Explore Matrix</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
          
          <a
            href="#playground"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-[var(--color-text-primary)] font-semibold text-lg hover:border-[var(--color-accent-pink)]/50 hover:bg-[var(--color-accent-pink)]/5 transition-all duration-300"
          >
            Try Prompt Playground
          </a>
        </div>
      </div>
    </section>
  );
}
