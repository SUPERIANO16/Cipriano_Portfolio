import { Sparkles, Brain, Shield, Database, Image, BarChart3 } from 'lucide-react';

const skills = [
  {
    icon: Sparkles,
    title: 'Prompt Design & Engineering',
    description: 'Crafting precise, reliable prompts that consistently deliver high-quality outputs across diverse use cases.',
    items: ['Chain-of-Thought', 'Few-Shot Learning', 'System Prompts', 'Prompt Chaining'],
    color: 'cyan',
  },
  {
    icon: Brain,
    title: 'LLM Fine-tuning',
    description: 'Optimizing model behavior through fine-tuning techniques and parameter-level adjustments.',
    items: ['RLHF', 'LoRA / QLoRA', 'Parameter Optimization', 'Domain Adaptation'],
    color: 'purple',
  },
  {
    icon: Shield,
    title: 'AI Safety & Alignment',
    description: 'Building guardrails and safety layers that keep AI systems aligned with human values.',
    items: ['Red-Teaming', 'Guardrail Design', 'Bias Mitigation', 'Content Filtering'],
    color: 'pink',
  },
  {
    icon: Database,
    title: 'RAG Systems',
    description: 'Designing retrieval-augmented generation pipelines that ground AI responses in factual data.',
    items: ['Vector Databases', 'Embedding Strategies', 'Chunking Optimization', 'Hybrid Search'],
    color: 'green',
  },
  {
    icon: Image,
    title: 'Multi-modal AI',
    description: 'Bridging text, vision, and audio modalities for comprehensive AI solutions.',
    items: ['Vision Models', 'Audio Processing', 'Cross-modal Prompting', 'Image Generation'],
    color: 'cyan',
  },
  {
    icon: BarChart3,
    title: 'Evaluation & Testing',
    description: 'Building robust evaluation frameworks to measure and improve prompt performance.',
    items: ['Benchmarking', 'A/B Testing', 'Quality Metrics', 'Regression Testing'],
    color: 'purple',
  },
];

const colorMap = {
  cyan: {
    bg: 'bg-[var(--color-accent-cyan)]/10',
    text: 'text-[var(--color-accent-cyan)]',
    border: 'hover:border-[var(--color-accent-cyan)]/30',
    shadow: 'hover:shadow-[0_8px_32px_rgba(0,255,255,0.08)]',
    pill: 'border-[var(--color-accent-cyan)]/15 text-[var(--color-accent-cyan)]/80',
  },
  purple: {
    bg: 'bg-[var(--color-accent-purple)]/10',
    text: 'text-[var(--color-accent-purple)]',
    border: 'hover:border-[var(--color-accent-purple)]/30',
    shadow: 'hover:shadow-[0_8px_32px_rgba(168,85,247,0.08)]',
    pill: 'border-[var(--color-accent-purple)]/15 text-[var(--color-accent-purple)]/80',
  },
  pink: {
    bg: 'bg-[var(--color-accent-pink)]/10',
    text: 'text-[var(--color-accent-pink)]',
    border: 'hover:border-[var(--color-accent-pink)]/30',
    shadow: 'hover:shadow-[0_8px_32px_rgba(236,72,153,0.08)]',
    pill: 'border-[var(--color-accent-pink)]/15 text-[var(--color-accent-pink)]/80',
  },
  green: {
    bg: 'bg-[var(--color-accent-green)]/10',
    text: 'text-[var(--color-accent-green)]',
    border: 'hover:border-[var(--color-accent-green)]/30',
    shadow: 'hover:shadow-[0_8px_32px_rgba(74,222,128,0.08)]',
    pill: 'border-[var(--color-accent-green)]/15 text-[var(--color-accent-green)]/80',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto text-base sm:text-lg">
            Deep specialization across the AI prompt engineering stack
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skills.map((skill) => {
            const colors = colorMap[skill.color];
            const Icon = skill.icon;
            return (
              <article
                key={skill.title}
                className={`glass rounded-2xl p-6 sm:p-7 group transition-all duration-500 hover:-translate-y-1 ${colors.border} ${colors.shadow}`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} mb-5`}>
                  <Icon size={22} className={colors.text} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">{skill.title}</h3>

                {/* Description */}
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">{skill.description}</p>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 text-xs font-mono rounded-full border ${colors.pill} bg-transparent`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
