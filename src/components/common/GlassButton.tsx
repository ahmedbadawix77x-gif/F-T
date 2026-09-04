import React from 'react';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  children,
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5 rounded-full min-h-[38px]',
    md: 'text-sm px-6 py-3 gap-2 rounded-full min-h-[44px]',
    lg: 'text-base px-8 py-4 gap-2.5 rounded-full min-h-[50px]',
  }[size];

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-pink-500 via-pink-400 to-sky-400 text-white border border-white/70 shadow-[0_4px_20px_rgba(244,114,182,0.35),inset_0_1px_2px_rgba(255,255,255,0.9)] hover:shadow-[0_6px_28px_rgba(244,114,182,0.5),0_0_20px_rgba(56,189,248,0.35)] hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-white/70 text-slate-800 border border-white/90 backdrop-blur-md shadow-[0_4px_16px_rgba(56,189,248,0.12),inset_0_1px_1px_rgba(255,255,255,1)] hover:bg-white/90 hover:text-sky-700 hover:border-pink-300 active:scale-[0.98]',
    accent:
      'bg-gradient-to-r from-sky-400 via-sky-500 to-pink-400 text-white border border-white/70 shadow-[0_4px_20px_rgba(56,189,248,0.35),inset_0_1px_2px_rgba(255,255,255,0.9)] hover:shadow-[0_6px_28px_rgba(56,189,248,0.5)] hover:scale-[1.02] active:scale-[0.98]',
    ghost:
      'bg-transparent text-slate-700 border border-transparent hover:bg-white/60 hover:text-pink-600 hover:border-white/80',
  }[variant];

  return (
    <button
      className={`inline-flex items-center justify-center font-medium transition-all duration-300 backdrop-blur-xl relative overflow-hidden group cursor-pointer ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {/* Light sweep animation on hover */}
      <div
        className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"
        aria-hidden="true"
      />

      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:scale-110">{icon}</span>}
      <span className="whitespace-nowrap tracking-wide">{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
};
