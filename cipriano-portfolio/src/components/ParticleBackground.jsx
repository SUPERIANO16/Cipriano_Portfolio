import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 30;

const COLORS = [
  'rgba(0, 255, 255, 0.4)',   // accent-cyan
  'rgba(168, 85, 247, 0.4)',  // accent-purple
  'rgba(236, 72, 153, 0.35)', // accent-pink
];

function createParticle(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 1 + Math.random() * 1.5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    opacity: 0.2 + Math.random() * 0.4,
    pulseSpeed: 0.005 + Math.random() * 0.01,
    pulsePhase: Math.random() * Math.PI * 2,
  };
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    // Initialize particles
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(canvas.width, canvas.height)
    );

    let frame = 0;

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particlesRef.current) {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Pulsing opacity
        const pulse = Math.sin(frame * p.pulseSpeed + p.pulsePhase) * 0.3 + 0.7;
        const finalOpacity = p.opacity * pulse;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${finalOpacity})`);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
