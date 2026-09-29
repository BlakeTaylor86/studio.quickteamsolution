import type { ReactNode } from "react";
import { Logo } from "./Logo";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="starfield min-h-screen font-sans text-paper">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-3">
            <Logo />
            <span className="font-display text-lg leading-none tracking-wide sm:text-xl">
              Quick Team
              <span className="mt-1 block text-xs tracking-[0.28em] text-sky">STUDIOS</span>
            </span>
          </a>
          <nav className="flex items-center gap-5 text-sm font-semibold">
            <a href="/#games" className="text-muted hover:text-yellow">
              Games
            </a>
            <a href="/privacy" className="text-muted hover:text-yellow">
              Privacy
            </a>
          </nav>
        </div>
      </header>
      {children}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Quick Team Studios. A Quick Team Solution label.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-paper">
              Privacy Policy
            </a>
            <a href="https://www.quickteamsolution.com" className="hover:text-paper">
              Quick Team Solution
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
