// The official bidaman logo, used verbatim from public/bidaman-logo.svg.
// It is shown bone-white through a CSS mask in globals.css — the file itself
// is never altered. Size is set by width on the wrapper.

export default function Logo({ className = "" }: { className?: string }) {
  return <span className={`logo-img ${className}`} role="img" aria-label="bidaman" />;
}
