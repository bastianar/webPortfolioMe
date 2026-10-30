import { profile } from "../data";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 border-t border-white/10 px-5 py-8 sm:flex-row sm:px-6">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-sm font-extrabold text-bronze-light">
            {profile.initials}
          </span>
          <span className="text-sm font-bold">{profile.name}</span>
        </a>
        <p className="text-sm text-white/55">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <Socials dark />
      </div>
    </footer>
  );
}
