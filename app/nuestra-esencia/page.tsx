import type { Metadata } from "next";
import { PageHero, SectionHead, StatsBar, CtaBand } from "@/components/ui";
import { WA_VISITA } from "@/components/site";
import { Church, Heart, Lightbulb, ShieldCheck, Compass, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuestra esencia",
  description: "Historia, misión, visión y valores del Colegio Pedro de Gante. Educación con formación pastoral en Tulancingo, Hidalgo.",
};

const valores = [
  { icon: Heart, t: "Amor y servicio", d: "Educamos el corazón para servir a los demás." },
  { icon: ShieldCheck, t: "Responsabilidad", d: "Hábitos y compromiso que acompañan toda la vida." },
  { icon: Lightbulb, t: "Pensamiento crítico", d: "Alumnos que cuestionan, analizan y proponen." },
  { icon: Users, t: "Comunidad", d: "Una familia que se acompaña dentro y fuera del aula." },
];

export default function Esencia() {
  return (
    <main>
      <PageHero kicker="Nuestra esencia" title={<>Educar la mente y el <span className="grad-text">corazón</span></>}
        sub="Somos una comunidad educativa con identidad propia: excelencia académica y una sólida formación humana y en valores." />

      <section className="py-20 md:py-24">
        <div className="wrap grid items-center gap-14 md:grid-cols-2">
          <div className="relative h-[420px] overflow-hidden rounded-3xl bg-gradient-to-br from-wine to-wine-2 shadow-soft">
            <div className="grid h-full place-items-center p-8 text-center font-display text-2xl font-bold text-white/90">
              Colegio Pedro de Gante<br /><span className="mt-2 text-base font-medium text-[#e7d6cf]">Desarrollando talento para la vida</span>
            </div>
          </div>
          <div>
            <SectionHead kicker="Nuestra historia" title="Una tradición educativa en Tulancingo" />
            <p className="text-[16.5px] text-muted">El Colegio Pedro de Gante ha acompañado a generaciones de familias de Tulancingo con un proyecto educativo que une la formación académica con los valores. Tomamos el nombre de fray Pedro de Gante, pionero de la educación, como recordatorio de nuestra vocación: formar personas íntegras al servicio de su comunidad.</p>
            <p className="mt-4 text-[16.5px] text-muted">Hoy ofrecemos un camino completo —preescolar, primaria, secundaria y preparatoria— en dos campus, con acompañamiento cercano en cada etapa.</p>
          </div>
        </div>
      </section>

      <section className="bg-bg-2 py-20 md:py-24">
        <div className="wrap grid gap-8 md:grid-cols-2">
          <div className="rounded-xl2 border border-line bg-white p-8">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-[13px] bg-wine-soft text-wine"><Compass className="h-6 w-6" aria-hidden /></div>
            <h3 className="font-display text-xl font-semibold text-wine">Misión</h3>
            <p className="mt-3 text-[15.5px] text-muted">Formar personas competentes, críticas y comprometidas, mediante una educación integral de calidad sustentada en valores humanos y cristianos.</p>
          </div>
          <div className="rounded-xl2 border border-line bg-white p-8">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-[13px] bg-gold-soft text-gold"><Church className="h-6 w-6" aria-hidden /></div>
            <h3 className="font-display text-xl font-semibold text-wine">Visión</h3>
            <p className="mt-3 text-[15.5px] text-muted">Ser una comunidad educativa de referencia en la región por la calidad de sus egresados, su acompañamiento cercano y su compromiso con la formación en valores.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Nuestros valores" title="Lo que vivimos cada día" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.t} className="rounded-xl2 border border-line bg-white p-7 text-center">
                  <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-[15px] bg-gradient-to-br from-wine to-wine-2 text-white"><Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden /></div>
                  <h3 className="font-display text-[17px] font-semibold text-wine">{v.t}</h3>
                  <p className="mt-2 text-[14px] text-muted">{v.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <StatsBar items={[
        { n: "4", l: "Niveles educativos" },
        { n: "2", l: "Campus en Tulancingo" },
        { n: "100%", l: "Validez oficial SEP" },
        { n: "#SoyPdG", l: "Comunidad de por vida" },
      ]} />

      <CtaBand title="Conócenos de cerca" sub="Te invitamos a una visita guiada para vivir el ambiente Pedro de Gante." href={WA_VISITA} label="Agendar una visita" />
    </main>
  );
}
