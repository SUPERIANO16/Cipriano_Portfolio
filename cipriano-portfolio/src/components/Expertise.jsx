import { Layers, GitBranch, ShieldAlert, Cpu, Network } from 'lucide-react';

export default function Expertise() {
  const expertiseList = [
    {
      title: 'System Prompt Architecture',
      description: 'Designing robust meta-prompts that define persona, constraints, and operational boundaries for foundational models.',
      icon: Layers,
      color: 'cyan'
    },
    {
      title: 'Prompt Chaining & Logic',
      description: 'Building multi-step reasoning pipelines using Chain-of-Thought, Tree-of-Thoughts, and ReAct paradigms.',
      icon: GitBranch,
      color: 'purple'
    },
    {
      title: 'Evaluation Frameworks',
      description: 'Implementing quantitative evaluation using Trulens, Phoenix, and custom LLM-as-a-Judge rubrics.',
      icon: ShieldAlert,
      color: 'pink'
    },
    {
      title: 'Fine-Tuning Prep',
      description: 'Curating, formatting, and filtering high-quality datasets for LoRA and full-parameter fine-tuning workflows.',
      icon: Cpu,
      color: 'amber'
    },
    {
      title: 'Multi-Agent Workflows',
      description: 'Orchestrating specialized AI agents (e.g., using AutoGen or CrewAI) that delegate tasks and collaborate to solve complex problems.',
      icon: Network,
      color: 'green'
    }
  ];

  const getColorClass = (color) => {
    const map = {
      cyan: 'text-[var(--color-accent-cyan)] bg-[var(--color-accent-cyan)]/10',
      purple: 'text-[var(--color-accent-purple)] bg-[var(--color-accent-purple)]/10',
      pink: 'text-[var(--color-accent-pink)] bg-[var(--color-accent-pink)]/10',
      amber: 'text-[var(--color-accent-amber)] bg-[var(--color-accent-amber)]/10',
      green: 'text-[var(--color-accent-green)] bg-[var(--color-accent-green)]/10'
    };
    return map[color];
  };

  return (
    <section id="expertise" className="relative px-6 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-[var(--color-accent-purple)] tracking-widest uppercase mb-3">01. Core Competencies</h2>
        <h3 className="text-3xl md:text-5xl font-bold">Expertise Matrix</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseList.map((item, idx) => (
          <div
            key={idx}
            className="glass-hover group p-8 relative overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/5 ${getColorClass(item.color)}`}>
              <item.icon size={28} strokeWidth={1.5} />
            </div>
            
            <h4 className="text-xl font-semibold mb-3 text-[var(--color-text-primary)] group-hover:text-white transition-colors">{item.title}</h4>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
              {item.description}
            </p>

            {/* Neon Accent Line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--color-accent-cyan)] group-hover:w-full transition-all duration-500 ease-out" />
          </div>
        ))}
      </div>
    </section>
  );
}
