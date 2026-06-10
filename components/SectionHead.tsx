import Reveal from "./Reveal";

export default function SectionHead({
  label,
  title,
  sub,
}: {
  label: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="max-w-3xl">
        <span className="tag">{label}</span>
        <h2 className="pixel mt-6 text-2xl leading-tight sm:text-3xl md:text-4xl">
          {title}
        </h2>
        {sub && (
          <p className="dim mt-4 max-w-2xl text-sm leading-relaxed sm:text-base">
            {sub}
          </p>
        )}
      </div>
    </Reveal>
  );
}
