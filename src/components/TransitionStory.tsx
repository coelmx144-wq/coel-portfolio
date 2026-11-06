"use client";

import { ShieldCheck, Compass, ArrowRightCircle, Sparkles, Check, Zap, PhoneCall } from "lucide-react";

export default function TransitionStory() {
  return (
    <section id="about" className="py-20 border-t border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: The Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
              <Compass className="w-3.5 h-3.5" />
              Career Transition & Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              From High-Voltage Diagnostics to{" "}
              <span className="gradient-text">High-Uptime Technology</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              <p>
                I am not a 10-year computer science academic—I am a <strong>hands-on problem solver</strong> who has logged approximately <strong>5,000 hours of commercial and industrial electrical apprenticeship</strong> in Alaska. 
              </p>

              <p>
                In the electrical trades, you do not guess. If a circuit fails or a 480V motor control center trips, you isolate variables, inspect technical schematics, test voltages with meters, and diagnose the root cause before taking action. 
              </p>

              <p>
                When I began building software, I discovered that <strong>debugging digital systems, directing AI agents, and maintaining cloud applications relies on the exact same diagnostic discipline</strong>. Whether tracking an intermittent wiring fault on a construction site or troubleshooting an asynchronous audio buffer drop in the Web Speech API, the methodology is identical:
              </p>

              <blockquote className="p-4 rounded-xl bg-indigo-950/20 border-l-4 border-indigo-500 text-sm italic text-[var(--text-primary)]">
                “Understand the system requirements thoroughly, test hypotheses systematically, respect safety and uptime, and document findings clearly.”
              </blockquote>

              <p>
                Complementing my technical background is my experience in <strong>airport customer service</strong>. Handling high-volume phone support, rebooking stranded passengers, and de-escalating customer frustration under strict flight deadlines taught me patience, active listening, and how to communicate technical realities with empathy.
              </p>
            </div>
          </div>

          {/* Right Column: Comparative Matrix Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-[var(--border-accent)] space-y-5">
              <h3 className="font-bold text-lg text-[var(--text-primary)] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                Transferable Diagnostics Blueprint
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                
                <div className="p-3.5 rounded-xl bg-[var(--bg-muted)] border border-[var(--border-color)]">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-1">
                    <Zap className="w-4 h-4 shrink-0" />
                    <span>Industrial Electrical Discipline</span>
                  </div>
                  <p className="text-[var(--text-secondary)] text-xs">
                    Tracing schematics, circuit continuity checks, verifying wire gauge and load calculations.
                  </p>
                  <div className="mt-2 text-emerald-400 text-xs font-medium flex items-center gap-1.5">
                    <ArrowRightCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Translates to: Root-cause bug isolation, system API tracing, database indexing.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-muted)] border border-[var(--border-color)]">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-1">
                    <PhoneCall className="w-4 h-4 shrink-0" />
                    <span>Airport Customer Service</span>
                  </div>
                  <p className="text-[var(--text-secondary)] text-xs">
                    High-volume ticketing, managing time-sensitive inquiries, de-escalating passenger stress.
                  </p>
                  <div className="mt-2 text-emerald-400 text-xs font-medium flex items-center gap-1.5">
                    <ArrowRightCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Translates to: Calm technical support, clear documentation, customer success empathy.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-muted)] border border-[var(--border-color)]">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-1">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>AI-Assisted Operations & Execution</span>
                  </div>
                  <p className="text-[var(--text-secondary)] text-xs">
                    Directing coding agents with detailed constraints, validating diffs, testing real browser states.
                  </p>
                  <div className="mt-2 text-emerald-400 text-xs font-medium flex items-center gap-1.5">
                    <ArrowRightCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Translates to: 5x velocity on digital solutions, website fixes, and ops tasks.</span>
                  </div>
                </div>

              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Ready to support technical teams remotely across US & International time zones.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
