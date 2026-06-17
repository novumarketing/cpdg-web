import type { Metadata } from "next";
import { PageHero, CtaBand } from "@/components/ui";
import { WA } from "@/components/site";
import { Blocks, Pencil, BookOpen, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Niveles educativos",
  description: "Preescolar, primaria, secundaria y preparatoria en el Colegio Pedro de Gante, Tulancingo. Un proyecto educativo completo con validez oficial SEP.",
};

const niveles = [
  { id: "preescolar", icon: Blocks, t: "Preescolar", lead: "Los primeros pasos, con cariño y juego.",
    d: "Estimulamos el desarrollo integral de los más pequeños en un ambiente seguro y afectuoso, donde aprenden jugando y descubren el gusto por aprender.",
    items: ["Estimulación temprana y psicomotricidad", "Iniciación al inglés", "Desarrollo socioemocional y valores"] },
  { id: "primaria", icon: Pencil, t: "Primaria", lead: "Bases sólidas para toda la vida.",
    d: "Consolidamos las competencias fundamentales en lectura, escritura y matemáticas, junto con hábitos de estudio y convivencia sana.",
    items: ["Comprensión lectora y razonamiento", "Inglés y tecnología", "Formación en valores y deporte"] },
  { id: "secundaria", icon: BookOpen, t: "Secundaria", lead: "Pensar, decidir y crecer.",
    d: "Acompañamos la etapa de mayor cambio con disciplina positiva, pensamiento crítico y orientación, preparando a los alumnos para el bachillerato.",
    items: ["Pensamiento crítico y método de estudio", "Orientación y tutoría", "Actividades deportivas y culturales"] },
  { id: "preparatoria", icon: GraduationCap, t: "Preparatoria", lead: "Pase directo a las mejores universidades.",
    d: "Preparamos a los jóvenes para el éxito universitario con un programa exigente, orientación vocacional y preparación para el examen de admisión.",
    items: ["Preparación para examen de admisión", "Orientación vocacional", "Validez oficial SEP"] },
];

export default function Niveles() {
  return (
    <main>
      <PageHero kicker="Niveles educativos" title={<>Un camino completo, <span className="grad-text">de preescolar a prepa</span></>}
        sub="Un solo proyecto educativo que acompaña a tu hijo en cada etapa, con la misma identidad y los mismos valores." />

      <section className="py-16 md:py-20">
        <div className="wrap grid gap-12">
          {niveles.map((n, idx) => {
            const Icon = n.icon;
            return (
              <div key={n.id} id={n.id} className="grid scroll-mt-24 items-center gap-10 md:grid-cols-2">
                <div className={`relative h-[300px] overflow-hidden rounded-3xl bg-gradient-to-br from-wine to-wine-2 shadow-soft ${idx % 2 ? "md:order-2" : ""}`}>
                  <div className="grid h-full place-items-center text-center text-white">
                    <div>
                      <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-gold"><Icon className="h-9 w-9" strokeWidth={1.5} aria-hidden /></div>
                      <div className="font-display text-2xl font-bold">{n.t}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="kicker-ink">{n.lead}</span>
                  <h2 className="mt-2 font-display text-[clamp(26px,3.4vw,38px)] font-bold text-wine">{n.t}</h2>
                  <p className="mt-3 text-[16px] text-muted">{n.d}</p>
                  <ul className="mt-4 grid gap-2.5">
                    {n.items.map((it) => (<li key={it} className="flex items-center gap-2.5 text-[14.5px] text-ink"><span className="font-bold text-gold">✓</span> {it}</li>))}
                  </ul>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5 !py-2.5">Informes de {n.t.toLowerCase()}</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand title="¿Listo para conocer el colegio?" sub="Solicita informes del nivel que te interesa y agenda una visita guiada." href={WA} label="Solicitar informes" />
    </main>
  );
}
