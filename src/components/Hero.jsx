import { LuArrowRight } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { profile } from "../data";
import Socials from "./Socials";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pb-28">
      <div aria-hidden="true" className="absolute inset-y-0 left-0 -z-10 w-full bg-linear-to-br from-mist via-paper to-paper lg:w-2/3" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-12 lg:gap-10">
        {/* Teks */}
        <div className="order-1 lg:order-2 lg:col-span-7">
          <p className="rise text-sm font-semibold text-bronze" style={{ "--delay": "50ms" }}>
            {profile.role}
          </p>
          <h1
            className="rise mt-3 text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
            style={{ "--delay": "130ms" }}
          >
            Hi, I&apos;m
            <br />
            {profile.firstName} <span className="text-bronze">{profile.lastName}</span>
          </h1>
          <p className="rise mt-6 max-w-xl text-lg font-medium text-ink/90" style={{ "--delay": "220ms" }}>
            {profile.tagline}
          </p>
          <p className="rise mt-3 max-w-xl text-base leading-relaxed text-muted" style={{ "--delay": "290ms" }}>
            {profile.intro}
          </p>

          <div className="rise mt-8 flex flex-wrap items-center gap-3" style={{ "--delay": "360ms" }}>
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-ink-soft"
            >
              <FaWhatsapp className="size-4.5" aria-hidden="true" />
              Chat via WhatsApp
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3.5 text-sm font-bold transition-colors hover:border-bronze hover:text-bronze"
            >
              Lihat Project
              <LuArrowRight className="size-4.5" aria-hidden="true" />
            </a>
          </div>

          <div className="rise mt-8" style={{ "--delay": "430ms" }}>
            <Socials />
          </div>
        </div>

        <div className="order-2 lg:order-1 lg:col-span-5">
          <div className="rise relative mx-auto w-[min(76vw,340px)] sm:w-90 lg:w-full lg:max-w-105" style={{ "--delay": "200ms" }}>
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-4xl border-2 border-bronze/40"
            />
            <div className="relative aspect-4/5 overflow-hidden rounded-t-[999px] rounded-b-4xl bg-mist">
              <img
                src={profile.photo}
                alt={`Foto ${profile.name}`}
                width="800"
                height="1000"
                fetchPriority="high"
                decoding="async"
                className="size-full object-cover"
              />
            </div>

            <div className="animate-float absolute -right-3 bottom-8 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_30px_-10px_rgba(22,28,39,0.3)] sm:-right-8">
              <p className="text-3xl leading-none font-extrabold text-bronze">{profile.yearsExperience}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
