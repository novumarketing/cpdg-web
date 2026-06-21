import { Phone, Mail } from "lucide-react";
import { PHONE, EMAIL, SOCIALS } from "./site";

function FacebookIcon() {
  return <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.06 5.66 21.2 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.2 22 17.06 22 12.06Z"/></svg>;
}
function InstagramIcon() {
  return <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>;
}
const BRAND: Record<string, React.FC> = { facebook: FacebookIcon, instagram: InstagramIcon };

export default function TopBar() {
  return (
    <div className="hidden md:block" style={{ background: "var(--ink-900)", color: "var(--text-on-dark-muted)" }}>
      <div className="wrap flex h-[38px] items-center justify-between text-[12.5px]">
        <div className="flex items-center gap-[22px]">
          <a href={`tel:+52${PHONE.replace(/\s/g,"")}`} className="inline-flex items-center gap-[7px] transition hover:text-white">
            <Phone size={14} aria-hidden /> {PHONE}
          </a>
          <a href={`mailto:${EMAIL}`} className="hidden items-center gap-[7px] transition hover:text-white lg:inline-flex">
            <Mail size={14} aria-hidden /> {EMAIL}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span>SÃ­guenos</span>
          {SOCIALS.filter((s) => BRAND[s.key]).map((s) => {
            const Icon = BRAND[s.key];
            return (
              <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                className="inline-flex transition hover:text-white hover:-translate-y-px">
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
