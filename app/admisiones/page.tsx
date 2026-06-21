import type { Metadata } from "next";
import { CtaBand } from "@/components/ui";
import { WA, PHONE, EMAIL } from "@/components/site";
import AdmissionsPopup from "@/components/AdmissionsPopup";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Admisiones",
  description: "Proceso de admisión al Colegio Pedro de Gante, Tulancingo. Inscripciones abiertas.",
};

const PASOS = [
  { n:1, title:"Solicita información",     desc:"Contáctanos por WhatsApp, teléfono o correo para conocer disponibilidad de lugares y requisitos del nivel que te interesa." },
  { n:2, title:"Agenda una visita",        desc:"Te invitamos a conocer nuestras instalaciones y reunirte con nuestro equipo académico para resolver todas tus dudas." },
  { n:3, title:"Entrega documentación",    desc:"Reúne los documentos requeridos y entrégalos en nuestras oficinas de admisiones dentro del plazo establecido." },
  { n:4, title:"Evaluación de ingreso",    desc:"Aplicamos una evaluación sencilla y diagnóstica para conocer el nivel del alumno y asignar el grupo más adecuado." },
  { n:5, title:"Formaliza tu inscripción", desc:"Una vez aceptado, realiza el pago de inscripción y firma los documentos para asegurar el lugar de tu hijo." },
];

const DOCS = [
  "Acta de nacimiento (original y copia)",
  "CURP del alumno",
  "Certificado o constancia del grado anterior",
  "Boleta de calificaciones del último año",
  "4 fotografías tamaño infantil en blanco y negro",
  "Cartilla de vacunación (preescolar y primaria)",
  "Identificación oficial del tutor",
  "Comprobante de domicilio reciente",
];

function WAIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.78-1.31l-.34-.2-3.55.93.95-3.46-.22-.36a9.36 9.36 0 0 1-1.44-5 9.44 9.44 0 0 1 16.12-6.67 9.37 9.37 0 0 1 2.77 6.68c0 5.2-4.24 9.4-9.43 9.4ZM20.5 3.49A11.36 11.36 0 0 0 12.04.01C5.78.01.69 5.1.69 11.36c0 2 .52 3.95 1.52 5.67L.6 23.4l6.51-1.71a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.39-8.03Z"/></svg>;
}

export default function Admisiones() {
  return (
    <section>
      <section style={{ padding:"clamp(3.5rem,7vw,6rem) 0 clamp(2rem,4vw,3rem)", background:"radial-gradient(70% 80% at 50% -10%, rgba(224,48,63,.07), transparent 60%), var(--color-bg)" }}>
        <div className="wrap text-center" style={{ maxWidth:760, marginLeft:"auto", marginRight:"auto" }}>
          <div className="flex justify-center"><span className="eyebrow">Admisiones</span></div>
          <h1 className="font-display font-extrabold tracking-tight leading-[1.04] mt-[18px]"
            style={{ fontSize:"clamp(2.4rem,5.2vw,4rem)", color:"var(--text-strong)" }}>Inscripciones<br /><span style={{ color:"var(--color-primary)" }}>abiertas</span></h1>
          <p className="mt-[18px] mx-auto leading-relaxed" style={{ fontSize:"clamp(1.05rem,1.6vw,1.2rem)", color:"var(--text-muted)", maxWidth:"36em" }}>Acompañamos a las familias en cada paso del proceso. Contáctanos hoy y asegura el lugar de tu hijo en el Colegio Pedro de Gante.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp flex items-center gap-2"><WAIcon size={18} /> Solicitar informes</a>
            <AdmissionsPopup />
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section style={{ padding:"clamp(2.5rem,5vw,4.5rem) 0" }}>
        <div className="wrap">
          <div className="text-center mb-12">
            <span className="eyebrow">Proceso</span>
            <h2 className="font-display font-extrabold tracking-tight mt-4" style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", color:"var(--text-strong)" }}>Cinco pasos sencillos</h2>
          </div>
          <div className="relative flex flex-col gap-0">
            {PASOS.map((p, i) => (
              <div key={p.n} className="relative pl-14 pb-10">
                <div className="absolute left-0 top-0 flex flex-col items-center">
                  <div className="grid h-10 w-10 place-items-center rounded-full font-display font-extrabold text-white text-sm shadow-md"
                    style={{ background:"var(--color-primary)" }}>{p.n}</div>
                  {i < PASOS.length - 1 && <div className="w-px grow mt-1" style={{ background:"var(--border)", minHeight:40 }} />}
                </div>
                <h3 className="font-display font-bold mb-2" style={{ fontSize:"1.15rem", color:"var(--text-strong)" }}>{p.title}</h3>
                <p className="text-[15px] leading-[1.65]" style={{ color:"var(--text-body)", maxWidth:"44em" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentos */}
      <section style={{ padding:"clamp(2.5rem,5vw,4.5rem) 0", background:"var(--paper-2)" }}>
        <div className="wrap grid gap-10 md:grid-cols-2 items-start">
          <div>
            <span className="eyebrow mb-4 block">Documentos requeridos</span>
            <h2 className="font-display font-extrabold tracking-tight mb-6" style={{ fontSize:"clamp(1.7rem,3vw,2.3rem)", color:"var(--text-strong)" }}>¿Qué necesitas traer?</h2>
            <ul className="flex flex-col gap-3">
              {DOCS.map((d) => (
                <li key={d} className="flex items-start gap-3 text-[15px]" style={{ color:"var(--text-body)" }}>
                  <span className="grid h-6 w-6 place-items-center rounded-full shrink-0 mt-0.5" style={{ background:"rgba(224,48,63,.1)", color:"var(--color-primary)" }}><Check size={14} strokeWidth={3} aria-hidden /></span>{d}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13.5px]" style={{ color:"var(--text-muted)" }}>* Los requisitos pueden variar según el nivel. Consulta con admisiones.</p>
          </div>
          <div className="rounded-[var(--radius-lg)] p-8 border" style={{ background:"var(--color-surface)", borderColor:"var(--ink-200)" }}>
            <span className="eyebrow mb-4 block">Contacto directo</span>
            <h3 className="font-display font-bold mb-6" style={{ fontSize:"1.3rem", color:"var(--text-strong)" }}>¿Tienes dudas? Estamos aquí.</h3>
            <div className="flex flex-col gap-4 mb-8">
              <div><div className="text-[11px] font-bold tracking-wider uppercase mb-1" style={{ color:"var(--text-muted)" }}>Teléfono</div>
                <a href={`tel:${PHONE.replace(/\s/g,"")}`} className="font-display font-semibold" style={{ fontSize:"1.15rem", color:"var(--text-strong)" }}>{PHONE}</a></div>
              <div><div className="text-[11px] font-bold tracking-wider uppercase mb-1" style={{ color:"var(--text-muted)" }}>Correo</div>
                <a href={`mailto:${EMAIL}`} className="font-display font-semibold" style={{ fontSize:"1.15rem", color:"var(--text-strong)" }}>{EMAIL}</a></div>
              <div><div className="text-[11px] font-bold tracking-wider uppercase mb-1" style={{ color:"var(--text-muted)" }}>Horario de oficina</div>
                <p className="text-[15px]" style={{ color:"var(--text-body)" }}>Lunes a viernes, 8:00 – 15:00 hrs<br />Sábados, 9:00 – 12:00 hrs</p></div>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full justify-center flex items-center gap-2"><WAIcon size={16} /> Escribir por WhatsApp</a>
          </div>
        </div>
      </section>

      <CtaBand title="¡Asegura el lugar de tu hijo!" sub="Los cupos son limitados. Contáctanos hoy para reservar tu lugar."
        href={WA} label="Iniciar proceso" secondaryLabel="Visitar el colegio" secondaryHref="/contacto" />
    </section>
  );
}
