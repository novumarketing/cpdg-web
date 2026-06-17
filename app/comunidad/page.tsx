import type { Metadata } from "next";
import { PageHero, SectionHead, CtaBand } from "@/components/ui";
import { WA_VISITA } from "@/components/site";
import { Music, Palette, Languages, Trophy, Dumbbell, Bike, Church, CalendarDays, Users, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Comunidad #SoyPdG",
  description: "Vida estudiantil, deportes PDG Sport, pastoral, eventos y red de exalumnos del Colegio Pedro de Gante en Tulancingo.",
};

const actividades = [
  { icon: Music, t: "Música y arte" },
  { icon: Palette, t: "Talleres creativos" },
  { icon: Languages, t: "Inglés y oratoria" },
  { icon: Camera, t: "Eventos culturales" },
];
const deportes = [
  { icon: Trophy, t: "Fútbol" },
  { icon: Dumbbell, t: "Básquetbol" },
  { icon: Bike, t: "Atletismo" },
  { icon: Users, t: "Voleibol" },
];
const eventos = [
  { t: "Festival cultural", cls: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-wine to-wine-2", h: "h-full min-h-[260px]" },
  { t: "Torneos PDG Sport", cls: "bg-gradient-to-br from-[#9a2a3a] to-wine", h: "h-[200px]" },
  { t: "Convivencias", cls: "bg-gradient-to-br from-gold to-[#b1873b]", h: "h-[200px]" },
  { t: "Pastoral", cls: "bg-gradient-to-br from-wine-2 to-[#3d0b13]", h: "h-[200px]" },
  { t: "Graduaciones", cls: "bg-gradient-to-br from-[#9a2a3a] to-wine-2", h: "h-[200px]" },
];

export default function Comunidad() {
  return (
    <main>
      <PageHero kicker="Comunidad" title={<><span className="grad-text">#SoyPdG</span>: una familia para toda la vida</>}
        sub="Más allá del aula: deporte, arte, pastoral y una red de exalumnos que mantiene viva la identidad Pedro de Gante." />

      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Vida estudiantil" title="Aprender, crear y convivir" sub="Actividades que forman al alumno por completo." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {actividades.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.t} className="rounded-xl2 border border-line bg-white p-7 text-center">
                  <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-[15px] bg-gold-soft text-gold"><Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden /></div>
                  <h3 className="font-display text-[16px] font-semibold text-wine">{a.t}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-bg-2 py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="PDG Sport" title="El deporte como escuela de vida" sub="Disciplina, trabajo en equipo y salud en nuestras canchas." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deportes.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.t} className="rounded-xl2 border border-line bg-white p-7 text-center">
                  <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-[15px] bg-gradient-to-br from-wine to-wine-2 text-white"><Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden /></div>
                  <h3 className="font-display text-[16px] font-semibold text-wine">{d.t}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Eventos" title="Momentos que nos unen" sub="La vida PdG en imágenes." />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {eventos.map((e) => (
              <div key={e.t} className={`relative flex items-end overflow-hidden rounded-2xl p-4 font-display text-sm font-semibold text-white ${e.cls} ${e.h}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-wine-2/70 to-transparent" />
                <span className="relative z-10">{e.t}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-[13.5px] text-muted">* Imágenes de referencia. Próximamente fotografías reales de la comunidad.</p>
        </div>
      </section>

      <section className="bg-bg-2 py-20 md:py-24">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHead kicker="Red PdG · Exalumnos" title="Una vez PdG, siempre PdG" />
            <p className="text-[16px] text-muted">Nuestros egresados forman una red que sigue conectada con el colegio: reencuentros, mentorías y oportunidades. Ser parte de Pedro de Gante es pertenecer a una comunidad para toda la vida.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13.5px] font-medium text-wine ring-1 ring-line"><Users className="h-4 w-4 text-gold" aria-hidden /> Red de exalumnos</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13.5px] font-medium text-wine ring-1 ring-line"><CalendarDays className="h-4 w-4 text-gold" aria-hidden /> Reencuentros</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13.5px] font-medium text-wine ring-1 ring-line"><Church className="h-4 w-4 text-gold" aria-hidden /> Pastoral</span>
            </div>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-3xl bg-gradient-to-br from-wine to-wine-2 shadow-soft">
            <div className="grid h-full place-items-center text-center font-display text-3xl font-bold text-gold">#SoyPdG</div>
          </div>
        </div>
      </section>

      <CtaBand title="Vive la comunidad Pedro de Gante" sub="Agenda una visita y siente el ambiente que hace de PdG una familia." href={WA_VISITA} label="Agendar una visita" />
    </main>
  );
}
