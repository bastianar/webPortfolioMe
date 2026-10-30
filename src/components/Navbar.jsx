import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { profile } from "../data";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const sectionIds = ["home", "about", "experience", "projects", "skills", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Tandai menu sesuai section yang sedang terlihat di tengah layar
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-paper/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6" aria-label="Navigasi utama">
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-xl bg-ink text-sm font-extrabold text-bronze-light">
            {profile.initials}
          </span>
          <span className="text-base font-bold tracking-tight">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`relative py-2 text-sm font-semibold transition-colors hover:text-bronze ${
                  active === l.id ? "text-bronze" : "text-ink"
                } after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-bronze after:transition-transform ${
                  active === l.id ? "after:scale-x-100" : "after:scale-x-0"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <LuX className="size-5" /> : <LuMenu className="size-5" />}
        </button>
      </nav>

      <div
        id="menu-mobile"
        className={`grid transition-[grid-template-rows] duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <ul className="overflow-hidden px-5">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={`block border-t border-line py-4 text-base font-semibold ${active === l.id ? "text-bronze" : "text-ink"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
