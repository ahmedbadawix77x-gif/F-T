import React, { useState } from 'react';
import { VideoSlotConfig } from '../../types';
import { videoSlotsData } from '../../data/portfolioData';
import { Film, Sliders, X, CheckCircle2, AlertCircle, Eye, Sparkles, ChevronRight } from 'lucide-react';
import { GlassButton } from './GlassButton';

interface VideoArchitectureDrawerProps {
  videoOverrides: Record<string, { url: string; opacity: number; blur: number }>;
  onUpdateOverride: (slotId: string, values: { url?: string; opacity?: number; blur?: number }) => void;
  onResetSlot: (slotId: string) => void;
}

export const VideoArchitectureDrawer: React.FC<VideoArchitectureDrawerProps> = ({
  videoOverrides,
  onUpdateOverride,
  onResetSlot,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlotId, setSelectedSlotId] = useState<string>('01-intro');

  const slots = Object.values(videoSlotsData);
  const activeSlot = videoSlotsData[selectedSlotId] || slots[0];
  const activeOverride = videoOverrides[selectedSlotId] || {
    url: '',
    opacity: activeSlot.defaultOpacity,
    blur: activeSlot.defaultBlur,
  };

  return (
    <>
      {/* Floating Trigger Dock */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/90 border border-pink-200 text-xs font-semibold text-slate-800 shadow-[0_8px_30px_rgba(244,114,182,0.3)] hover:border-pink-400 hover:scale-105 transition-all cursor-pointer backdrop-blur-xl"
          title="Inspect Video Architecture & Background Layers"
          aria-label="Open Video Architecture Inspector"
        >
          <div className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
          <Film className="w-4 h-4 text-pink-500 group-hover:rotate-12 transition-transform" />
          <span className="tracking-wide">Video Architecture (01–07)</span>
        </button>
      </div>

      {/* Slide-in Glass Drawer Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-sky-950/20 backdrop-blur-md p-4 sm:p-6 transition-all duration-300">
          <div
            className="w-full max-w-xl h-full max-h-[92vh] bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/95 shadow-[0_25px_60px_rgba(56,189,248,0.2),0_0_50px_rgba(244,114,182,0.2)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-10 duration-300"
            role="dialog"
            aria-modal="true"
            aria-label="Video Layer Architecture"
          >
            {/* Header */}
            <div className="p-6 border-b border-sky-100 flex items-center justify-between bg-white/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pink-100 border border-pink-300 flex items-center justify-center text-pink-600 shadow-sm">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-syne text-lg font-bold tracking-tight text-slate-900 flex items-center gap-2">
                    Video Architecture Engine
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 border border-pink-300 font-semibold">
                      7 Slots
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Background video container specifications & live simulation layer
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-pink-50 hover:bg-pink-100 border border-pink-200 flex items-center justify-center text-slate-600 hover:text-pink-600 transition-colors cursor-pointer shadow-sm"
                aria-label="Close drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Architecture Blueprint Note */}
              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/60 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-pink-600">
                  <Sparkles className="w-4 h-4" />
                  <span>Cinematic Video Blueprint Notice</span>
                </div>
                <p className="leading-relaxed">
                  Per creative direction, all 7 sections feature independent background video containers ready to receive their respective MP4 assets (e.g., <code className="text-pink-600 font-mono font-semibold">01-intro.mp4</code> through <code className="text-sky-600 font-mono font-semibold">07-contact.mp4</code>). In the meantime, an atmospheric animated gradient canvas serves as the luminous backdrop.
                </p>
              </div>

              {/* Slot Selector Tabs */}
              <div>
                <label className="text-xs font-semibold text-slate-700 tracking-wider uppercase block mb-3">
                  Select Video Section Container
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {slots.map((slot) => {
                    const isSelected = slot.id === selectedSlotId;
                    const hasCustomUrl = Boolean(videoOverrides[slot.id]?.url);
                    return (
                      <button
                        key={slot.id}
                        onClick={() => setSelectedSlotId(slot.id)}
                        className={`p-2.5 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                          isSelected
                            ? 'bg-pink-100/90 border-pink-400 shadow-sm text-slate-900 font-bold'
                            : 'bg-white/80 border-sky-200/60 text-slate-600 hover:text-slate-900 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-[11px] font-bold text-pink-600">
                            Slot {slot.slotNumber}
                          </span>
                          {hasCustomUrl ? (
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          )}
                        </div>
                        <div className="font-medium truncate">{slot.name}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Slot Configuration Card */}
              <div className="p-5 rounded-2xl bg-white/90 border border-sky-200/70 space-y-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-pink-600 uppercase tracking-wider block font-semibold">
                      Target File
                    </span>
                    <h4 className="text-base font-bold font-mono text-slate-900">
                      {activeSlot.targetFilename}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-sky-100 text-sky-700 border border-sky-300 flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    Container Ready
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="text-slate-500 uppercase tracking-wider font-semibold text-[10px]">
                    Future AI Video Vision:
                  </div>
                  <p className="text-slate-700 italic leading-relaxed">
                    "{activeSlot.futureVision}"
                  </p>
                </div>

                {/* Live Controls: Video URL Test, Opacity, Blur */}
                <div className="pt-3 border-t border-sky-100 space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5 flex items-center justify-between">
                      <span>Test Video Stream / File URL</span>
                      <span className="text-[10px] text-slate-400 font-mono">MP4, WebM</span>
                    </label>
                    <input
                      type="url"
                      placeholder="e.g. https://.../sample.mp4 or /videos/01-intro.mp4"
                      value={activeOverride.url || ''}
                      onChange={(e) =>
                        onUpdateOverride(selectedSlotId, { url: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-white/90 border border-sky-200/70 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-pink-400 transition-colors font-mono shadow-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Opacity Slider */}
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                        <span>Layer Opacity</span>
                        <span className="font-mono text-pink-600 font-bold">
                          {Math.round(activeOverride.opacity * 100)}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0.2"
                        max="1"
                        step="0.05"
                        value={activeOverride.opacity}
                        onChange={(e) =>
                          onUpdateOverride(selectedSlotId, {
                            opacity: parseFloat(e.target.value),
                          })
                        }
                        className="w-full accent-pink-500 cursor-pointer"
                      />
                    </div>

                    {/* Blur Slider */}
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                        <span>Backdrop Blur</span>
                        <span className="font-mono text-sky-600 font-bold">
                          {activeOverride.blur}px
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="16"
                        step="1"
                        value={activeOverride.blur}
                        onChange={(e) =>
                          onUpdateOverride(selectedSlotId, {
                            blur: parseInt(e.target.value, 10),
                          })
                        }
                        className="w-full accent-sky-500 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => onResetSlot(selectedSlotId)}
                      className="text-xs text-slate-500 hover:text-slate-900 underline cursor-pointer"
                    >
                      Reset Slot Defaults
                    </button>
                    <a
                      href={`#${activeSlot.id}`}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-1.5 text-xs text-pink-600 hover:text-pink-700 font-bold"
                    >
                      Scroll to Section <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Technical Video Constraints Checklist */}
              <div className="space-y-2.5">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Container Specifications Standard
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-700">
                  <li className="p-2.5 rounded-xl bg-white/80 border border-sky-200/50 flex items-center gap-2 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                    <span>Autoplay + Muted + Loop</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white/80 border border-sky-200/50 flex items-center gap-2 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>playsInline (iOS/Mobile)</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white/80 border border-sky-200/50 flex items-center gap-2 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                    <span>object-fit: cover</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white/80 border border-sky-200/50 flex items-center gap-2 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>IntersectionObserver Lazy Pause</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-sky-100 bg-white/60 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Layer z-index: background: z-0 | overlays: z-1 | UI: z-10
              </span>
              <GlassButton
                variant="secondary"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                Close Inspector
              </GlassButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
