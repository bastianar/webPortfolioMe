import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { profile } from "../data";

const items = [
  { key: "github", label: "GitHub", Icon: FaGithub },
  { key: "linkedin", label: "LinkedIn", Icon: FaLinkedinIn },
  { key: "instagram", label: "Instagram", Icon: FaInstagram },
];

export default function Socials({ dark = false, className = "" }) {
  const tone = dark
    ? "border-white/15 text-white/80 hover:border-bronze-light hover:text-bronze-light"
    : "border-line text-ink hover:border-bronze hover:text-bronze";

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map(({ key, label, Icon }) => (
        <li key={key}>
          <a
            href={profile.socials[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex size-10 items-center justify-center rounded-full border transition-colors ${tone}`}
          >
            <Icon className="size-[18px]" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
