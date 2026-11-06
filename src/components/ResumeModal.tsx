'use client';

import { useState } from "react";
import { FileText, Download, X, Mail, CheckCircle2, AlertCircle } from "lucide-react";

export default function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [hasDirectFile, setHasDirectFile] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="glass-card w-full max-w-lg rounded-2xl p-6 relative border border-[var(--border-accent)] bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="resume-title" className="text-xl font-bold tracking-tight">
              Resume & Credentials
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Coel • AI-Assisted Technical Operations & Digital Solutions
            </p>
          </div>
        </div>

        <div className="space-y-4 my-5 text-sm text-[var(--text-secondary)] leading-relaxed">
          <div className="p-3.5 rounded-xl bg-[var(--bg-muted)] border border-[var(--border-color)]">
            <p className="font-medium text-[var(--text-primary)] mb-1">
              Recruiter Quick Summary:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-[var(--text-muted)]">
              <li>~5,000 Hours Commercial & Industrial Electrical Apprenticeship</li>
              <li>Founder & Builder of Optimized Organization (Next.js 16 / Postgres)</li>
              <li>Brand & Operations Lead for UNITY Clothing (Supply Chain & Drops)</li>
              <li>Airport Customer Service & High-Pressure Incident De-escalation</li>
              <li>Focus: Remote AI Operations, Technical Support, Solutions Specialist</li>
            </ul>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              Direct PDF download placeholder active. You can link your finalized resume PDF anytime by saving it as <code className="font-mono bg-black/30 px-1 py-0.5 rounded text-amber-300">/public/resume.pdf</code>.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href="/resume.pdf"
            download="Coel_Resume.pdf"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-indigo-500/25"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:bg-[var(--bg-muted)] text-[var(--text-primary)] text-sm font-medium transition-colors"
          >
            <Mail className="w-4 h-4" />
            Request via Email
          </a>
        </div>
      </div>
    </div>
  );
}
