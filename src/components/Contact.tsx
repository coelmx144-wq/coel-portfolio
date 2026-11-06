"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Copy, Check, Send, Sparkles } from "lucide-react";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // Safe verified contact info
  const emailPlaceholder = "coelmx144@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/coel-nelson-a28931449";
  const githubPlaceholder = "https://github.com/coelmx144-wq";

  const copyEmail = () => {
    navigator.clipboard.writeText(emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[var(--border-accent)] bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-surface)] to-[var(--bg-card)] relative overflow-hidden">
          
          <div className="max-w-2xl space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              Get In Touch
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Let’s Discuss Remote Opportunities
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              I am actively seeking full-time or contract remote roles in{" "}
              <strong className="text-[var(--text-primary)]">AI Operations</strong>,{" "}
              <strong className="text-[var(--text-primary)]">Technical Support</strong>,{" "}
              <strong className="text-[var(--text-primary)]">Digital Operations</strong>, and{" "}
              <strong className="text-[var(--text-primary)]">Solutions Implementation</strong>.
              If you value high accountability, real-world troubleshooting rigor, and rapid AI-assisted execution, let’s talk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            
            {/* Email card */}
            <div className="p-5 rounded-2xl bg-[var(--bg-muted)] border border-[var(--border-color)] space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  type="button"
                  title="Copy email to clipboard"
                  className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div>
                <div className="text-xs text-[var(--text-muted)] font-medium">Direct Email</div>
                <a
                  href={`mailto:${emailPlaceholder}`}
                  className="text-sm font-semibold text-[var(--text-primary)] hover:text-indigo-400 transition-colors break-all"
                >
                  {emailPlaceholder}
                </a>
              </div>
              <div className="text-[11px] text-[var(--text-muted)]">
                {copied ? "Copied to clipboard!" : "Click to send or copy"}
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-[var(--bg-muted)] border border-[var(--border-color)] hover:border-indigo-500/40 transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 w-fit rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified
                </span>
              </div>
              <div>
                <div className="text-xs text-[var(--text-muted)] font-medium">LinkedIn Profile</div>
                <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-indigo-400 transition-colors">
                  coel-nelson
                </div>
              </div>
              <div className="text-[11px] text-[var(--text-muted)]">
                Connect on LinkedIn & view network
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={githubPlaceholder}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-[var(--bg-muted)] border border-[var(--border-color)] hover:border-indigo-500/40 transition-all space-y-3 group"
            >
              <div className="p-2.5 w-fit rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-[var(--text-muted)] font-medium">GitHub Repository</div>
                <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-indigo-400 transition-colors">
                  View Code & Commits
                </div>
              </div>
              <div className="text-[11px] text-[var(--text-muted)]">
                Commit history, workflows, and PRs
              </div>
            </a>

          </div>

          {/* Location & Remote Availability Footer Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Based in Alaska, United States • 100% Remote Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Flexible working across PST, MST, CST, and EST timezones</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
