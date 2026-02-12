const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-800/60 bg-slate-950/60">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <a href="#" className="text-sm font-semibold tracking-wide text-slate-200">
          Harshith Kurakula
        </a>
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-slate-400">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-200 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
          Open to Summer 2026
        </div>
      </nav>
    </header>
  );
}
