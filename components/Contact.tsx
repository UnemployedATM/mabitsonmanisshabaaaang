import CopyButton from "./CopyButton";
import Reveal from "./Reveal";

const EMAIL = "hello@bidaman.com";
const MAILTO = `mailto:${EMAIL}?subject=Let%27s%20talk%20presence&body=Hi%20bidaman%2C%0A%0AHere%27s%20what%20I%27m%20working%20on%3A%0A`;

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <Reveal>
        <div
          className="block hard p-7 sm:p-12"
          style={{ ["--sh" as string]: "var(--color-star)" }}
        >
          <span className="tag">start here</span>

          <h2 className="pixel mt-7 text-2xl leading-tight sm:text-4xl">
            One <mark className="mark">honest</mark> conversation.
          </h2>
          <p className="dim mt-6 max-w-xl text-base leading-relaxed">
            No funnels, no bots. Tell us what you&rsquo;re building. We&rsquo;ll
            tell you how we&rsquo;d make you seen, and what it costs.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={MAILTO}
              className="btn btn-solid sh-dove break-all text-base"
              style={{ ["--sh" as string]: "var(--color-dove)" }}
            >
              → {EMAIL}
            </a>
            <CopyButton
              value={EMAIL}
              label="copy address"
              className="btn sh-dove"
            />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2 border-t-2 border-dove/20 pt-7">
            <span className="dim mr-1 text-xs">reachable in</span>
            {["EU", "US", "LATAM"].map((r) => (
              <span key={r} className="tag tag-dove">
                {r}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
