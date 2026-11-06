import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coel — AI-Assisted Technical Operations & Digital Solutions Specialist",
  description:
    "Portfolio of Coel: AI-assisted technical operations, software implementation, digital solutions, and practical systems troubleshooting backed by ~5,000 hours of diagnostic experience.",
  keywords: [
    "AI Operations",
    "Technical Support",
    "Digital Operations",
    "Next.js Developer",
    "Solutions Specialist",
    "AI-Assisted Development",
    "Troubleshooting",
    "Systems Diagnostics",
  ],
  authors: [{ name: "Coel" }],
  openGraph: {
    title: "Coel — AI-Assisted Technical Operations & Digital Solutions",
    description:
      "Bridging real-world diagnostic discipline with modern AI orchestration and web application delivery.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('portfolio-theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (saved === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased selection:bg-indigo-500/20 selection:text-indigo-400`}
      >
        <div className="ambient-glow-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
