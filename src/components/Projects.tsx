"use client";

import { useState } from "react";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  UserCheck,
  Bot,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: string;
  url?: string;
  tagline: string;
  summary: string;
  techStack: string[];
  personalRoles: string[];
  aiRoles: string[];
  keyHighlights: string[];
  metricsOrScope: string;
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string>("oo");

  const projects: ProjectItem[] = [
    {
      id: "oo",
      title: "Optimized Organization (OO)",
      category: "Full-Stack Productivity Web App",
      status: "Live in Production",
      url: "https://optimizedorganization.com",
      tagline:
        "Full-stack habit and task execution platform engineered around a 6:00 AM natural daily reset, Web Speech API dictation, and seamless cross-device cloud synchronization.",
      summary:
        "Conceived, planned, and deployed as a real-world productivity web application. Built to solve the frustration of generic habit apps that arbitrarily reset at midnight or suffer from clunky mobile synchronization.",
      techStack: [
        "Next.js 16 (App Router)",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Prisma 6 ORM",
        "Neon PostgreSQL (Prod)",
        "SQLite (Dev)",
        "Cloudflare DNS",
        "Vercel Serverless",
      ],
      personalRoles: [
        "Defined complete application architecture, core workflow philosophies, and database entity models.",
        "Engineered the 6:00 AM natural reset boundary (getAppDay()) so late-night work before 6 AM preserves continuity rather than cutting the user off at midnight.",
        "Designed the custom OptimizedAutoCorrect engine logic to prevent common mobile typo frustrations and preserve explicit user word intent with Backspace reversion.",
        "Conducted end-to-end multi-device manual QA, uncovering speech recognition drop-offs during manual stops and resolving localStorage hydration desync on mobile.",
        "Configured Cloudflare custom domain DNS (CNAME records, SSL/TLS, proxy rules) and Vercel CLI deployment pipelines with Postgres connection strings.",
      ],
      aiRoles: [
        "Iteratively orchestrated AI coding assistants (Hermes Agent / LLMs) to generate initial TypeScript components, Prisma schema models, and Tailwind classes from structured requirement specifications.",
        "Used AI to debug compiler type mismatches and accelerate repetitive boilerplate scaffolding.",
      ],
      keyHighlights: [
        "Cross-Device Cloud Sync: Synchronizes daily check-ins and tasks from Neon Postgres on mount (GET /api/checkin), eliminating device-only data silos.",
        "Speech-to-Text Continuous Buffer: Implemented continuous audio buffering with live transcription preview and reliable commitment on manual stop.",
        "Dual-Environment Database: Maintained zero-friction local SQLite development with seamless auto-switching to production Neon PostgreSQL.",
      ],
      metricsOrScope: "Production application with live users, authenticated cookie sessions, and multi-tenant schema isolation.",
    },
    {
      id: "unity",
      title: "UNITY Clothing",
      category: "Independent Apparel Brand & E-Commerce Operations",
      status: "Active Brand & Operations",
      url: "https://unityclothing.net",
      tagline:
        "Independent technical and streetwear apparel brand managed from creative concept through international manufacturer sampling, quality revisions, and direct-to-consumer drops.",
      summary:
        "Founded and operated as an independent apparel venture. Involves navigating overseas textile supply chains, translating visual design into rigorous garment spec sheets, and executing product launch workflows.",
      techStack: [
        "Supply Chain Management",
        "Garment Specification Tech Packs",
        "Overseas Vendor Negotiations",
        "E-Commerce Planning",
        "Direct-to-Consumer Logistics",
        "Digital Brand Strategy",
      ],
      personalRoles: [
        "Vetted and established direct commercial communication with overseas garment manufacturers and distributors.",
        "Directed physical sample evaluations: inspected textile weight, stitch tolerances, wash tests, and graphic placement accuracy through multiple physical revision cycles.",
        "Formulated the Drop 001 release strategy (limited edition split-color custom hoodie, custom sleeve and back typography).",
        "Managed all customer-facing inquiries, order reservation workflows, and brand messaging across digital channels.",
      ],
      aiRoles: [
        "Employed AI tools to draft structured supplier inquiries, refine bilingual manufacturer communication briefs, and assist in product launch marketing copy.",
        "Generated initial layout and aesthetic concepts for website mockups and marketing assets.",
      ],
      keyHighlights: [
        "International Logistics: Successfully coordinated physical prototype production and freight delivery across international time zones.",
        "Quality Control Discipline: Applied rigorous physical inspection standards to catch textile defects and fit deviations before final production runs.",
        "End-to-End Ownership: Managed budgeting, brand positioning, supplier relationships, and customer satisfaction independently.",
      ],
      metricsOrScope: "Drop 001 limited edition release; direct oversight of overseas supplier negotiations and physical apparel QA.",
    },
    {
      id: "oursystem",
      title: "Our System (Operations Platform)",
      category: "Internal Operations & Workflow System",
      status: "Private Internal System",
      tagline:
        "Cloudflare Worker and D1 SQL operations system providing structured unit tracking, meal preparation logs, and role-scoped business data behind Cloudflare Access.",
      summary:
        "Developed to provide a lightweight, ultra-secure operational backbone for internal daily tracking and logistics without the overhead of heavy third-party SaaS subscriptions.",
      techStack: [
        "Cloudflare Workers (Edge Computing)",
        "Cloudflare D1 (Serverless SQLite/SQL)",
        "Cloudflare Access (Zero Trust Security)",
        "Role-Based Scope Predicates",
        "Automated Edge Migrations",
      ],
      personalRoles: [
        "Outlined the operational tracking requirements, daily meal-prep workflows, and unit logging structure.",
        "Specified the security boundary requiring enterprise-grade Zero Trust identity enforcement (Cloudflare Access) to eliminate application-level password vulnerabilities.",
        "Enforced strict business-scoped data isolation so operational rows are securely partitioned across functional domains.",
        "Tested edge query performance and validated access controls across administrative roles.",
      ],
      aiRoles: [
        "Directed AI agents to generate TypeScript worker handlers and D1 SQL migration scripts following strict Given/When/Then acceptance criteria.",
        "Utilized AI to implement schema validation and query optimization at the Cloudflare edge.",
      ],
      keyHighlights: [
        "Zero Trust Security: Fully behind Cloudflare Access, eliminating traditional login password attack surfaces.",
        "Edge Latency: Built on serverless Cloudflare Workers with direct D1 database bindings for instantaneous response times.",
        "Business Scope Integrity: Enforced schema-level scope predicates on all durable reads and writes.",
      ],
      metricsOrScope: "Internal operational platform serving dedicated multi-workflow tracking with role-based access control.",
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedProject(expandedProject === id ? "" : id);
  };

  return (
    <section id="projects" className="py-20 border-t border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
              <Layers className="w-3.5 h-3.5" />
              Verified Portfolio Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Featured Case Studies
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-2xl">
              Transparent, recruiter-focused breakdowns of real systems I have conceived, managed, and deployed.
              Every project distinguishes my direct responsibilities from AI assistance.
            </p>
          </div>

          <div className="text-xs text-[var(--text-muted)] flex items-center gap-2 self-start sm:self-end">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Zero Fabricated Claims or Metrics
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {projects.map((proj) => {
            const isExpanded = expandedProject === proj.id;

            return (
              <div
                key={proj.id}
                className="glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300"
              >
                {/* Header row: title, category, status, links */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                        {proj.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
                        {proj.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                        {proj.status}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-[var(--text-secondary)]">
                      {proj.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {proj.url && (
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                      >
                        Visit Live App
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={() => toggleExpand(proj.id)}
                      type="button"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[var(--border-color)] bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                    >
                      {isExpanded ? (
                        <>
                          Less Details <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          Full Case Study <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 pb-2">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[var(--bg-muted)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Case Study Deep Dive */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-[var(--border-color)] space-y-6 animate-in fade-in duration-200">
                    
                    {/* Two-column breakdown: Personal vs AI */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Personal Responsibilities */}
                      <div className="p-5 rounded-xl bg-indigo-950/20 border border-indigo-500/20 space-y-3">
                        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                          <UserCheck className="w-4 h-4" />
                          <span>My Personal Responsibilities (Human-Led)</span>
                        </div>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                          {proj.personalRoles.map((role, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-relaxed">
                              <span className="text-indigo-400 font-bold">•</span>
                              <span>{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* AI-Assisted Implementation */}
                      <div className="p-5 rounded-xl bg-purple-950/20 border border-purple-500/20 space-y-3">
                        <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                          <Bot className="w-4 h-4" />
                          <span>AI-Assisted Contributions (Agent-Orchestrated)</span>
                        </div>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                          {proj.aiRoles.map((aiRole, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-relaxed">
                              <span className="text-purple-400 font-bold">•</span>
                              <span>{aiRole}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Key Technical Highlights */}
                    <div className="p-5 rounded-xl bg-[var(--bg-muted)] border border-[var(--border-color)]">
                      <div className="flex items-center gap-2 text-[var(--text-primary)] font-semibold text-sm mb-3">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>Verified Architectural & Operational Highlights</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[var(--text-secondary)]">
                        {proj.keyHighlights.map((hl, i) => (
                          <div key={i} className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)]">
                            <span className="text-indigo-400 font-semibold block mb-1">
                              Feature {i + 1}
                            </span>
                            {hl}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Verified Scope Note */}
                    <div className="text-xs text-[var(--text-muted)] italic flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      Scope: {proj.metricsOrScope}
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
