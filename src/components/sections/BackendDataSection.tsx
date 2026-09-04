import React, { useState } from 'react';
import { VideoSlotConfig, PipelineNode } from '../../types';
import { pipelineNodes } from '../../data/portfolioData';
import { VideoBackground } from '../common/VideoBackground';
import { GlassCard } from '../common/GlassCard';
import { GlassButton } from '../common/GlassButton';
import {
  Database,
  Server,
  Layers,
  Sparkles,
  ArrowRight,
  Activity,
  CheckCircle2,
  Terminal,
  Cpu,
  Workflow,
  Zap,
} from 'lucide-react';

interface BackendDataSectionProps {
  config: VideoSlotConfig;
  videoOverride?: { url: string; opacity: number; blur: number };
}

export const BackendDataSection: React.FC<BackendDataSectionProps> = ({
  config,
  videoOverride,
}) => {
  const [activeNodeId, setActiveNodeId] = useState<string>('node-stream');
  const [activeSqlTab, setActiveSqlTab] = useState<'optimized' | 'unoptimized'>('optimized');

  const activeNode = pipelineNodes.find((n) => n.id === activeNodeId) || pipelineNodes[1];

  return (
    <section id="06-data" className="relative min-h-screen flex items-center justify-center py-24">
      <VideoBackground
        config={config}
        customVideoUrl={videoOverride?.url}
        customOpacity={videoOverride?.opacity}
        customBlur={videoOverride?.blur}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-20 relative z-10 space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/95 text-[10px] tracking-[0.4em] uppercase font-bold text-pink-600 shadow-[0_4px_16px_rgba(244,114,182,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>Slot 06 • Technical Core Engine</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900">
              Backend & Data{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-pink-500 to-rose-500 editorial-title-shadow font-normal">
                Architecture Lab
              </span>
            </h2>
            <p className="font-cormorant text-xl sm:text-2xl text-slate-600 italic font-light tracking-wide">
              High-throughput streaming, zero-drift transactional ledgers, and deep relational SQL optimization
            </p>
          </div>

          {/* 1. Interactive End-to-End Pipeline Visualization */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                <Workflow className="w-4 h-4 text-pink-500" />
                <span>Distributed Pipeline Ingestion & State Topology</span>
              </div>
              <span className="text-[11px] font-mono text-sky-600 hidden sm:inline-block font-semibold">
                Interactive: Click nodes to inspect stage telemetry
              </span>
            </div>

            {/* Horizontal Nodes Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {pipelineNodes.map((node) => {
                const isActive = node.id === activeNodeId;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden ${
                      isActive
                        ? 'bg-white/95 border-pink-400 shadow-[0_4px_20px_rgba(244,114,182,0.25)] text-slate-900'
                        : 'bg-white/70 border-white/90 hover:border-sky-300 hover:bg-white/90 text-slate-700 shadow-sm'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-400 to-sky-400" />
                    )}
                    <div className="text-[10px] font-mono text-pink-600 font-bold mb-1">
                      {node.step}
                    </div>
                    <div className="font-syne text-xs sm:text-sm font-bold text-slate-900 mb-2 truncate">
                      {node.title}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 truncate">
                      {node.tech}
                    </div>
                    <div className="mt-3 pt-2 border-t border-sky-100 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-emerald-700 font-semibold">{node.latency}</span>
                      <span className="text-slate-400">{node.throughput.split(' ')[0]}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Telemetry Focus Panel */}
            <GlassCard variant="surface" padding="lg" className="border-white/90 bg-white/80 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-pink-100 text-pink-700 border border-pink-300 font-semibold">
                      {activeNode.step}
                    </span>
                    <h3 className="font-syne text-xl sm:text-2xl font-bold text-slate-900">
                      {activeNode.title}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-sky-700 font-semibold">
                    Technology Stack: {activeNode.tech}
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                    {activeNode.description}
                  </p>
                </div>

                <div className="md:col-span-4 p-4 rounded-2xl bg-sky-50/70 border border-sky-200/60 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-600">Stage Latency:</span>
                    <span className="text-sm font-mono font-bold text-emerald-700">
                      {activeNode.latency}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-600">Stage Throughput:</span>
                    <span className="text-sm font-mono font-bold text-sky-600">
                      {activeNode.throughput}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-600">Failover Mode:</span>
                    <span className="text-xs font-mono text-purple-700 font-semibold">
                      Automatic Outbox / Retry
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* 2. SQL Query Forensics & Performance Tuning Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Execution Plan Forensics (7 cols) */}
            <GlassCard variant="surface" padding="lg" className="lg:col-span-7 flex flex-col justify-between border-white/90 bg-white/80 shadow-md">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-sky-100 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-600 shadow-sm">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-syne text-base font-bold text-slate-900">
                        SQL Server Query Plan Optimization
                      </h4>
                      <p className="text-xs text-slate-500 font-mono">
                        Real-world T-SQL tuning on 15M+ row transaction ledger
                      </p>
                    </div>
                  </div>

                  {/* Toggle: Optimized vs Unoptimized */}
                  <div className="flex p-1 rounded-xl bg-white/80 border border-sky-200/60 text-xs font-mono shadow-sm">
                    <button
                      onClick={() => setActiveSqlTab('optimized')}
                      className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                        activeSqlTab === 'optimized'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Covering Seek
                    </button>
                    <button
                      onClick={() => setActiveSqlTab('unoptimized')}
                      className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                        activeSqlTab === 'unoptimized'
                          ? 'bg-rose-100 text-rose-800 border border-rose-300 font-semibold'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Table Scan
                    </button>
                  </div>
                </div>

                {/* Code Window - Light Glass */}
                <div className="rounded-xl bg-sky-50/80 border border-sky-200/80 p-4 font-mono text-xs overflow-x-auto space-y-2 text-slate-800">
                  <div className="text-slate-500 flex items-center justify-between border-b border-sky-200/60 pb-2">
                    <span>-- Transact-SQL Query Forensics</span>
                    <span className={activeSqlTab === 'optimized' ? 'text-emerald-700 font-bold' : 'text-rose-600 font-bold'}>
                      {activeSqlTab === 'optimized' ? 'Cost: 6% • 2.1ms' : 'Cost: 94% • 184ms'}
                    </span>
                  </div>

                  {activeSqlTab === 'optimized' ? (
                    <div className="text-slate-800 leading-relaxed space-y-1">
                      <p className="text-slate-500">-- Non-clustered covering index with INCLUDE clause</p>
                      <p className="text-pink-600 font-bold">CREATE NONCLUSTERED INDEX <span className="text-sky-700 font-semibold">IX_Ledger_Acct_Timestamp</span></p>
                      <p className="text-pink-600 font-bold pl-4">ON <span className="text-slate-800 font-normal">FinancialLedger (AccountId, TransactedUtc DESC)</span></p>
                      <p className="text-pink-600 font-bold pl-4">INCLUDE <span className="text-slate-800 font-normal">(Amount, BalanceAfter, CurrencyCode)</span></p>
                      <p className="text-pink-600 font-bold pl-4">WHERE <span className="text-slate-800 font-normal">IsReconciled = 1;</span></p>
                      <p className="text-emerald-700 font-semibold pt-2">-- Result: Index Seek + 0 Key Lookups + 0 Memory Spills</p>
                    </div>
                  ) : (
                    <div className="text-slate-800 leading-relaxed space-y-1">
                      <p className="text-slate-500">-- Problematic query causing table scan & implicit conversion</p>
                      <p className="text-pink-600 font-bold">SELECT <span className="text-slate-800 font-normal">AccountId, Amount, BalanceAfter</span></p>
                      <p className="text-pink-600 font-bold pl-4">FROM <span className="text-slate-800 font-normal">FinancialLedger</span></p>
                      <p className="text-pink-600 font-bold pl-4">WHERE <span className="text-rose-600 font-bold bg-rose-50 px-1 rounded border border-rose-200">CONVERT(VARCHAR, TransactedUtc, 101)</span> = '09/04/2026'</p>
                      <p className="text-pink-600 font-bold pl-4">AND <span className="text-rose-600 font-bold bg-rose-50 px-1 rounded border border-rose-200">AccountId = @VarcharParam</span>; <span className="text-rose-600 font-medium">-- Type Mismatch</span></p>
                      <p className="text-rose-600 font-semibold pt-2">-- Bottleneck: 15,200,000 Clustered Index Scan + High I/O</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Comparison Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-sky-100 mt-4 text-center font-mono">
                <div className="p-3 rounded-xl bg-white/80 border border-sky-200/50">
                  <div className="text-[10px] text-slate-500 uppercase">Execution Time</div>
                  <div className={`text-base font-bold ${activeSqlTab === 'optimized' ? 'text-emerald-700' : 'text-rose-600'}`}>
                    {activeSqlTab === 'optimized' ? '2.1 ms' : '184.6 ms'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/80 border border-sky-200/50">
                  <div className="text-[10px] text-slate-500 uppercase">Logical Reads</div>
                  <div className={`text-base font-bold ${activeSqlTab === 'optimized' ? 'text-emerald-700' : 'text-rose-600'}`}>
                    {activeSqlTab === 'optimized' ? '12 pages' : '142,500 pages'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/80 border border-sky-200/50">
                  <div className="text-[10px] text-slate-500 uppercase">Subtree Cost</div>
                  <div className={`text-base font-bold ${activeSqlTab === 'optimized' ? 'text-emerald-700' : 'text-rose-600'}`}>
                    {activeSqlTab === 'optimized' ? '0.0032' : '48.19'}
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Right: Architectural Rules & Clean Architecture (5 cols) */}
            <GlassCard variant="surface" padding="lg" className="lg:col-span-5 flex flex-col justify-between border-white/90 bg-white/80 shadow-md">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 pb-4 border-b border-sky-100">
                  <div className="w-8 h-8 rounded-xl bg-pink-100 border border-pink-300 flex items-center justify-center text-pink-600 shadow-sm">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-syne text-base font-bold text-slate-900">
                      .NET 9 Clean Architecture & CQRS
                    </h4>
                    <p className="text-xs text-slate-500 font-mono">Structural Rules of Engagement</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/80 border border-sky-200/50 space-y-1">
                    <div className="font-bold text-pink-600 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" /> Domain-Driven Core
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Zero third-party dependencies in the Domain layer. Pure business rules, entities, and immutable value objects.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/80 border border-sky-200/50 space-y-1">
                    <div className="font-bold text-sky-600 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> CQRS Segregation
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Commands mutate state via transactional aggregates; Queries read directly from read models / Dapper for maximum throughput.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/80 border border-sky-200/50 space-y-1">
                    <div className="font-bold text-purple-600 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Outbox Guarantees
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Database mutations and domain event publishings commit inside the same SQL transaction to prevent distributed ghost messages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quote / Tech note */}
              <div className="mt-6 pt-4 border-t border-sky-100 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Architecture Style: Hexagonal / Onion</span>
                <span className="text-pink-600 font-bold">Sub-10ms Targets</span>
              </div>
            </GlassCard>

          </div>

        </div>
      </VideoBackground>
    </section>
  );
};
