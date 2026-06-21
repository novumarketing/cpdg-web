import type { Metadata } from "next";
import { CtaBand } from "@/components/ui";
import { WA } from "@/components/site";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Niveles educativos",
  description: "Preescolar, primaria, secundaria y preparatoria en el Colegio Pedro de Gante, Tulancingo.",
};

const NIVELES = [
  { id:"preescolar",  accent:"var(--level-preescolar)", tint:"var(--level-preescolar-tint)", idx:1, age:"Primeros pasos",    title:"Preescolar",   tagline:"Los primeros pasos, con cariño y juego.",            desc:"Estimulamos el desarrollo integral de los más pequeños en un ambiente seguro y afectuoso, donde aprenden jugando y descubren el gusto por aprender.", features:["Estimulación temprana y psicomotricidad","Iniciación al inglés","Desarrollo socioemocional y valores"] },
  { id:"primaria",    accent:"var(--level-primaria)",   tint:"var(--level-primaria-tint)",   idx:2, age:"Bases sólidas",     title:"Primaria",     tagline:"Bases sólidas para toda la vida.",                   desc:"Consolidamos las competencias fundamentales en lectura, escritura y matemáticas, junto con hábitos de estudio y convivencia sana.", features:["Comprensión lectora y razonamiento","Inglés y tecnología","Formación en valores y deporte"] },
  { id:"secundaria",  accent:"var(--level-secundaria)", tint:"var(--level-secundaria-tint)", idx:3, age:"Pensar y crecer",   title:"Secundaria",   tagline:"Pensar, decidir y crecer.",                          desc:"Acompañamos la etapa de mayor cambio con disciplina positiva, pensamiento crítico y orientación, preparando a los alumnos para el bachillerato.", features:["Pensamiento crítico y método de estudio","Orientación y tutoría","Actividades deportivas y culturales"] },
  { id:"preparatoria",accent:"var(--level-prepa)",     tint:"var(--level-prepa-tint)",      idx:4, age:"Pase a universidad",title:"Preparatoria", tagline:"Pase directo a las mejores universidades.",          desc:"Preparamos a los jóvenes para el éxito universitario con un programa exigente, orientación vocacional y preparación para el examen de admisión.", features:["Preparación para examen de admisión","Orientación vocacional","Validez oficial SEP"] },
];

function WAIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.78-1.31l-.34-.2-3.55.93.95-3.46-.22-.36a9.36 9.36 0 0 1-1.44-5 9.44 9.44 0 0 1 16.12-6.67 9.37 9.37 0 0 1 2.77 6.68c0 5.2-4.24 9.4-9.43 9.4ZM20.5 3.49A11.36 11.36 0 0 0 12.04.01C5.78.01.69 5.1.69 11.36c0 2 .52 3.95 1.52 5.67L.6 23.4l6.51-1.71a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.39-8.03Z"/></svg>;
}

export default function Niveles() {
  return (
    <section>
      <section style={{ padding:"clamp(3rem,6vw,5rem) 0 clamp(2rem,4vw,3rem)", background:"radial-gradient(70% 80% at 50% -10%, rgba(224,48,63,.07), transparent 60%), var(--color-bg)" }}>
        <div className="wrap text-center" style={{ maxWidth:780, marginLeft:"auto", marginRight:"auto" }}>
          <div className="flex justify-center"><span className="eyebrow">Niveles educativos</span></div>
          <h1 className="font-display font-extrabold tracking-tight leading-[1.04] mt-[18px]"
            style={{ fontSize:"clamp(2.4rem,5.2vw,4rem)", color:"var(--text-strong)" }}>Un camino completo,<br />de preescolar a prepa</h1>
          <p className="mt-[18px] mx-auto leading-relaxed" style={{ fontSize:"clamp(1.05rem,1.6vw,1.25rem)", color:"var(--text-muted)", maxWidth:"38em" }}>Un solo proyecto educativo que acompaña a tu hijo en cada etapa, con la misma identidad y los mismos valores.</p>
        </div>
      </section>

      <section style={{ padding:"clamp(3rem,5vw,4.5rem) 0" }}>
        <div className="wrap flex flex-col gap-[clamp(3rem,6vw,5.5rem)]">
          {NIVELES.map((n, i) => (
            <article key={n.id} id={n.id} className="scroll-mt-24 grid items-center gap-[clamp(2rem,4vw,4rem)] md:grid-cols-[.95fr_1.05fr]">
              <div className={`relative ${i % 2 ? "md:order-2" : ""}`}>
                <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-lg flex items-center justify-center"
                  style={{ aspectRatio:"4/3", background:`linear-gradient(135deg,${n.tint},var(--paper-2))` }}>
                  <div className="text-center p-6">
                    <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-[var(--radius-md)] font-display text-2xl font-extrabold"
                      style={{ background:n.tint, color:n.accent }}>{n.idx}</div>
                    <div className="font-display text-xl font-bold" style={{ color:n.accent }}>{n.title}</div>
                  </div>
                </div>
                <span className="absolute top-4 left-4 text-[12.5px] font-bold text-white px-[13px] py-1.5 rounded-full"
                  style={{ background:n.accent, boxShadow:"var(--shadow-sm)" }}>{n.age}</span>
              </div>
              <div>
                <div className="mb-4 grid h-[46px] w-[46px] place-items-center rounded-[var(--radius-md)] font-display text-[22px] font-extrabold"
                  style={{ background:n.tint, color:n.accent }}>{n.idx}</div>
                <span className="block font-bold text-[14px] tracking-[.01em] mb-1.5" style={{ color:n.accent }}>{n.tagline}</span>
                <h2 className="font-display font-extrabold tracking-tight leading-[1.1]"
                  style={{ fontSize:"clamp(1.7rem,3vw,2.3rem)", color:"var(--text-strong)" }}>{n.title}</h2>
                <p className="mt-3.5 leading-[1.65] text-[1.05rem]" style={{ color:"var(--text-body)", maxWidth:"34em" }}>{n.desc}</p>
                <ul className="mt-5 flex flex-col gap-3 mb-6">
                  {n.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[15px]" style={{ color:"var(--text-body)" }}>
                      <span className="grid h-6 w-6 place-items-center rounded-full shrink-0" style={{ background:n.tint, color:n.accent }}><Check size={15} strokeWidth={3} aria-hidden /></span>{f}
                    </li>
                  ))}
                </ul>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><WAIcon /> Informes de {n.title.toLowerCase()}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="¿Listo para conocer el colegio?" sub="Solicita informes del nivel que te interesa y agenda una visita guiada."
        href={WA} label="Solicitar informes" secondaryLabel="Ver admisiones" secondaryHref="/admisiones" />
    </section>
  );
}
