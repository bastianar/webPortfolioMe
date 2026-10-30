import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { LuMail, LuMapPin, LuSend } from "react-icons/lu";
import { profile } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Socials from "./Socials";

const details = [
  { Icon: FaWhatsapp, label: "WhatsApp", value: `+${profile.whatsapp}`, href: `https://wa.me/${profile.whatsapp}` },
  { Icon: LuMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { Icon: LuMapPin, label: "Lokasi", value: profile.location },
];

const field =
  "mt-2 w-full rounded-xl border border-white/15 bg-ink px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors focus:border-bronze-light focus:outline-none";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Tidak ada backend: pesan dikirim lewat chat WhatsApp dengan teks yang sudah terisi
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo ${profile.firstName}, saya ${name.trim()}.\n\n${message.trim()}`;
    window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-ink py-24 text-white sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow="Contact me" title="Get In Touch." light />
          <Reveal delay={100}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
              Terima kasih telah menyempatkan waktunya untuk melihat portfolio saya.
              Saya selalu mencari kesempatan untuk belajar, berkreasi, dan terus berkembang sebagai seorang developer.
            </p>

            <ul className="mt-8 space-y-5">
              {details.map(({ Icon, label, value, href }) => {
                const body = (
                  <>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/8 text-bronze-light">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium text-white/55">{label}</span>
                      <span className="block truncate text-sm font-semibold">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 hover:text-bronze-light">
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <Socials dark className="mt-8" />
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-ink-soft p-6 sm:p-8">
            <label className="block text-sm font-semibold">
              Nama
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama Anda" autoComplete="name" className={field} />
            </label>
            <label className="mt-5 block text-sm font-semibold">
              Pesan
              <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Pesan..." className={`${field} resize-none`} />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-bronze px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-bronze-light hover:text-ink sm:w-auto"
            >
              <LuSend className="size-4.5" aria-hidden="true" />
              Kirim lewat WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
