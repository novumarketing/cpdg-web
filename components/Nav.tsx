"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV, WA } from "./site";

function WAIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.78-1.31l-.34-.2-3.55.93.95-3.46-.22-.36a9.36 9.36 0 0 1-1.44-5 9.44 9.44 0 0 1 16.12-6.67 9.37 9.37 0 0 1 2.77 6.68c0 5.2-4.24 9.4-9.43 9.4ZM20.5 3.49A11.36 11.36 0 0 0 12.04.01C5.78.01.69 5.1.69 11.36c0 2 .52 3.95 1.52 5.67L.6 23.4l6.51-1.71a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.39-8.03Z"/></svg>;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="sticky top-0 z-40"
      style={{
        background: "rgba(251,247,242,0.92)",
        backdropFilter: "saturate(160%) blur(12px)",
        borderBottom: "1px solid var(--ink-200)",
        boxShadow: scrolled ? "var(--shadow-md)" : "none",
        transition: "box-shadow var(--dur-base)",
      }}>
      <div className="wrap flex h-[76px] items-center gap-6">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="grid h-11 w-11 place-items-center rounded-full font-display text-lg font-bold text-white"
            style={{ background:"linear-gradient(135deg,var(--red-600),var(--red-800))", boxShadow:"0 6px 18px rgba(196,30,46,.35)" }}>P</div>
          <div className="leading-tight">
            <b className="block font-display text-[17px] font-bold" style={{ color:"var(--ink-900)" }}>Pedro de Gante</b>
            <span className="text-[10px] uppercase tracking-[0.16em]" style={{ color:"var(--ink-500)" }}>Colegio Â· Tulancingo</span>
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
          {NAV.map((n) => {
            const active = path === n.href;
            return (
              <Link key={n.href} href={n.href}
                className="relative px-[14px] py-[9px] text-[15px] font-semibold rounded-[10px] transition-all"
                style={{ color: active ? "var(--color-primary)" : "var(--text-body)", background: active ? "var(--color-primary-tint)" : "transparent" }}>
                {n.label}
                {active && <span className="absolute bottom-[2px] left-[14px] right-[14px] h-[2px] rounded-full" style={{ background:"var(--color-primary)" }} />}
              </Link>
            );
          })}
        </nav>

        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm hidden lg:inline-flex">
          <WAIcon size={16} /> Informes
        </a>

        <button aria-label="MenÃº" aria-expanded={open} onClick={() => setOpen(v => !v)} className="ml-auto lg:hidden" style={{ color:"var(--ink-900)" }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="px-6 pb-5 pt-3.5 lg:hidden"
          style={{ borderTop:"1px solid var(--border)", background:"var(--color-surface)", boxShadow:"var(--shadow-lg)" }}>
          <nav className="flex flex-col mb-3.5">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
                className="py-[13px] px-3 text-[16px] font-semibold rounded-[10px] transition-colors"
                style={{ color: path === n.href ? "var(--color-primary)" : "var(--text-body)" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full justify-center">
            <WAIcon size={16} /> Solicitar informes
          </a>
        </div>
      )}
    </div>
  );
}
