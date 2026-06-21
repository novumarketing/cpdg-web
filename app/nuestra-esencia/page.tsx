import type { Metadata } from "next";
import { CtaBand, SectionHead } from "@/components/ui";
import { WA } from "@/components/site";

export const metadata: Metadata = {
  title: "Nuestra esencia",
  description: "Conoce la misiÃ³n, visiÃ³n y valores del Colegio Pedro de Gante en Tulancingo.",
};

const PILARES = [
  { icon:"ð", title:"Excelencia acadÃ©mica",  desc:"Programas rigurosos y actualizados que desarrollan el pensamiento crÃ­tico y preparan a nuestros alumnos para el Ã©xito universitario." },
  { icon:"â¤ï¸", title:"FormaciÃ³n en valores",   desc:"Educamos con integridad, respeto y responsabilidad social, cultivando ciudadanos comprometidos con su comunidad." },
  { icon:"ð", title:"VisiÃ³n global",           desc:"Fomentamos la apertura al mundo con inglÃ©s, tecnologÃ­a y actividades interculturales que amplÃ­an horizontes." },
  { icon:"ð¤", title:"Comunidad y familia",     desc:"Creemos en la alianza escuela-familia como pilar de una educaciÃ³n integral y duradera." },
  { icon:"ð", title:"Desarrollo integral",     desc:"Deportes, arte y cultura completan la formaciÃ³n acadÃ©mica para un crecimiento pleno y equilibrado." },
  { icon:"ð", title:"Herencia y tradiciÃ³n",    desc:"75 aÃ±os de historia y una identidad institucional sÃ³lida que inspira confianza y pertenencia." },
];

const HITOS = [
  { year:"1950", label:"FundaciÃ³n del colegio en Tulancingo" },
  { year:"1975", label:"Apertura del nivel secundaria" },
  { year:"1990", label:"InauguraciÃ³n de instalaciones deportivas" },
  { year:"2005", label:"AcreditaciÃ³n preparatoria con validez SEP" },
  { year:"2015", label:"Programa de inglÃ©s intensivo y tecnologÃ­a" },
  { year:"2025", label:"75 aniversario â nueva era digital" },
];

export default function NuestraEsencia() {
  return (
    <main>
      <section style={{ padding:"clamp(3.5rem,7vw,6rem) 0 clamp(2rem,4vw,3rem)", background:"radial-gradient(70% 80% at 50% -10%, rgba(224,48,63,.07), transparent 60%), var(--color-bg)" }}>
        <div className="wrap text-center" style={{ maxWidth:760, marginLeft:"auto", marginRight:"auto" }}>
          <div className="flex justify-center"><span className="eyebrow">Nuestra esencia</span></div>
          <h1 className="font-display font-extrabold tracking-tight leading-[1.04] mt-[18px]"
            style={{ fontSize:"clamp(2.4rem,5.2vw,4rem)", color:"var(--text-strong)" }}>75 aÃ±os formando<br />personas extraordinarias</h1>
          <p className="mt-[18px] mx-auto leading-relaxed" style={{ fontSize:"clamp(1.05rem,1.6vw,1.2rem)", color:"var(--text-muted)", maxWidth:"36em" }}>En el Colegio Pedro de Gante creemos que la educaciÃ³n va mÃ¡s allÃ¡ del aula: es un viaje de vida que empieza desde los primeros aÃ±os y deja huella para siempre.</p>
        </div>
      </section>

      {/* MisiÃ³n + VisiÃ³n */}
      <section style={{ padding:"clamp(2.5rem,5vw,4.5rem) 0" }}>
        <div className="wrap grid gap-6 md:grid-cols-2">
          {[
            { label:"MisiÃ³n", text:"Formar personas Ã­ntegras con excelencia acadÃ©mica, valores sÃ³lidos y visiÃ³n de futuro, que contribuyan positivamente a su familia, comunidad y paÃ­s." },
            { label:"VisiÃ³n",  text:"Ser la instituciÃ³n educativa de referencia en Tulancingo, reconocida por la calidad de su formaciÃ³n, la solidez de su comunidad y el impacto de sus egresados." },
          ].map((item) => (
            <div key={item.label} className="rounded-[var(--radius-lg)] p-8 border"
              style={{ background:"var(--paper-2)", borderColor:"var(--line-sm)" }}>
              <span className="eyebrow mb-5 block">{item.label}</span>
              <p className="font-display font-semibold leading-[1.45]"
                style={{ fontSize:"clamp(1.1rem,1.8vw,1.35rem)", color:"var(--text-strong)" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pilares */}
      <section style={{ padding:"clamp(2.5rem,5vw,4.5rem) 0" }}>
        <div className="wrap">
          <SectionHead kicker="Lo que nos define" title="Seis pilares que nos guÃ­an" sub="Nuestro modelo educativo descansa en principios que han pasado la prueba del tiempo." center />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILARES.map((p) => (
              <div key={p.title} className="rounded-[var(--radius-lg)] border p-7 flex flex-col gap-4 transition-shadow hover:shadow-md"
                style={{ background:"var(--surface-card)", borderColor:"var(--line-sm)" }}>
                <div className="text-[2.2rem] leading-none">{p.icon}</div>
                <h3 className="font-display font-bold" style={{ fontSize:"1.15rem", color:"var(--text-strong)" }}>{p.title}</h3>
                <p className="text-[15px] leading-[1.65]" style={{ color:"var(--text-body)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia - timeline */}
      <section style={{ padding:"clamp(2.5rem,5vw,4.5rem) 0", background:"var(--ink-900)" }}>
        <div className="wrap">
          <SectionHead kicker="Historia" title="Nuestra historia" sub="Siete dÃ©cadas construyendo una comunidad educativa de excelencia." center light />
          <div className="mt-12 grid gap-0 md:grid-cols-2 lg:grid-cols-3 relative">
            {HITOS.map((h, i) => (
              <div key={h.year} className="relative pl-6 pb-10 border-l"
                style={{ borderColor:"rgba(255,255,255,.12)", borderLeftStyle: i % 3 === 2 ? "solid" : "solid" }}>
                <span className="absolute -left-[9px] top-0 h-[18px] w-[18px] rounded-full border-2 border-current"
                  style={{ background:"var(--color-primary)", borderColor:"var(--ink-900)" }} />
                <div className="font-display font-extrabold mb-1" style={{ fontSize:"1.5rem", color:"var(--color-primary)" }}>{h.year}</div>
                <div className="text-[15px] leading-[1.5]" style={{ color:"rgba(255,255,255,.72)" }}>{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Conoce el colegio en persona" sub="Agenda una visita guiada y vive la experiencia Pedro de Gante."
        href={WA} label="Agendar visita" secondaryLabel="Ver admisiones" secondaryHref="/admisiones" />
    </main>
  );
}
