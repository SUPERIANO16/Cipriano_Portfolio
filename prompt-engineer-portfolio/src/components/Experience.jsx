import { Briefcase } from 'lucide-react';
import { cn } from '../lib/utils';

const experiences = [
  {
    role: 'Senior Prompt Engineer',
    company: 'NeuralForge AI',
    period: '2024 — Present',
    description:
      'Lead prompt engineering for enterprise LLM products serving Fortune 500 clients. Architect multi-agent prompt systems and establish best practices for the prompt engineering team.',
    highlights: ['Enterprise LLM Products', 'Multi-Agent Systems', 'Team Leadership'],
  },
  {
    role: 'AI Solutions Architect',
    company: 'DataMind Labs',
    period: '2022 — 2024',
    description:
      'Designed and deployed multi-agent prompt systems for complex workflows. Built RAG pipelines and fine-tuning frameworks that reduced hallucination rates by 60%.',
    highlights: ['RAG Pipelines', 'Fine-tuning', 'Hallucination Reduction'],
  },
  {
    role: 'ML Engineer',
    company: 'CogniTech',
    period: '2021 — 2022',
    description:
      'Built NLP pipelines and prompt optimization tools. Developed automated evaluation systems for prompt quality and created internal tooling for prompt versioning.',
    highlights: ['NLP Pipelines', 'Prompt Optimization', 'Evaluation Systems'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto text-base sm:text-lg">
            Building the future of human–AI interaction
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-accent-cyan)] via-[var(--color-accent-purple)] to-[var(--color-accent-pink)] opacity-30" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={exp.role}
                  className={cn(
                    'relative flex items-start gap-8',
                    'md:gap-12',
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] shadow-[0_0_12px_rgba(0,255,255,0.4)] z-10 mt-7" />

                  {/* Spacer for mobile */}
                  <div className="w-8 shrink-0 md:hidden" />

                  {/* Card */}
                  <div
                    className={cn(
                      'flex-1 md:w-[calc(50%-3rem)]',
                      isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                    )}
                  >
                    <article className="glass rounded-2xl p-6 sm:p-7 hover:border-[var(--color-accent-purple)]/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(168,85,247,0.06)]">
                      {/* Period badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/5 text-[var(--color-accent-cyan)] mb-4">
                        <Briefcase size={12} />
                        {exp.period}
                      </span>

                      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">{exp.role}</h3>
                      <p className="text-sm text-[var(--color-accent-purple)] font-medium mb-3">{exp.company}</p>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">{exp.description}</p>

                      {/* Highlights */}
                      <div className={cn('flex flex-wrap gap-2', isLeft ? 'md:justify-end' : 'md:justify-start')}>
                        {exp.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-2.5 py-1 text-xs font-mono rounded-full border border-white/10 bg-white/5 text-[var(--color-text-secondary)]"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>

                  {/* Empty spacer for opposite side (desktop) */}
                  <div className="hidden md:block flex-1 md:w-[calc(50%-3rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
