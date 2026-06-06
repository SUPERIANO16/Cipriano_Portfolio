import { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  const inputClasses = "w-full bg-[var(--color-dark-900)] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)] focus:ring-1 focus:ring-[var(--color-accent-cyan)] transition-all duration-300";

  return (
    <section id="contact" className="relative px-6 max-w-7xl mx-auto w-full">
      <div className="glass p-8 md:p-12 lg:p-16 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent-cyan)]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
          
          {/* Left: Copy */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Initialize<br/><span className="gradient-text">Connection.</span></h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-10 max-w-md">
              Looking to optimize your AI pipelines or build agentic workflows? Send a transmission and let's engineer the future.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-mono text-[var(--color-text-muted)] uppercase mb-2">Location</p>
                <p className="text-white">San Francisco, CA (Remote available)</p>
              </div>
              <div>
                <p className="text-sm font-mono text-[var(--color-text-muted)] uppercase mb-2">Status</p>
                <div className="flex items-center gap-2 text-white">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent-green)] animate-pulse" />
                  Available for new contracts
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="System ID (Your Name)"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className={inputClasses}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Transmission Node (Your Email)"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className={inputClasses}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Payload (Project Details)"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className={cn(inputClasses, "resize-none")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-[var(--color-dark-950)] font-bold text-lg hover:bg-[var(--color-accent-cyan)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">Transmitting... <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"/></span>
                ) : isSuccess ? (
                  <span className="text-[var(--color-accent-green)] flex items-center gap-2">Payload Delivered! ✓</span>
                ) : (
                  <>
                    Execute Request
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
