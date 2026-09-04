import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'interactive' | 'subtle' | 'floating';
  glow?: 'pink' | 'blue' | 'none';
  hasReflection?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  variant = 'surface',
  glow = 'none',
  hasReflection = true,
  padding = 'md',
  className = '',
  children,
  id,
  ...props
}) => {
  const variantStyles = {
    surface: 'glass-surface',
    interactive: 'glass-card-interactive cursor-pointer',
    subtle: 'glass-surface-subtle',
    floating: 'glass-surface shadow-[0_25px_60px_-15px_rgba(56,189,248,0.22),0_0_35px_rgba(244,114,182,0.2)]',
  }[variant];

  const glowStyles = {
    none: '',
    pink: 'shadow-[0_0_30px_rgba(244,114,182,0.35)] border-pink-300/70',
    blue: 'shadow-[0_0_30px_rgba(56,189,248,0.35)] border-sky-300/70',
  }[glow];

  const paddingStyles = {
    none: '',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-7',
    lg: 'p-8 sm:p-10',
    xl: 'p-10 sm:p-12',
  }[padding];

  return (
    <div
      id={id}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${variantStyles} ${glowStyles} ${paddingStyles} ${className}`}
      {...props}
    >
      {/* Pristine Glass Sheen & Corner Highlight */}
      {hasReflection && (
        <>
          <div
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
