import type { ReactNode } from "react";

export function SectionHead({ kicker, title, sub, center, light }:
  { kicker?: string; title: ReactNode; sub?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`mb-11 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {kicker && <div className={center ? "flex justify-center" : ""}><span className="eyebrow">{kicker}</span></div>}
      <h2 className="mt-4 font-display font-extrabold tracking-tight leading-[1.08]"
        style={{ fontSize:"clamp(1.9rem,3.4vw,2.85rem)", color: light ? "#fff" : "var(--text-strong)" }}>{title}</h2>
      {sub && <p className="mt-4 text-[1.05rem] leading-relaxed" style={{ color: light ? "var(--text-on-dark-muted)" : "var(--text-muted)" }}>{sub}</p>}
    </div>
  );
}

export function PageHero({ kicker, title, sub, children }:
  { kicker: string; title: ReactNode; sub: string; children?: ReactNode }) {
  return (
    <section style={{ padding:"clamp(3rem,6vw,5rem) 0 clamp(2rem,4vw,3rem)", background:"radial-gradient(70% 80% at 50% -10%, rgba(224,48,63,.07), transparent 60%), var(--color-bg)" }}>
      <div className="wrap text-center" style={{ maxWidth:780, marginLeft:"auto", marginRight:"auto" }}>
        <div className="flex justify-center"><span className="eyebrow">{kicker}</span></div>
        <h1 className="font-display font-extrabold tracking-tight leading-[1.04] mt-[18px]"
          style={{ fontSize:"clamp(2.4rem,5.2vw,4rem)", color:"var(--text-strong)" }}>{title}</h1>
        <p className="mt-[18px] mx-auto leading-relaxed"
          style={{ fontSize:"clamp(1.05rem,1.6vw,1.25rem)", color:"var(--text-muted)", maxWidth:"38em" }}>{sub}</p>
        {children}
      </div>
    </section>
  );
}

export function StatsBar({ items }: { items: { n: string; l: string }[] }) {
  return (
    <section style={{ background:"var(--ink-900)" }}>
      <div className="wrap flex flex-wrap items-center justify-between gap-7 py-[clamp(2rem,4vw,3rem)]">
        {items.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display font-extrabold text-white" style={{ fontSize:"clamp(2rem,4vw,3rem)" }}>{s.n}</div>
            <div className="mt-1 text-[14px]" style={{ color:"var(--text-on-dark-muted)" }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({ title, sub, href, label, secondaryLabel, secondaryHref }:
  { title: string; sub: string; href: string; label: string; secondaryLabel?: string; secondaryHref?: string }) {
  return (
    <section style={{ position:"relative", overflow:"hidden", background:"linear-gradient(135deg,var(--red-600),var(--red-800))", color:"#fff" }}>
      <div className="wrap relative text-center z-10" style={{ padding:"clamp(3.5rem,7vw,6rem) 0" }}>
        <h2 className="font-display font-extrabold tracking-tight leading-[1.1] mt-3.5"
          style={{ fontSize:"clamp(2rem,4vw,3rem)" }}>{title}</h2>
        <p className="mx-auto mt-4 text-[1.1rem] leading-relaxed" style={{ color:"rgba(255,255,255,.88)", maxWidth:"36em" }}>{sub}</p>
        <div className="flex flex-wrap justify-center gap-3.5 mt-7">
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-lg"
            style={{ background:"#fff", color:"var(--color-primary)", fontWeight:700 }}>{label}</a>
          {secondaryLabel && secondaryHref && (
            <a href={secondaryHref} className="btn btn-lg"
              style={{ border:"1.5px solid rgba(255,255,255,.55)", color:"#fff", background:"transparent" }}>
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
