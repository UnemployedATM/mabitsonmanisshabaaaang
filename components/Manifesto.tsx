import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const PRINCIPLES = [
  { lead: "1M likes = 0 sales.", body: "Likes are exposure, not revenue.", sh: "var(--color-star)" },
  { lead: "Exposure, not promises.", body: "Constant presence where buyers look.", sh: "var(--color-dove)" },
  { lead: "No hidden costs.", body: "What you see is what you pay.", sh: "var(--color-bone)" },
  { lead: "You close.", body: "We take social off your hands.", sh: "var(--color-dove)" },
  { lead: "Social = billboards.", body: "It makes you known, not rich.", sh: "var(--color-bone)" },
  { lead: "The genius is you.", body: "We just make sure you're seen.", sh: "var(--color-star)" },
];

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHead
        label="manifesto"
        title={<><mark className="mark">Why</mark> was this even made lol?</>}
        sub="So you know exactly what you're buying."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.lead} delay={i * 70}>
            <article
              className="block hard lift h-full p-5"
              style={{ ["--sh" as string]: p.sh }}
            >
              <p className="pixel text-sm leading-relaxed">{p.lead}</p>
              <p className="dim mt-3 text-sm leading-relaxed">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
