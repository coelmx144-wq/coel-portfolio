"use client";

import {
  Cpu,
  Globe,
  Database,
  Cloud,
  Wrench,
  Headphones,
  CheckCircle2,
  Terminal,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  description: string;
  skills: { name: string; context: string }[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "AI-Assisted Operations & Prompt Engineering",
      icon: Cpu,
      description:
        "Orchestrating autonomous AI agents and language models to accelerate software delivery and operations.",
      skills: [
        {
          name: "Agent Orchestration (Hermes / LLMs)",
          context: "Spec-driven steering, iterative prompt refinement, tool-use guidance",
        },
        {
          name: "AI Code Review & Sanity Testing",
          context: "Reviewing generated diffs, identifying hallucinated APIs, lint validation",
        },
        {
          name: "Workflow Automation",
          context: "Structuring repeatable prompt templates for marketing, docs, and supplier briefs",
        },
        {
          name: "AI Problem Framing",
          context: "Breaking complex business requirements into Given/When/Then acceptance criteria",
        },
      ],
    },
    {
      title: "Web & Digital Solutions Implementation",
      icon: Globe,
      description:
        "Building and maintaining modern, responsive, and accessible web applications.",
      skills: [
        {
          name: "Next.js 16 (App Router) & React 19",
          context: "Server and client components, layout routing, dynamic hydration",
        },
        {
          name: "TypeScript & JavaScript",
          context: "Interface definition, type debugging, event handling",
        },
        {
          name: "Tailwind CSS v4 & Modern CSS",
          context: "Responsive mobile-first layouts, dark/light theming, glassmorphic UI",
        },
        {
          name: "Web APIs & Browser Mechanics",
          context: "Web Speech API, AudioContext, localStorage vs Cloud sync",
        },
      ],
    },
    {
      title: "Data Management & Backend Workflows",
      icon: Database,
      description:
        "Data persistence, schema design, session management, and cross-device sync.",
      skills: [
        {
          name: "Prisma 6 ORM",
          context: "Multi-tenant relational data modeling, schema migrations",
        },
        {
          name: "PostgreSQL (Neon) & SQLite",
          context: "Serverless cloud Postgres in production; local SQLite in development",
        },
        {
          name: "Cloudflare D1 (Serverless SQL)",
          context: "Edge database querying and role-scoped tables in Cloudflare Workers",
        },
        {
          name: "Authentication & Session Management",
          context: "HTTP-only cookie sessions, JWT verification, password hashing",
        },
      ],
    },
    {
      title: "Cloud Infrastructure & DevOps",
      icon: Cloud,
      description:
        "Domain configuration, serverless deployments, version control, and secret management.",
      skills: [
        {
          name: "Vercel Platform & CLI",
          context: "Serverless build pipelines, env configuration, deployment troubleshooting",
        },
        {
          name: "Cloudflare DNS & Zero Trust",
          context: "CNAME records, SSL/TLS certificates, Cloudflare Access security rules",
        },
        {
          name: "Git & GitHub Version Control",
          context: "Repository management, branching, commit discipline, pull requests",
        },
        {
          name: "Environment & Secret Safety",
          context: "Managing secure platform secrets without accidental repository exposure",
        },
      ],
    },
    {
      title: "Industrial Diagnostics & Systems Troubleshooting",
      icon: Wrench,
      description:
        "~5,000 hours of commercial electrical apprenticeship transferring directly into IT and software diagnostics.",
      skills: [
        {
          name: "Root-Cause Failure Analysis",
          context: "Isolating faults systematically rather than guessing or replacing parts randomly",
        },
        {
          name: "Schematic & Specification Literacy",
          context: "Reading complex blueprints, architectural diagrams, and technical docs",
        },
        {
          name: "Safety & Compliance Standards",
          context: "Strict adherence to NEC standards; translated to software security & zero-trust",
        },
        {
          name: "High-Pressure Field Execution",
          context: "Troubleshooting live systems safely under tight construction deadlines",
        },
      ],
    },
    {
      title: "Customer Support & Operational Communications",
      icon: Headphones,
      description:
        "Customer-facing communication, issue de-escalation, and international supplier coordination.",
      skills: [
        {
          name: "Airport Customer Service Operations",
          context: "High-volume phone support, ticketing inquiries, passenger dispute resolution",
        },
        {
          name: "Crisis De-escalation & Empathy",
          context: "Remaining calm and constructive when dealing with stressed or frustrated users",
        },
        {
          name: "International Supplier Relations",
          context: "Overseas manufacturer communication, sample negotiations, freight timelines",
        },
        {
          name: "Clear Technical Documentation",
          context: "Authoring straightforward user guides, changelogs, and bug tickets",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            Skills & Capabilities Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Technical & Transferable Strengths
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2">
            A comprehensive overview of demonstrated software competencies combined with rigorous real-world diagnostic experience.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-indigo-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-[var(--text-primary)] leading-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mb-4 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-lg bg-[var(--bg-muted)] border border-[var(--border-color)] space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[var(--text-primary)]">
                            {skill.name}
                          </span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        </div>
                        <p className="text-[11px] text-[var(--text-muted)] leading-tight">
                          {skill.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
