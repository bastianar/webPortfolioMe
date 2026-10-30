import { SiJavascript, SiReact, SiHtml5, SiCss, SiTailwindcss, SiFigma } from "react-icons/si";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { skills } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// key di data.js -> ikon + warna brand
const icons = {
  javascript: { Icon: SiJavascript, color: "#d4a800" },
  react: { Icon: SiReact, color: "#1ba7c9" },
  html: { Icon: SiHtml5, color: "#e34f26" },
  css: { Icon: SiCss, color: "#1572b6" },
  tailwind: { Icon: SiTailwindcss, color: "#0ea5b7" },
  photoshop: { Icon: TbBrandAdobePhotoshop, color: "#1c8be0" },
  figma: { Icon: SiFigma, color: "#a259ff" },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-mist py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow="Skills" title="Keterampilan yang saya miliki" />

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {skills.map((s, i) => {
            const { Icon, color } = icons[s.key];
            return (
              <Reveal as="li" key={s.key} delay={i * 50} className="last:col-span-2 sm:last:col-span-1">
                <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-line bg-white px-4 py-7 text-center transition-transform duration-300 hover:-translate-y-1">
                  <span
                    className="flex size-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${color}1a`, color }}
                  >
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold">{s.name}</span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
