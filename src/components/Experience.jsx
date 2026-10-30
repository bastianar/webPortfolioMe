import { experiences } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-28">
      <SectionHeading eyebrow="Work experience" title="Perjalanan karier saya" />

      <ol className="relative mt-12 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-1.75 before:w-px before:bg-line md:before:left-[calc(25%-1px)]">
        {experiences.map((item, i) => (
          <li key={item.role + item.period} className="relative pl-8 md:grid md:grid-cols-4 md:gap-10 md:pl-0">
            {/* Titik timeline */}
            <span
              aria-hidden="true"
              className={`absolute top-2 left-0 size-3.75 rounded-full border-[3px] border-paper md:left-[calc(25%-8px)] ${
                i === 0 ? "bg-bronze" : "bg-ink/30"
              }`}
            />

            <Reveal delay={i * 80} className="md:pt-0.5 md:text-right md:pr-10">
              <p className="text-sm font-bold text-bronze">{item.period}</p>
              <p className="mt-0.5 text-sm font-medium text-muted">{item.company}</p>
            </Reveal>

            <Reveal delay={i * 80 + 60} className="mt-3 rounded-2xl border border-line bg-white p-6 md:col-span-3 md:mt-0 md:ml-6">
              <h3 className="text-lg font-bold">{item.role}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-bronze-light" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
