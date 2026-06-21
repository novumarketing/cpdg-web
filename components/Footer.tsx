import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { NAV, PHONE, EMAIL, CAMPUS, SOCIALS } from "./site";

function FBIcon() {
  return <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.06 5.66 21.2 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.2 22 17.06 22 12.06Z"/></svg>;
}
function IGIcon() {
  return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>;
}
const BRAND: Record<string, React.FC> = { facebook: FBIcon, instagram: IGIcon };

export default function Footer() {
  return (
    <footer style={{ background:"var(--ink-900)", color:"var(--text-on-dark-muted)" }} className="pt-[clamp(3rem,5vw,4.5rem)] pb-7">
      <div className="wrap">
        <div className="grid gap-10 pb-9 md:grid-cols-[1.6fr_1fr_1.6fr]" style={{ borderBottom:"1px solid var(--border-on-dark)" }}>
          <div>
            <div className="flex items-center gap-3 mb-[18px]">
              <div className="grid h-11 w-11 place-items-center rounded-full font-display text-lg font-bold text-white"
                style={{ background:"linear-gradient(135deg,var(--red-600),var(--red-800))" }}>P</div>
              <div className="leading-tight">
                <b className="block font-display text-[17px] font-bold text-white">Pedro de Gante</b>
                <span className="text-[10px] uppercase tracking-[0.16em]" style={{ color:"var(--text-on-dark-muted)" }}>Colegio · Tulancingo</span>
              </div>
            </div>
            <p className="text-sm max-w-xs mb-[18px]" style={{ color:"var(--text-on-dark-muted)", lineHeight:1.6 }}>
              Desarrollando talento para la vida. Educación con valores, de preescolar a preparatoria en Tulancingo, Hidalgo.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.filter((s) => BRAND[s.key]).map((s) => {
                const Icon = BRAND[s.key];
                return (
                  <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                    className="grid h-[38px] w-[38px] place-items-center rounded-[10px] text-white transition hover:bg-[var(--color-primary)]"
                    style={{ background:"rgba(255,255,255,0.06)" }}>
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-white mb-4">Navegación</h4>
            <ul className="flex flex-col gap-2.5">
              {NAV.map((n) => (
                <li key={n.href}><Link href={n.href} className="text-[14.5px] transition hover:text-white" style={{ color:"var(--text-on-dark-muted)" }}>{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-white mb-4">Contacto</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href={`tel:+52${PHONE.replace(/\s/g,"")}`} className="flex items-center gap-[9px] text-[14.5px] transition hover:text-white" style={{ color:"var(--text-on-dark-muted)" }}><Phone size={15} aria-hidden /> {PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-[9px] text-[14.5px] transition hover:text-white" style={{ color:"var(--text-on-dark-muted)" }}><Mail size={15} aria-hidden /> {EMAIL}</a></li>
              {CAMPUS.map((c) => (
                <li key={c.nombre} className="flex items-start gap-[9px] text-[14.5px]" style={{ color:"var(--text-on-dark-muted)", lineHeight:1.5 }}>
                  <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden />
                  <span><b className="text-white font-semibold">{c.nombre}:</b> {c.dir}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-[22px] text-[13px]" style={{ color:"var(--text-faint)" }}>
          <span>© {new Date().getFullYear()} Colegio Pedro de Gante. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <Link href="/aviso-de-privacidad" className="transition hover:text-white">Aviso de Privacidad</Link>
            <span>Desarrollado por{" "}
              <a href="https://novumarketing.vercel.app" target="_blank" rel="noopener noreferrer"
                className="font-semibold transition hover:text-white" style={{ color:"var(--gold-500)" }}>NOVU</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
