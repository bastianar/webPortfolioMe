import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, light = false, className = "" }) {
  return (
    <Reveal className={className}>
      <p className={`text-sm font-semibold ${light ? "text-bronze-light" : "text-bronze"}`}>{eyebrow}</p>
      <h2 className={`mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
    </Reveal>
  );
}
