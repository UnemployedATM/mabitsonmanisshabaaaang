import Logo from "./Logo";

const EMAIL = "hello@bidaman.com";

const NAV = [
  { id: "use-cases", label: "use cases" },
  { id: "what", label: "what" },
  { id: "services", label: "services" },
  { id: "manifesto", label: "manifesto" },
  { id: "contact", label: "contact" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-dove/20 px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <a href="#top" className="inline-block" aria-label="bidaman, back to top">
            <Logo className="w-[160px] sm:w-[190px]" />
          </a>
          <p className="pixel dim mt-6 text-xs">Presence, not promises.</p>
        </div>

        <nav className="flex flex-col gap-2.5 text-sm">
          <span className="dimmer mb-1 text-xs uppercase tracking-widest">index</span>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="uline dim w-fit hover:text-bone">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5 text-sm">
          <span className="dimmer mb-1 text-xs uppercase tracking-widest">contact</span>
          <a href={`mailto:${EMAIL}`} className="uline c-accent w-fit">
            {EMAIL}
          </a>
          <span className="dim mt-1">EU · US · LATAM</span>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t-2 border-dove/20 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <span className="dimmer">© {new Date().getFullYear()} bidaman</span>
        <span className="pixel dimmer">presence · exposure · trust</span>
      </div>
    </footer>
  );
}
