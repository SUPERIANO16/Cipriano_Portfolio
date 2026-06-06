import { useState } from 'react';
import { Play, Sparkles, AlertCircle, Wand2, Terminal } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Playground() {
  const [profile, setProfile] = useState('creative');
  const [input, setInput] = useState('Explain black holes.');
  const [isProcessing, setIsProcessing] = useState(false);
  const [output, setOutput] = useState('');

  const profiles = {
    creative: {
      name: 'Creative Storyteller',
      icon: Sparkles,
      color: 'pink',
      system: 'You are an award-winning sci-fi author. Use vivid imagery, metaphors, and sensory details.',
      mockOutput: 'A black hole is the universe’s ultimate paradox—a place where gravity’s grip becomes so fiercely absolute that space itself collapses into a point of infinite density. Imagine a celestial whirlpool, dark and silent, swallowing stars whole...'
    },
    rigorous: {
      name: 'Rigorous Physicist',
      icon: AlertCircle,
      color: 'cyan',
      system: 'You are a theoretical physicist. Explain concepts strictly using established scientific theories and formal terminology.',
      mockOutput: 'A black hole is a region of spacetime exhibiting gravitational acceleration so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The boundary of no escape is called the event horizon...'
    },
    json: {
      name: 'Raw JSON Architect',
      icon: Terminal,
      color: 'purple',
      system: 'Output strictly in JSON format. Provide a structured, hierarchical breakdown of the concept.',
      mockOutput: `{\n  "concept": "Black Hole",\n  "definition": "A region of spacetime with extremely strong gravity.",\n  "components": [\n    "Singularity",\n    "Event Horizon",\n    "Accretion Disk"\n  ]\n}`
    }
  };

  const handleRun = () => {
    if (!input.trim()) return;
    setIsProcessing(true);
    setOutput('');
    
    // Simulate API delay
    setTimeout(() => {
      setOutput(profiles[profile].mockOutput);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <section id="playground" className="relative px-6 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-[var(--color-accent-pink)] tracking-widest uppercase mb-3">03. Interactive Sandbox</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-4">Prompt Playground</h3>
        <p className="text-[var(--color-text-secondary)] max-w-2xl text-lg">
          Experience the power of meta-prompting. Select an LLM profile and see how the underlying system instructions radically shape the output structure and tone.
        </p>
      </div>

      <div className="glass neon-border p-1">
        <div className="grid lg:grid-cols-2 gap-[1px] bg-white/10 rounded-[15px] overflow-hidden">
          
          {/* Left Panel: Input & Controls */}
          <div className="bg-[var(--color-dark-900)] p-6 md:p-8 flex flex-col gap-8">
            
            {/* Profile Selector */}
            <div>
              <label className="block text-sm font-mono text-[var(--color-text-muted)] mb-3">1. Select Persona Profile</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.entries(profiles).map(([key, p]) => {
                  const Icon = p.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setProfile(key)}
                      className={cn(
                        'flex flex-col items-center text-center gap-2 p-3 rounded-xl border transition-all duration-300',
                        profile === key 
                          ? `border-[var(--color-accent-${p.color})] bg-[var(--color-accent-${p.color})]/10 text-white` 
                          : 'border-white/10 text-[var(--color-text-muted)] hover:border-white/20 hover:text-[var(--color-text-secondary)] bg-[var(--color-dark-800)]'
                      )}
                    >
                      <Icon size={20} className={profile === key ? `text-[var(--color-accent-${p.color})]` : ''} />
                      <span className="text-xs font-medium">{p.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* System Prompt View (Read only) */}
            <div>
              <label className="block text-sm font-mono text-[var(--color-text-muted)] mb-2 flex items-center justify-between">
                <span>Active System Instructions</span>
                <span className="text-xs bg-[var(--color-dark-800)] px-2 py-0.5 rounded text-[var(--color-accent-cyan)]">Injected</span>
              </label>
              <div className="bg-[var(--color-dark-950)] border border-white/5 rounded-xl p-4 font-mono text-xs text-[#7ee787] min-h-[60px] flex items-center">
                {profiles[profile].system}
              </div>
            </div>

            {/* User Input */}
            <div className="flex-1 flex flex-col">
              <label className="block text-sm font-mono text-[var(--color-text-muted)] mb-2">2. User Input</label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a prompt..."
                className="w-full flex-1 min-h-[120px] bg-[var(--color-dark-800)] border border-white/10 rounded-xl p-4 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-purple)]/50 focus:ring-1 focus:ring-[var(--color-accent-purple)]/50 resize-none transition-all"
              />
            </div>

            {/* Run Button */}
            <button
              onClick={handleRun}
              disabled={isProcessing || !input.trim()}
              className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-pink)] text-white font-semibold shadow-lg shadow-[var(--color-accent-purple)]/20 hover:shadow-[var(--color-accent-purple)]/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
            >
              {isProcessing ? (
                <Wand2 size={18} className="animate-spin" />
              ) : (
                <Play size={18} className="fill-current group-hover:scale-110 transition-transform" />
              )}
              {isProcessing ? 'Generating...' : 'Run Prompt Sequence'}
            </button>
          </div>

          {/* Right Panel: Output */}
          <div className="bg-[var(--color-dark-950)] p-6 md:p-8 flex flex-col border-l border-white/5 relative">
            <label className="block text-sm font-mono text-[var(--color-text-muted)] mb-4">Output Window</label>
            
            <div className="flex-1 bg-[var(--color-dark-900)] border border-white/5 rounded-xl p-6 relative overflow-hidden group">
              {/* Output Content */}
              {isProcessing ? (
                <div className="h-full flex flex-col items-center justify-center text-[var(--color-text-muted)] gap-4">
                  <div className="w-8 h-8 border-2 border-[var(--color-accent-cyan)]/30 border-t-[var(--color-accent-cyan)] rounded-full animate-spin" />
                  <span className="font-mono text-sm animate-pulse">Processing tokens...</span>
                </div>
              ) : output ? (
                <div className="h-full overflow-y-auto">
                  {profile === 'json' ? (
                    <pre className="font-mono text-sm text-[#c9d1d9] whitespace-pre-wrap">{output}</pre>
                  ) : (
                    <p className="text-[var(--color-text-primary)] leading-relaxed">{output}</p>
                  )}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-[var(--color-text-muted)] font-mono text-sm">
                  &gt; Waiting for execution...
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
