import Link from "next/link";
import { SectionHead, StatsBar, CtaBand } from "@/components/ui";
import { WA, WA_VISITA } from "@/components/site";
import { Blocks, Pencil, BookOpen, GraduationCap, Church, Trophy, HeartHandshake, Sparkles } from "lucide-react";

const niveles = [
  { icon: Blocks, t: "Preescolar", d: "Primeros pasos con cariño, juego y valores.", href: "/niveles#preescolar" },
  { icon: Pencil, t: "Primaria", d: "Bases sólidas en lectura, matemáticas y convivencia.", href: "/niveles#primaria" },
  { icon: BookOpen, t: "Secundaria", d: "Pensamiento crítico, disciplina y acompañamiento.", href: "/niveles#secundaria" },
  { icon: GraduationCap, t: "Preparatoria", d: "Pase directo a las mejores universidades.", href: "/niveles#preparatoria" },
];
const pilares = [
  { icon: Trophy, t: "Excelencia académica", d: "Un modelo exigente que prepara a cada alumno para el siguiente nivel y la universidad." },
  { icon: Church, t: "Formación en valores", d: "Educación integral con acompañamiento pastoral que forma personas íntegras." },
  { icon: HeartHandshake, t: "Comunidad #SoyPdG", d: "Una familia que acompaña a sus alumnos dentro y fuera del aula, de por vida." },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-2 to-white">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[460px] w-[460px] rounded-full bg-[#f0d9dd] opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-[#f4ecdd] opacity-70 blur-3xl" />
        <div className="wrap relative z-10 grid items-center gap-12 py-16 md:grid-cols-[1.08fr_.92fr] md:py-24">
          <div>
            <span className="fade-up inline-flex items-center gap-2 rounded-full bg-wine-soft px-4 py-2 text-[12.5px] font-semibold text-wine">
              <span className="h-2 w-2 rounded-full bg-gold" /> Educación con valores · Tulancingo, Hidalgo
            </span>
            <h1 className="fade-up-1 mt-5 font-display text-[clamp(34px,5.2vw,58px)] font-extrabold leading-[1.04] text-wine">
              Desarrollando <span className="grad-text">talento</span> para la vida
            </h1>
            <p className="fade-up-2 mt-5 max-w-xl text-lg text-muted">
              En el Colegio Pedro de Gante formamos personas íntegras y preparadas, de preescolar a preparatoria, con excelencia académica y una sólida formación en valores.
            </p>
            <div className="fade-up-3 mt-8 flex flex-wrap gap-3.5">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Solicitar informes</a>
              <Link href="/niveles" className="btn btn-ghost">Conoce los niveles</Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-6">
              {["Incorporado a la SEP", "Pase a universidad", "Dos campus"].map((t) => (
                <div key={t} className="flex items-center gap-2.5 text-[13.5px] font-medium text-muted">
                  <Sparkles className="h-4 w-4 text-gold" aria-hidden /> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid h-[420px] place-items-center rounded-3xl bg-gradient-to-br from-wine to-wine-2 text-center text-white shadow-soft">
              <div>
                <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-white/10 font-display text-4xl font-bold text-gold ring-1 ring-white/20">P</div>
                <div className="font-display text-2xl font-bold">Colegio Pedro de Gante</div>
                <div className="mt-1 text-sm text-[#e7d6cf]">#SoyPdG · desde el corazón de Tulancingo</div>
              </div>
            </div>
            <div className="absolute -left-5 -top-4 hidden animate-floaty items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-soft sm:flex">
              <Church className="h-5 w-5 text-gold" aria-hidden /><span className="font-display text-[13px] font-semibold text-wine">Educación con valores</span>
            </div>
          </div>
        </div>
      </section>

      <StatsBar items={[
        { n: "4", l: "Niveles educativos" },
        { n: "2", l: "Campus en Tulancingo" },
        { n: "100%", l: "Validez oficial SEP" },
        { n: "#SoyPdG", l: "Comunidad de por vida" },
      ]} />

      {/* NIVELES */}
      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Modelo educativo" title="Un camino completo, de preescolar a prepa" sub="Acompañamos a tu hijo en cada etapa con un proyecto educativo coherente y centrado en la persona." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {niveles.map((n) => {
              const Icon = n.icon;
              return (
                <Link key={n.t} href={n.href} className="group rounded-xl2 border border-line bg-white p-7 transition hover:-translate-y-1.5 hover:border-[#e6c9cf] hover:shadow-soft">
                  <div className="mb-4 grid h-14 w-14 place-items-center rounded-[15px] bg-gradient-to-br from-wine to-wine-2 text-white"><Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden /></div>
                  <h3 className="font-display text-[19px] font-semibold text-wine">{n.t}</h3>
                  <p className="mt-2 text-[14.5px] text-muted">{n.d}</p>
                  <span className="mt-3 inline-block text-[13.5px] font-semibold text-wine group-hover:underline">Conocer más →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-bg-2 py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Por qué Pedro de Gante" title="Formamos para la vida, no solo para el examen" sub="Tres pilares que distinguen nuestra propuesta educativa." />
          <div className="grid gap-6 md:grid-cols-3">
            {pilares.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.t} className="rounded-xl2 border border-line bg-white p-8">
                  <div className="mb-4 grid h-14 w-14 place-items-center rounded-[15px] bg-gold-soft text-gold"><Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden /></div>
                  <h3 className="font-display text-[19px] font-semibold text-wine">{p.t}</h3>
                  <p className="mt-2 text-[14.5px] text-muted">{p.d}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center"><Link href="/nuestra-esencia" className="font-semibold text-wine hover:underline">Conoce nuestra esencia →</Link></div>
        </div>
      </section>

      <CtaBand title="Vive la experiencia Pedro de Gante" sub="Agenda una visita guiada y conoce por qué somos una familia educativa desde hace generaciones." href={WA_VISITA} label="Agendar una visita" />
    </main>
  );
}
