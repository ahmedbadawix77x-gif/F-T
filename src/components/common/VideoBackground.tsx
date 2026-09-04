import React, { useEffect, useRef, useState } from 'react';
import { VideoSlotConfig } from '../../types';

interface VideoBackgroundProps {
  config: VideoSlotConfig;
  customVideoUrl?: string | null;
  customOpacity?: number;
  customBlur?: number;
  showSimulatedAtmosphere?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  config,
  customVideoUrl,
  customOpacity,
  customBlur,
  showSimulatedAtmosphere = true,
  className = '',
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Determine active video source (prop override, config value, or null)
  const activeVideoSrc = customVideoUrl !== undefined ? customVideoUrl : config.videoSrc;
  const opacity = customOpacity !== undefined ? customOpacity : config.defaultOpacity;
  const blur = customBlur !== undefined ? customBlur : config.defaultBlur;

  // IntersectionObserver for performance and lazy-play/pause
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(() => {
                // Autoplay policy fallback
              });
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        rootMargin: '100px 0px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      data-video-slot={config.id}
    >
      {/* 1. Base Video / Atmospheric Canvas Layer (Strictly behind content, z-0) */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          opacity: opacity,
          filter: blur > 0 ? `blur(${blur}px)` : undefined,
          transition: 'opacity 0.7s ease, filter 0.5s ease',
        }}
      >
        {/* Real Video Element (when src is provided) */}
        {activeVideoSrc && isInView && !videoError ? (
          <video
            ref={videoRef}
            src={activeVideoSrc}
            poster={config.posterSrc || undefined}
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => {
              setVideoError(true);
              setVideoLoaded(false);
            }}
          />
        ) : null}

        {/* Cinematic Atmospheric Fallback Layer (Active when video is awaiting file or loading) */}
        {showSimulatedAtmosphere && (
          <div className="absolute inset-0 w-full h-full">
            {/* Deep Cosmic & Editorial Soft Radiance Base */}
            <div className={`absolute inset-0 bg-gradient-to-b ${config.themeGradient.from} ${config.themeGradient.via} ${config.themeGradient.to}`} />

            {/* Editorial Aesthetic Soft Pastel Orbs & Ambient Glow */}
            <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-pink-300/40 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
            <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-sky-200/50 blur-[150px] rounded-full pointer-events-none animate-pulse-glow" style={{ animationDelay: '4s' }} />

            {/* Glowing Ethereal Nebulas: Barbie Pink & Baby Sky Blue */}
            <div
              className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full blur-[90px] opacity-40 mix-blend-multiply pointer-events-none animate-pulse-glow"
              style={{
                background: `radial-gradient(circle, #f472b6 0%, #ec4899 35%, transparent 70%)`,
                animationDuration: '14s',
              }}
            />

            <div
              className="absolute top-[30%] -right-[15%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full blur-[100px] opacity-35 mix-blend-multiply pointer-events-none animate-pulse-glow"
              style={{
                background: `radial-gradient(circle, #7dd3fc 0%, #38bdf8 40%, transparent 70%)`,
                animationDelay: '3s',
                animationDuration: '16s',
              }}
            />

            {/* Editorial Dot Matrix Overlay (40px) */}
            <div
              className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none editorial-dot-grid"
            />

            {/* Subtle moving light streak */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-60 pointer-events-none" />
          </div>
        )}
      </div>

      {/* 2. Atmospheric Gradient Overlays (Blends sections smoothly with luminous white/sky) */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-b from-white/40 via-transparent to-white/50" />
      <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(255,255,255,0.4)_100%)]" />

      {/* 3. Section Content Layer (Foreground, z-10) */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};
