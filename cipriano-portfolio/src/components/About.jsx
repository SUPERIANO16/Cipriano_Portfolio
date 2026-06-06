import { User, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto text-base sm:text-lg">
            Turning complex AI challenges into elegant prompt solutions
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-accent-purple)]/20 bg-[var(--color-accent-purple)]/5">
              <User size={14} className="text-[var(--color-accent-purple)]" />
              <span className="text-xs text-[var(--color-accent-purple)] font-mono">whoami</span>
            </div>

            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              I'm a <span className="text-[var(--color-text-primary)] font-medium">Prompt Engineer</span> and
              AI specialist with a deep passion for unlocking the full potential of large language models. My
              expertise spans across <span className="text-[var(--color-accent-cyan)]">GPT-4</span>,{' '}
              <span className="text-[var(--color-accent-purple)]">Claude</span>,{' '}
              <span className="text-[var(--color-accent-pink)]">Gemini</span>, and a range of open-source models.
            </p>

            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              I specialize in designing robust prompt architectures that are reliable, scalable, and production-ready.
              From chain-of-thought reasoning to multi-agent orchestration, I craft systems that consistently
              deliver exceptional results.
            </p>

            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              My approach combines deep technical understanding of transformer architectures with a creative
              intuition for language — treating every prompt as a precise interface between human intent and
              machine intelligence.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['GPT-4', 'Claude 3', 'Gemini Pro', 'LLaMA', 'Mistral', 'RAG'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 bg-white/5 text-[var(--color-text-muted)] hover:border-[var(--color-accent-cyan)]/30 hover:text-[var(--color-accent-cyan)] transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--color-accent-cyan)]/20 transition-all duration-500">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex items-center gap-1.5 ml-2">
                <Terminal size={12} className="text-[var(--color-text-muted)]" />
                <span className="text-xs text-[var(--color-text-muted)] font-mono">prompt_session.py</span>
              </div>
            </div>

            {/* Terminal body */}
            <div className="p-5 sm:p-6 font-mono text-sm leading-relaxed space-y-4">
              <div>
                <span className="text-[var(--color-accent-purple)]">system</span>
                <span className="text-[var(--color-text-muted)]"> = </span>
                <span className="text-[var(--color-accent-green)]">"You are a senior medical analyst..."</span>
              </div>

              <div>
                <span className="text-[var(--color-accent-cyan)]">{'>>> '}</span>
                <span className="text-[var(--color-text-primary)]">prompt.set_context(</span>
              </div>
              <div className="pl-4">
                <span className="text-[var(--color-accent-pink)]">role</span>
                <span className="text-[var(--color-text-muted)]">=</span>
                <span className="text-[var(--color-accent-green)]">"diagnostician"</span>
                <span className="text-[var(--color-text-muted)]">,</span>
              </div>
              <div className="pl-4">
                <span className="text-[var(--color-accent-pink)]">chain</span>
                <span className="text-[var(--color-text-muted)]">=</span>
                <span className="text-[var(--color-accent-green)]">"CoT"</span>
                <span className="text-[var(--color-text-muted)]">,</span>
              </div>
              <div className="pl-4">
                <span className="text-[var(--color-accent-pink)]">temperature</span>
                <span className="text-[var(--color-text-muted)]">=</span>
                <span className="text-[var(--color-accent-cyan)]">0.3</span>
              </div>
              <div>
                <span className="text-[var(--color-text-primary)]">)</span>
              </div>

              <div className="border-t border-white/5 pt-4">
                <span className="text-[var(--color-accent-green)]">✓ </span>
                <span className="text-[var(--color-text-muted)]">Context loaded &middot; </span>
                <span className="text-[var(--color-accent-cyan)]">Accuracy: 99.2%</span>
              </div>

              <div>
                <span className="text-[var(--color-accent-cyan)]">{'>>> '}</span>
                <span className="text-[var(--color-text-muted)] animate-[blink_1s_step-end_infinite] inline-block">▋</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
