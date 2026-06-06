import { Code, Share2, MessageCircle, TerminalSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[var(--color-dark-950)]/80 backdrop-blur-md mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <TerminalSquare size={20} className="text-[var(--color-accent-cyan)]" />
          <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">
            prompt.engineer <span className="text-[var(--color-text-muted)] ml-2">© {currentYear}</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-cyan)] transition-colors" aria-label="GitHub">
            <Code size={20} />
          </a>
          <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-purple)] transition-colors" aria-label="LinkedIn">
            <Share2 size={20} />
          </a>
          <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-pink)] transition-colors" aria-label="Twitter">
            <MessageCircle size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
