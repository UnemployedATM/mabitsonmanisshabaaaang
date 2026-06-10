import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

type Service = {
  name: string;
  core?: boolean;
  sh: string;
  blurb: string;
  items: string[];
};

const SERVICES: Service[] = [
  {
    name: "Editing",
    core: true,
    sh: "var(--color-star)",
    blurb:
      "Long-form, shorts, design, color, audio, subtitles. Managed end-to-end.",
    items: ["long-form + shorts", "design & thumbnails", "color · audio · subs", "QC every step"],
  },
  {
    name: "Meta Business Ads",
    sh: "var(--color-dove)",
    blurb:
      "Judged by ROAS and CPA, not likes. Set up, monitored, scaled by the rules.",
    items: ["campaign setup", "creative-first", "daily monitoring", "disciplined scaling"],
  },
  {
    name: "Content Strategy",
    sh: "var(--color-bone)",
    blurb: "A system, not random posting. Built around your buyer.",
    items: ["buyer-persona mapping", "cadence & hooks", "channel plan", "readable funnels"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHead
        label="what we run"
        title={
          <>
            Three things. Done <mark className="mark">properly</mark>.
          </>
        }
        sub="We don't do everything. Editing, Meta ads, strategy. Short list, sharp work."
      />

      <div className="mt-12 grid gap-4 sm:gap-5 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.name} delay={i * 80}>
            <article
              className="block hard lift flex h-full flex-col p-6"
              style={{ ["--sh" as string]: s.sh }}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="pixel text-lg leading-tight">{s.name}</h3>
                {s.core && <span className="tag shrink-0">core</span>}
              </div>
              <p className="dim mt-4 text-sm leading-relaxed">{s.blurb}</p>

              <ul className="mt-6 space-y-2.5 border-t-2 border-dove/20 pt-5 text-sm">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="c-accent mt-0.5 text-[0.6rem]">■</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
