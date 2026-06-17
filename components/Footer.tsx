import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { NAV, PHONE, EMAIL, CAMPUS, SOCIALS } from "./site";
const ICONS: Record<string, typeof Facebook> = { facebook: Facebook, instagram: Instagram };

export default function Footer() {
  return (
    <footer className="bg-wine-2 pt-16 pb-7 text-[#e7d6cf]">
      <div className="wrap">
        <div className="grid gap-10 border-b border-white/10 pb-9 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-wine to-wine-2 font-display text-xl font-bold text-white ring-1 ring-white/20">P</div>
              <div className="leading-tight"><b className="block font-display text-[18px] font-bold text-white">Pedro de Gante</b><span className="text-[10.5px] uppercase tracking-[0.16em] text-[#caa9a0]">Colegio · Tulancingo</span></div>
            </div>
            <p className="max-w-xs text-sm text-[#caa9a0]">Desarrollando talento para la vida. Educación con valores, de preescolar a preparatoria en Tulancingo, Hidalgo.</p>
            <div className="mt-4 flex items-center gap-3">
              {SOCIALS.filter((s) => ICONS[s.key]).map((s) => { const Icon = ICONS[s.key]; return (
                <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"><Icon className="h-4 w-4" aria-hidden /></a>
              ); })}
            </div>
          </div>
          <div>
            <h5 className="mb-4 font-display text-sm uppercase tracking-wide text-white">Navegación</h5>
            <ul className="grid gap-2.5">{NAV.map((n) => (<li key={n.href}><Link href={n.href} className="text-sm text-[#caa9a0] transition hover:text-white">{n.label}</Link></li>))}</ul>
          </div>
          <div>
            <h5 className="mb-4 font-display text-sm uppercase tracking-wide text-white">Contacto</h5>
            <ul className="grid gap-2.5 text-sm text-[#caa9a0]">
              <li>{PHONE}</li><li>{EMAIL}</li>
              {CAMPUS.map((c) => (<li key={c.nombre}><b className="text-[#e7d6cf]">{c.nombre}:</b> {c.dir}</li>))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-6 text-[13px] text-[#b58a82]">
          <span>© {new Date().getFullYear()} Colegio Pedro de Gante. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <Link href="/aviso-de-privacidad" className="transition hover:text-white">Aviso de Privacidad</Link>
            <span>Desarrollado por <a href="https://novu-web-ten.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold text-gold">NOVU</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
