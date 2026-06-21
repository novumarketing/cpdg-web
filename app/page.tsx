import Link from "next/link";
import { SectionHead, StatsBar, CtaBand } from "@/components/ui";
import { WA, WA_VISITA } from "@/components/site";
import { ShieldCheck, GraduationCap, MapPin, Check, ArrowRight } from "lucide-react";

function WAIcon({ size = 18 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.78-1.31l-.34-.2-3.55.93.95-3.46-.22-.36a9.36 9.36 0 0 1-1.44-5 9.44 9.44 0 0 1 16.12-6.67 9.37 9.37 0 0 1 2.77 6.68c0 5.2-4.24 9.4-9.43 9.4ZM20.5 3.49A11.36 11.36 0 0 0 12.04.01C5.78.01.69 5.1.69 11.36c0 2 .52 3.95 1.52 5.67L.6 23.4l6.51-1.71a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.39-8.03Z"/></svg>;
}

const NIVELES = [
  { key:"preescolar", accent:"var(--level-preescolar)", tint:"var(--level-preescolar-tint)", idx:1, age:"Primeros pasos", title:"Preescolar", tagline:"Los primeros pasos, con cariÃ±o y juego.", features:["EstimulaciÃ³n temprana y psicomotricidad","IniciaciÃ³n al inglÃ©s"] },
  { key:"primaria",   accent:"var(--level-primaria)",   tint:"var(--level-primaria-tint)",   idx:2, age:"Bases sÃ³lidas",      title:"Primaria",    tagline:"Bases sÃ³lidas para toda la vida.",           features:["ComprensiÃ³n lectora y razonamiento","InglÃ©s y tecnologÃ­a"] },
  { key:"secundaria", accent:"var(--level-secundaria)", tint:"var(--level-secundaria-tint)", idx:3, age:"Pensar y crecer",   title:"Secundaria",  tagline:"Pensar, decidir y crecer.",                  features:["Pensamiento crÃ­tico y mÃ©todo de estudio","OrientaciÃ³n y tutorÃ­a"] },
  { key:"preparatoria",accent:"var(--level-prepa)",    tint:"var(--level-prepa-tint)",      idx:4, age:"Pase a universidad", title:"Preparatoria",tagline:"Pase directo a las mejores universidades.",  features:["PreparaciÃ³n para examen de admisiÃ³n","OrientaciÃ³n vocacional"] },
];

const PILARES = [
  { emoji:"ð", title:"Excelencia acadÃ©mica", desc:"Un modelo exigente que prepara a cada alumno para el siguiente nivel y la universidad." },
  { emoji:"ð¤", title:"FormaciÃ³n en valores",  desc:"EducaciÃ³n integral con acompaÃ±amiento pastoral que forma personas Ã­ntegras." },
  { emoji:"ð¥", title:"Comunidad #SoyPdG",     desc:"Una familia que acompaÃ±a a sus alumnos dentro y fuera del aula, de por vida." },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={{ position:"relative", overflow:"hidden", padding:"clamp(2.5rem,6vw,5.5rem) 0 clamp(3rem,7vw,6rem)", background:"radial-gradient(60% 70% at 88% 8%, rgba(224,48,63,.08), transparent 60%), radial-gradient(50% 60% at 6% 90%, rgba(224,48,63,.05), transparent 60%), var(--color-bg)" }}>
        <div className="wrap grid items-center gap-[clamp(2rem,5vw,5rem)] md:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="fade-up inline-flex items-center gap-[9px] rounded-full bg-white px-4 py-2 text-[13px] font-semibold"
              style={{ color:"var(--color-primary)", border:"1px solid var(--color-primary-border)", boxShadow:"var(--shadow-xs)" }}>
              <span className="h-2 w-2 rounded-full" style={{ background:"var(--color-primary)", boxShadow:"0 0 0 4px var(--color-primary-tint)" }} />
              EducaciÃ³n con valores Â· Tulancingo, Hidalgo
            </div>
            <h1 className="fade-up-1 font-display font-extrabold leading-[1.02] tracking-tight mt-[22px]"
              style={{ fontSize:"clamp(2.6rem,6vw,4.6rem)", color:"var(--text-strong)" }}>
              Desarrollando{" "}
              <em style={{ color:"var(--color-primary)", fontFamily:"var(--font-serif)", fontStyle:"italic", fontWeight:600 }}>talento</em>
              {" "}para la vida
            </h1>
            <p className="fade-up-2 leading-relaxed mt-[22px]"
              style={{ fontSize:"clamp(1.05rem,1.6vw,1.3rem)", color:"var(--text-body)", maxWidth:"30em" }}>
              En el Colegio Pedro de Gante formamos personas Ã­ntegras y preparadas, de preescolar a preparatoria, con excelencia acadÃ©mica y una sÃ³lida formaciÃ³n en valores.
            </p>
            <div className="fade-up-3 flex flex-wrap gap-3.5 mt-[30px]">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg"><WAIcon /> Solicitar informes</a>
              <Link href="/niveles" className="btn btn-outline btn-lg">Conoce los niveles <ArrowRight size={18} aria-hidden /></Link>
            </div>
            <div className="fade-up-3 flex flex-wrap gap-6 mt-[30px] pt-[26px]" style={{ borderTop:"1px solid var(--border)" }}>
              {[{ I:ShieldCheck, t:"Incorporado a la SEP" },{ I:GraduationCap, t:"Pase a universidad" },{ I:MapPin, t:"Dos campus" }].map(({ I, t }) => (
                <span key={t} className="inline-flex items-center gap-2 text-[14px] font-semibold" style={{ color:"var(--text-muted)" }}>
                  <I size={17} style={{ color:"var(--color-primary)" }} aria-hidden /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[var(--radius-xl)] overflow-hidden shadow-xl flex items-center justify-center"
              style={{ background:"linear-gradient(135deg,var(--ink-100),var(--paper-2))", aspectRatio:"4/5" }}>
              <div className="text-center p-8">
                <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full font-display text-4xl font-extrabold text-white"
                  style={{ background:"linear-gradient(135deg,var(--red-600),var(--red-800))" }}>P</div>
                <div className="font-display text-2xl font-bold" style={{ color:"var(--text-strong)" }}>Colegio Pedro de Gante</div>
                <div className="mt-1 text-sm" style={{ color:"var(--text-muted)" }}>#SoyPdG Â· Comunidad de por vida</div>
              </div>
            </div>
            <div className="absolute -left-4 bottom-7 rounded-[var(--radius-md)] bg-white p-4 flex flex-col gap-0.5 shadow-lg" style={{ minWidth:180 }}>
              <span className="font-display font-extrabold text-[18px]" style={{ color:"var(--color-primary)" }}>#SoyPdG</span>
              <strong className="text-[15px]" style={{ color:"var(--text-strong)" }}>Comunidad de por vida</strong>
              <span className="text-[12.5px]" style={{ color:"var(--text-muted)" }}>desde el corazÃ³n de Tulancingo</span>
            </div>
          </div>
        </div>
      </section>

      <StatsBar items={[{ n:"4", l:"Niveles educativos" },{ n:"2", l:"Campus en Tulancingo" },{ n:"100%", l:"Validez oficial SEP" },{ n:"#SoyPdG", l:"Comunidad de por vida" }]} />

      {/* NIVELES */}
      <section style={{ padding:"var(--section-y) 0" }}>
        <div className="wrap">
          <SectionHead kicker="Modelo educativo" title="Un camino completo, de preescolar a prepa"
            sub="AcompaÃ±amos a tu hijo en cada etapa con un proyecto educativo coherente y centrado en la persona." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {NIVELES.map((n) => (
              <Link key={n.key} href={`/niveles#${n.key}`}
                className="group rounded-[var(--radius-lg)] p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ background:"var(--color-surface)", border:"1px solid var(--border)", boxShadow:"var(--shadow-xs)" }}>
                <div className="h-1.5 w-12 rounded-full mb-5" style={{ background:n.accent }} />
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-[var(--radius-md)] font-display text-xl font-extrabold"
                  style={{ background:n.tint, color:n.accent }}>{n.idx}</div>
                <div className="text-[11.5px] font-semibold uppercase tracking-wide mb-1" style={{ color:n.accent }}>{n.age}</div>
                <h3 className="font-display text-[19px] font-bold mb-2" style={{ color:"var(--text-strong)" }}>{n.title}</h3>
                <p className="text-[14px] leading-relaxed mb-4" style={{ color:"var(--text-muted)" }}>{n.tagline}</p>
                <ul className="flex flex-col gap-2 mb-5">
                  {n.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[13px]" style={{ color:"var(--text-body)" }}>
                      <span className="grid h-5 w-5 place-items-center rounded-full shrink-0" style={{ background:n.tint, color:n.accent }}>
                        <Check size={11} strokeWidth={3} aria-hidden />
                      </span>{f}
                    </li>
                  ))}
                </ul>
                <span className="text-[13.5px] font-semibold" style={{ color:n.accent }}>Conocer mÃ¡s â</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section style={{ background:"var(--ink-900)", padding:"var(--section-y) 0" }}>
        <div className="wrap">
          <SectionHead light kicker="Por quÃ© Pedro de Gante" title="Formamos para la vida, no solo para el examen" sub="Tres pilares que distinguen nuestra propuesta educativa." />
          <div className="grid gap-6 md:grid-cols-3">
            {PILARES.map((p) => (
              <div key={p.title} className="rounded-[var(--radius-lg)] p-8" style={{ background:"rgba(255,255,255,.05)", border:"1px solid var(--border-on-dark)" }}>
                <div className="text-4xl mb-5">{p.emoji}</div>
                <h3 className="font-display text-[19px] font-bold text-white mb-2">{p.title}</h3>
                <p className="text-[14.5px] leading-relaxed" style={{ color:"var(--text-on-dark-muted)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-11 text-center">
            <Link href="/nuestra-esencia" className="btn btn-outline btn-lg" style={{ borderColor:"rgba(255,255,255,.45)", color:"#fff", background:"transparent" }}>
              Conoce nuestra esencia <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title="Vive la experiencia Pedro de Gante"
        sub="Agenda una visita guiada y conoce por quÃ© somos una familia educativa desde hace generaciones."
        href={WA_VISITA} label="Agendar una visita" secondaryLabel="Ir a contacto" secondaryHref="/contacto" />
    </main>
  );
}
