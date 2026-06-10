import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const REGIONS = [
  { code: "EU", name: "Europe", line: "CET / GMT hours", sh: "var(--color-star)" },
  { code: "US", name: "United States", line: "EST → PST", sh: "var(--color-dove)" },
  { code: "LATAM", name: "Latin America", line: "Guadalajara, MX", sh: "var(--color-bone)" },
];

export default function Availability() {
  return (
    <section
      id="availability"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHead
        label="where we work"
        title={<>EU. US. <mark className="mark">LATAM</mark>.</>}
        sub="We work inside your time zone, not around it."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
        {REGIONS.map((r, i) => (
          <Reveal key={r.code} delay={i * 80}>
            <article
              className="block hard lift h-full p-6"
              style={{ ["--sh" as string]: r.sh }}
            >
              <p className="pixel text-2xl sm:text-3xl">{r.code}</p>
              <p className="mt-5 text-sm">{r.name}</p>
              <p className="dim mt-1 text-xs">{r.line}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
