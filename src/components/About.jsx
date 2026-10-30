import { LuMapPin, LuBriefcase, LuMail } from "react-icons/lu";
import { profile, about } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const info = [
  { Icon: LuMapPin, label: "Lokasi", value: profile.location },
  { Icon: LuBriefcase, label: "Pengalaman", value: `${profile.yearsExperience}` },
  { Icon: LuMail, label: "Email", value: profile.email },
];

export default function About() {
  return (
    <section id="about" className="px-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl bg-ink text-white">
        <div className="grid gap-10 p-7 sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <SectionHeading eyebrow="About me" title={about.heading} light />
            <Reveal delay={100} className="mt-6 space-y-4 text-base leading-relaxed text-white/75">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          </div>

          <Reveal delay={150}>
            <img
              src={about.image}
              alt="Ruang kerja"
              width="800"
              height="560"
              loading="lazy"
              decoding="async"
              className="aspect-8/7 w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>

        <ul className="grid border-t border-white/10 sm:grid-cols-3">
          {info.map(({ Icon, label, value }) => (
            <li
              key={label}
              className="flex items-center gap-4 border-b border-white/10 px-7 py-5 last:border-b-0 sm:border-r sm:border-b-0 sm:px-10 sm:last:border-r-0"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/8 text-bronze-light">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-white/55">{label}</span>
                <span className="block truncate text-sm font-semibold">{value}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
