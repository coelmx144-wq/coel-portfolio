'use client';

import { useState } from "react";
import ResumeModal from "./ResumeModal";
import { ArrowRight, FileText, Cpu, CheckCircle2, ShieldCheck, Activity, Terminal } from "lucide-react";

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top announcement pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--border-accent)] bg-[var(--badge-bg)] text-[var(--badge-text)] mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <Terminal className="w-3.5 h-3.5" />
          <span>Transitioning Real-World Diagnostics into Digital Operations</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]">
            AI-Assisted Technical Operations &{" "}
            <span className="gradient-text">Digital Solutions Specialist</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl pt-2">
            Hi, I’m <strong className="text-[var(--text-primary)] font-semibold">Coel</strong>. I bridge approximately{" "}
            <strong className="text-[var(--text-primary)] font-semibold">5,000 hours of commercial electrical troubleshooting</strong>{" "}
            with modern AI-assisted software development, cloud deployment workflows, and digital operations.
          </p>

          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl">
            Based in Alaska and available for 100% remote roles worldwide. I specialize in applying rigorous root-cause diagnostic discipline to AI operations, technical customer support, web implementation, and cross-platform problem solving.
          </p>
        </div>

        {/* Action CTAs: High-prominence Resume & Contact */}
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-8">
          <button
            onClick={() => setResumeOpen(true)}
            type="button"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-white" />
            Resume & Credentials
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-indigo-500/40 hover:border-indigo-500 bg-[var(--bg-card)] hover:bg-[var(--bg-muted)] text-[var(--text-primary)] font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-sm"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4 text-indigo-400" />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            Explore Case Studies ↓
          </a>
        </div>

        {/* Recruiter Metrics / Signal Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-[var(--border-color)]">
          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              5,000+ <span className="text-indigo-400 text-base">Hrs</span>
            </div>
            <div className="text-xs text-[var(--text-muted)] font-medium mt-1">
              Field Diagnostics & Electrical Apprenticeship
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              Live SaaS
            </div>
            <div className="text-xs text-[var(--text-muted)] font-medium mt-1">
              Optimized Organization (Next.js 16 + Postgres)
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              AI-Orchestrated
            </div>
            <div className="text-xs text-[var(--text-muted)] font-medium mt-1">
              Spec-Driven Agent Steering & Deep QA
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              Global Ops
            </div>
            <div className="text-xs text-[var(--text-muted)] font-medium mt-1">
              International Manufacturing & Customer Support
            </div>
          </div>
        </div>

      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
