import { useState, useEffect } from 'react';
import { Menu, X, TerminalSquare } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // active section useEffect goes here



  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '/resume.pdf' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12',
        scrolled ? 'py-4 backdrop-blur-md bg-[var(--color-dark-950)]/70 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent-cyan)]/20 to-[var(--color-accent-purple)]/20 flex items-center justify-center border border-[var(--color-accent-cyan)]/30 group-hover:border-[var(--color-accent-cyan)] transition-colors">
            <TerminalSquare size={20} className="text-[var(--color-accent-cyan)]" />
          </div>
          <span className="font-mono text-lg font-bold tracking-tight text-[var(--color-text-primary)]">
            <span className="text-[var(--color-accent-cyan)]">&gt;_</span> Jaedrian Terrence Cipriano
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.5)] font-medium text-sm transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[var(--color-dark-800)] border border-white/10 hover:border-[var(--color-accent-cyan)]/50 text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]"
          >
            Hire Me
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-white/10"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[var(--color-text-secondary)] hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/5 p-6 flex flex-col gap-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] font-medium text-lg py-2 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-white/10"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      )}
    </nav>
  );
}
