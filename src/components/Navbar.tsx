'use client';

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import ResumeModal from "./ResumeModal";
import { Menu, X, FileText, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full glass-nav transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 flex items-center justify-center text-white font-bold text-sm shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-[var(--text-primary)]">
                Coel
              </span>
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                Tech Ops & Solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--text-secondary)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[var(--text-primary)] hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions: Remote badge, Resume button, Theme toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Remote Roles</span>
            </div>

            <button
              onClick={() => setResumeModalOpen(true)}
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[var(--border-accent)] bg-[var(--badge-bg)] text-[var(--badge-text)] hover:opacity-90 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>

            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-[var(--border-color)] bg-[var(--bg-surface)] px-4 pt-3 pb-6 space-y-3">
            <div className="flex items-center gap-2 px-2.5 py-1.5 mb-2 rounded-lg text-xs font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Remote Roles</span>
            </div>

            <div className="flex flex-col space-y-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)] transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setResumeModalOpen(true);
              }}
              type="button"
              className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        )}
      </header>

      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  );
}
