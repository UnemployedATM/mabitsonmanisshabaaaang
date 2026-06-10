"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Case = {
  tab: string;
  sub: string;
  head: string;
  body: string;
  bullets: string[];
};

const CASES: Case[] = [
  {
    tab: "Businesses",
    sub: "PyMEs · Small-Medium Companies",
    head: "Be the brand your neighborhood knows.",
    body: "Daily presence and local reach. We're the editing and ads desk you don't have to hire.",
    bullets: [
      "daily content",
      "geo-targeted Meta Ads",
      "on-brand, every post",
      "no team to manage",
    ],
  },
  {
    tab: "Corporate",
    sub: "Brands · Multi-channel teams",
    head: "Production at scale, measured.",
    body: "High volume, A/B-tested creative, and funnels you can actually read.",
    bullets: [
      "high-volume editing",
      "multi-channel ads",
      "funnels & dashboards",
      "QC at every step",
    ],
  },
  {
    tab: "Creators",
    sub: "Creators · Individuals",
    head: "Studio editing, no studio.",
    body: "Long-form, shorts, design, color, audio, subtitles. Finished to a high standard.",
    bullets: [
      "long-form + shorts",
      "clean color & audio",
      "thumbnails & design",
      "multi-language & SEO",
    ],
  },
];

const EMAIL = "hello@bidaman.com";

export default function UseCases() {
  const [active, setActive] = useState(0);
  const c = CASES[active];

  return (
    <section
      id="use-cases"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <Reveal>
        <span className="tag">use cases</span>
        <h2 className="pixel mt-6 text-3xl leading-tight sm:text-4xl md:text-5xl">
          <mark className="mark">Who</mark> is this for?
        </h2>
        <p className="dim mt-5 max-w-xl text-base">
          Same crew. Three kinds of people. Pick yours.
        </p>
      </Reveal>

      {/* big blocky tabs */}
      <Reveal>
        <div
          className="mt-10 grid grid-cols-3 gap-3 sm:gap-4"
          role="tablist"
        >
          {CASES.map((cs, i) => (
            <button
              key={cs.tab}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`btn w-full justify-center text-center text-sm sm:text-base ${
                active === i ? "btn-solid" : ""
              }`}
            >
              {cs.tab}
            </button>
          ))}
        </div>
      </Reveal>

      {/* content panel — outer block stays mounted (anchors scroll); only the
          inner content remounts so the panel animates without a scroll jump */}
      <div
        className="block hard sh-bone mt-4 sm:mt-5"
        style={{ ["--sh" as string]: "var(--color-bone)" }}
        role="tabpanel"
        aria-live="polite"
      >
        <div
          key={active}
          className="tab-panel grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
        <div>
          <span className="tag tag-dove">{c.sub}</span>
          <h3 className="pixel mt-6 text-2xl leading-tight sm:text-3xl">
            {c.head}
          </h3>
          <p className="dim mt-5 text-base leading-relaxed">{c.body}</p>
          <a
            href={`mailto:${EMAIL}?subject=Use%20case:%20${encodeURIComponent(
              c.tab
            )}`}
            className="btn sh-dove mt-8"
            style={{ ["--sh" as string]: "var(--color-dove)" }}
          >
            Talk about {c.tab.toLowerCase()} →
          </a>
        </div>

        <ul className="grid grid-cols-1 gap-3">
          {c.bullets.map((b, i) => (
            <li
              key={b}
              className="flex items-center gap-4 border-2 border-dove/25 p-3"
            >
              <span className="c-accent shrink-0 text-xl leading-none">*</span>
              <span className="text-sm sm:text-base">{b}</span>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
