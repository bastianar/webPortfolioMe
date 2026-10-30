import { useCallback, useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuArrowUpRight } from "react-icons/lu";
import { projects } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const arrow = "flex size-11 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-bronze hover:text-bronze disabled:pointer-events-none disabled:opacity-30";

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 sm:pb-28">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading eyebrow="My projects" title="Projek yang pernah saya buat" />
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button type="button" className={arrow} onClick={() => scrollByCard(-1)} disabled={atStart} aria-label="Project sebelumnya">
            <LuChevronLeft className="size-5" />
          </button>
          <button type="button" className={arrow} onClick={() => scrollByCard(1)} disabled={atEnd} aria-label="Project berikutnya">
            <LuChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <Reveal delay={100}>
        <ul ref={trackRef} onScroll={update} className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-4 sm:-mx-6 sm:scroll-px-6 sm:px-6">
          {projects.map((p) => (
            <li key={p.title} className="w-[82%] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="overflow-hidden bg-mist">
                  <img
                    src={p.image}
                    alt={`Tampilan ${p.title}`}
                    width="800"
                    height="500"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                    className="aspect-16/10 w-full object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-colors group-hover:bg-bronze">
                      <LuArrowUpRight className="size-4.5" aria-hidden="true" />
                      <span className="sr-only">Buka website (tab baru)</span>
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-ink/80">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
