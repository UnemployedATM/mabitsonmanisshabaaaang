import Logo from "./Logo";
import Reveal from "./Reveal";

const EMAIL = "hello@bidaman.com";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 pb-16 pt-24 sm:px-8 sm:pb-24 sm:pt-28"
    >
      <Reveal>
        <span className="tag">a reliable skeleton crew</span>

        <h1 className="mt-7">
          <Logo className="w-[clamp(300px,90vw,1120px)]" />
        </h1>

        <p className="pixel mt-9 max-w-4xl text-xl leading-tight sm:text-2xl md:text-3xl">
          People from the past are trying to destroy the world, we{" "}
          <mark className="mark">run to the future</mark>
        </p>

        <p className="dim mt-6 max-w-xl text-base leading-relaxed">
          We run your editing, Meta ads, and content. You stay on the only thing
          that closes: your product.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href={`mailto:${EMAIL}?subject=Let%27s%20talk%20presence`}
            className="btn btn-solid sh-dove"
            style={{ ["--sh" as string]: "var(--color-dove)" }}
          >
            Start a conversation
          </a>
          <a
            href="#use-cases"
            className="btn sh-dove"
            style={{ ["--sh" as string]: "var(--color-dove)" }}
          >
            Who it&rsquo;s for →
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {["EU", "US", "LATAM"].map((r) => (
            <span key={r} className="tag tag-dove">
              {r}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
