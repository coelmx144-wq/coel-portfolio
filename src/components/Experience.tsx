"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  location: string;
  badge: string;
  points: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Founder & Technical Operations Lead",
      organization: "Optimized Organization & UNITY Clothing",
      period: "2024 — Present",
      location: "Alaska (Remote)",
      badge: "Software & Digital Operations",
      points: [
        "Architected and deployed Optimized Organization (OO), a production Next.js 16 web application with Neon PostgreSQL and Prisma 6.",
        "Pioneered an AI-assisted development workflow, directing autonomous agents (Hermes/ChatGPT) through iterative requirement writing, code reviews, and manual browser QA.",
        "Engineered domain-specific UX solutions including a 6:00 AM natural daily cycle reset and continuous Web Speech API audio buffers.",
        "Managed global supply chains for UNITY Clothing: negotiated with overseas manufacturers, audited sample tolerances, and organized drop logistics.",
        "Configured and maintained infrastructure: Cloudflare DNS, SSL/TLS, Vercel CI/CD pipelines, and secret management.",
      ],
    },
    {
      title: "Commercial & Industrial Electrical Apprentice (~5,000 Hours)",
      organization: "Commercial Electrical Apprenticeship",
      period: "2020 — 2024",
      location: "Alaska",
      badge: "Field Diagnostics & Industrial Systems",
      points: [
        "Completed approximately 5,000 hours of registered electrical apprenticeship across commercial and industrial job sites.",
        "Interpreted detailed engineering blueprints, single-line wiring diagrams, and technical NEC compliance specifications.",
        "Diagnosed electrical faults, circuit overloads, and motor control anomalies using multimeters and systematic isolation routines.",
        "Operated with strict safety discipline, zero-tolerance for guesswork, and effective coordination with multi-trade construction crews.",
      ],
    },
    {
      title: "Customer Service & Airport Operations Representative",
      organization: "Airport Transportation & Aviation Services",
      period: "Previous Experience",
      location: "Alaska",
      badge: "High-Pressure Customer Support",
      points: [
        "Managed frontline passenger inquiries, high-volume telephone calls, and rapid-response itinerary troubleshooting.",
        "De-escalated emotional and stressful customer situations caused by delays, cancellations, and logistics bottlenecks.",
        "Communicated critical updates clearly and politely between passengers, flight dispatchers, and ground operations teams.",
        "Maintained meticulous attention to detail under tight departure timelines.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 border-t border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Verified Career History
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Professional Experience & Track Record
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2">
            Demonstrated commitment to rigorous field diagnostics, customer advocacy, and modern digital building.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--border-color)] space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Dot on timeline */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-surface)] border-2 border-indigo-500 group-hover:scale-125 group-hover:bg-indigo-500 transition-all shadow-sm" />

              <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                      {exp.title}
                    </h3>
                    <div className="text-sm font-medium text-indigo-400">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="pt-1 pb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium border border-indigo-500/20 bg-indigo-500/10 text-indigo-300">
                    {exp.badge}
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
