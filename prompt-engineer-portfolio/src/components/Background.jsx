import { useEffect, useState } from 'react';

export default function Background() {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    // Generate random meteors
    const generateMeteors = () => {
      const newMeteors = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: Math.floor(Math.random() * 100) + 'vw',
        top: Math.floor(Math.random() * 100) + 'vh',
        animationDuration: Math.floor(Math.random() * (8 - 3 + 1) + 3) + 's',
        animationDelay: Math.floor(Math.random() * (5 - 0 + 1) + 0) + 's',
      }));
      setMeteors(newMeteors);
    };

    generateMeteors();
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[var(--color-dark-950)]">
      {/* Deep space radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-dark-800)_0%,_var(--color-dark-950)_70%)]" />
      
      {/* Meteors */}
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute h-0.5 w-0.5 rounded-[9999px] bg-[var(--color-accent-cyan)] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] animate-[meteor_linear_infinite]"
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDuration: meteor.animationDuration,
            animationDelay: meteor.animationDelay,
          }}
        >
          {/* Meteor Tail */}
          <div className="absolute top-1/2 -translate-y-1/2 w-[50px] h-[1px] bg-gradient-to-r from-[var(--color-accent-cyan)] to-transparent" />
        </span>
      ))}
      
      {/* Subtle ambient glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-accent-purple)]/5 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-accent-cyan)]/5 blur-[120px]" />
    </div>
  );
}
