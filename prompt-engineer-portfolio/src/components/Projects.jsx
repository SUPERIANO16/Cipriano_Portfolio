import { useState } from 'react';
import { ChevronDown, ExternalLink, Code2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Enterprise RAG Pipeline Optimizations',
      description: 'Redesigned the retrieval and generation prompt architecture for a Fortune 500 legal tech firm, reducing token hallucination by 42% and improving citation accuracy.',
      tags: ['Claude 3.5 Sonnet', 'Pinecone', 'LangChain'],
      promptBreakdown: `// System Prompt Optimization\n\n<role>\nYou are a rigorous legal analyst. Your primary directive is to synthesize the provided context blocks into an accurate, objective summary. \n</role>\n\n<constraints>\n1. DO NOT incorporate external knowledge. \n2. If the answer is not in the <context>, output EXACTLY: "Insufficient information provided."\n3. Cite the [Document_ID] inline for every factual claim.\n</constraints>\n\n<context>\n{{retrieved_chunks}}\n</context>\n\n<user_query>\n{{query}}\n</user_query>\n\n<scratchpad>\n// Step-by-step reasoning block\n</scratchpad>`
    },
    {
      id: 2,
      title: 'Autonomous Multi-Agent Swarm',
      description: 'Orchestrated a 3-agent swarm (Planner, Coder, Reviewer) for automated code refactoring. Implemented a self-correcting feedback loop that reduced syntax errors in final outputs by 85%.',
      tags: ['GPT-4o', 'CrewAI', 'Python'],
      promptBreakdown: `// Agent: Critic/Reviewer Persona\n\nAnalyze the <generated_code> against the <original_requirements>. \n\nYou must evaluate based on these criteria:\n- Time complexity (O(N) preferred)\n- Type safety\n- Edge case handling\n\nOutput your review in the following JSON schema:\n{\n  "is_approved": boolean,\n  "critical_flaws": string[],\n  "suggested_fixes": string\n}`
    },
    {
      id: 3,
      title: 'Creative Writing Copilot',
      description: 'Developed a few-shot prompt strategy for a creative writing application that adapts to the user\'s specific narrative voice and pacing preferences.',
      tags: ['Gemini 1.5 Pro', 'Few-Shot', 'JSON'],
      promptBreakdown: `// Voice Cloning Prompt Structure\n\nAnalyze the user's <writing_samples>. Identify their: \n1. Sentence length variance\n2. Vocabulary tier (e.g., colloquial, academic, poetic)\n3. Emotional undertone\n\nThen, continue the <draft_text> mimicking this exact style.\n\n<writing_samples>\n{samples}\n</writing_samples>\n\n<draft_text>\n{draft}\n</draft_text>`
    }
  ];

  return (
    <section id="projects" className="relative px-6 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-[var(--color-accent-cyan)] tracking-widest uppercase mb-3">02. Showcase</h2>
        <h3 className="text-3xl md:text-5xl font-bold">Prompt Showcase Matrix</h3>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div key={project.id} className="glass neon-border p-6 md:p-8 relative overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              
              {/* Left Content */}
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  {project.title}
                  <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-cyan)] transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </h4>
                <p className="text-[var(--color-text-secondary)] mb-6 text-base md:text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 md:mb-0">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[var(--color-dark-800)] border border-white/10 text-xs font-mono text-[var(--color-accent-cyan)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Action */}
              <div className="md:w-64 shrink-0">
                <button
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                  className="w-full flex items-center justify-between px-5 py-3 rounded-xl bg-[var(--color-dark-800)] hover:bg-[var(--color-dark-700)] border border-white/10 transition-colors text-sm font-medium"
                >
                  <span className="flex items-center gap-2 text-white">
                    <Code2 size={16} className="text-[var(--color-accent-purple)]" />
                    View Prompt Breakdown
                  </span>
                  <ChevronDown
                    size={16}
                    className={cn('transition-transform duration-300 text-[var(--color-text-muted)]', expandedId === project.id ? 'rotate-180' : '')}
                  />
                </button>
              </div>
            </div>

            {/* Expandable Code Block */}
            <div
              className={cn(
                'grid transition-all duration-300 ease-in-out',
                expandedId === project.id ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 sm:p-6 overflow-x-auto relative group/code">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent-cyan)] via-[var(--color-accent-purple)] to-transparent opacity-50" />
                  <pre className="font-mono text-sm leading-relaxed text-[#c9d1d9] whitespace-pre-wrap break-words">
                    <code>
                      {project.promptBreakdown.split('\n').map((line, i) => (
                        <div key={i} className="table-row">
                          <span className="table-cell text-[#484f58] select-none pr-4 text-right min-w-[2rem] text-xs pt-0.5">{i + 1}</span>
                          <span className="table-cell">{line.startsWith('//') ? <span className="text-[#8b949e]">{line}</span> : line.includes('<') ? <span className="text-[#7ee787]">{line}</span> : line}</span>
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
