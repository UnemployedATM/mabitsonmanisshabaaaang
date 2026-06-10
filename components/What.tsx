import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const FACTS = [
  {
    big: "1M likes",
    eq: "= 0 sales",
    cap: "Likes are exposure, not revenue.",
    sh: "var(--color-star)",
  },
  {
    big: "only editing",
    eq: "+ ads + strategy",
    cap: "A narrow scope, on purpose.",
    sh: "var(--color-dove)",
  },
  {
    big: "no hidden",
    eq: "costs. ever.",
    cap: "What you see is what you pay.",
    sh: "var(--color-bone)",
  },
];

export default function What() {
  return (
    <section
      id="what"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHead
        label="what is bidaman"
        title={
          <>
            A skeleton crew that takes editing{" "}
            <mark className="mark">off your hands</mark>.
          </>
        }
        sub="Editing, Meta ads, content strategy. That's the whole scope. Kept narrow, kept excellent."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
        {FACTS.map((f, i) => (
          <Reveal key={f.big} delay={i * 80}>
            <article
              className="block hard lift h-full p-6"
              style={{ ["--sh" as string]: f.sh }}
            >
              <p className="pixel text-xl leading-tight sm:text-2xl">{f.big}</p>
              <p className="pixel c-accent text-base">{f.eq}</p>
              <p className="dim mt-4 text-sm leading-relaxed">{f.cap}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
