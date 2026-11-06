"use client";

import { ArrowUp, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[var(--border-color)] bg-[var(--bg-card)] py-10 text-xs text-[var(--text-muted)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xs">
            C
          </div>
          <span>
            © 2026 Coel. Built with Next.js 16, TypeScript & Tailwind CSS v4.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="italic">
            Crafted with real-world diagnostics & AI assistance.
          </span>
          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top"
            className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-accent)] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
