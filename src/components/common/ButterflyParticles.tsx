import React, { useEffect, useRef } from 'react';

interface ButterflyParticlesProps {
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  alpha: number;
  color: string;
  wingAngle: number;
  wingSpeed: number;
  hue: number;
  trail: { x: number; y: number; alpha: number }[];
}

export const ButterflyParticles: React.FC<ButterflyParticlesProps> = ({
  density = 'medium',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const count = isMobile
      ? density === 'high' ? 8 : density === 'medium' ? 5 : 3
      : density === 'high' ? 18 : density === 'medium' ? 10 : 6;

    const colors = [
      'rgba(255, 105, 180, ', // Barbie pink
      'rgba(244, 114, 182, ', // Soft pink
      'rgba(125, 211, 252, ', // Baby blue
      'rgba(232, 121, 249, ', // Lavender
      'rgba(255, 255, 255, ', // Pure white
    ];

    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7 - 0.2, // slight upward drift
        size: Math.random() * 5 + 4,
        baseSize: Math.random() * 5 + 4,
        alpha: Math.random() * 0.6 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        wingAngle: Math.random() * Math.PI,
        wingSpeed: Math.random() * 0.08 + 0.04,
        hue: Math.random() * 40 + 320,
        trail: [],
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let hasMouse = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      hasMouse = true;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Butterfly wing flapping
        p.wingAngle += p.wingSpeed;
        const wingSpan = Math.sin(p.wingAngle);

        // Soft steering
        p.x += p.vx + Math.sin(p.wingAngle * 0.5) * 0.5;
        p.y += p.vy + Math.cos(p.wingAngle * 0.5) * 0.3;

        // Mouse gentle nudge if close
        if (hasMouse) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            p.x -= (dx / dist) * 0.8;
            p.y -= (dy / dist) * 0.8;
          }
        }

        // Wrap edges smoothly
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;
        if (p.y < -30) p.y = height + 30;
        if (p.y > height + 30) p.y = -30;

        // Trail point
        if (Math.random() > 0.4) {
          p.trail.unshift({ x: p.x, y: p.y, alpha: 0.5 });
          if (p.trail.length > 8) p.trail.pop();
        }

        // Render light trail
        p.trail.forEach((t) => {
          t.alpha *= 0.88;
          ctx.beginPath();
          ctx.arc(t.x, t.y, p.size * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${t.alpha * 0.6})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#ff69b4';
          ctx.fill();
        });

        // Render butterfly silhouette with glowing wings
        ctx.save();
        ctx.translate(p.x, p.y);
        const heading = Math.atan2(p.vy, p.vx) + Math.PI / 2;
        ctx.rotate(heading * 0.4);

        // Subtle glow aura
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#ff85c1';

        // Wings: Left & Right translucent teardrop shapes
        const wingW = p.size * (0.8 + 0.5 * Math.abs(wingSpan));
        const wingH = p.size * 1.5;

        // Left Wing
        ctx.beginPath();
        ctx.ellipse(-wingW * 0.5, 0, wingW, wingH * 0.6, Math.PI / 6, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha * 0.65})`;
        ctx.fill();

        // Right Wing
        ctx.beginPath();
        ctx.ellipse(wingW * 0.5, 0, wingW, wingH * 0.6, -Math.PI / 6, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha * 0.65})`;
        ctx.fill();

        // Butterfly body core
        ctx.beginPath();
        ctx.ellipse(0, 0, 1.2, p.size * 0.8, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-20 opacity-80 ${className}`}
      aria-hidden="true"
    />
  );
};
