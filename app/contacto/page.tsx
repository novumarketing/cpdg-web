import type { Metadata } from "next";
import { PHONE, EMAIL, CAMPUSES } from "@/components/site";
import ContactForm from "@/components/ContactForm";
import LazyMap from "@/components/LazyMap";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Encuentra el Colegio Pedro de Gante en Tulancingo. DirecciÃ³n, telÃ©fono y formulario de contacto.",
};

function PhoneIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
}
function MailIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
}
function MapPinIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
}

export default function Contacto() {
  return (
    <main>
      <section style={{ padding:"clamp(3.5rem,7vw,6rem) 0 clamp(2rem,4vw,3rem)", background:"radial-gradient(70% 80% at 50% -10%, rgba(224,48,63,.07), transparent 60%), var(--color-bg)" }}>
        <div className="wrap text-center" style={{ maxWidth:680, marginLeft:"auto", marginRight:"auto" }}>
          <div className="flex justify-center"><span className="eyebrow">Contacto</span></div>
          <h1 className="font-display font-extrabold tracking-tight leading-[1.04] mt-[18px]"
            style={{ fontSize:"clamp(2.4rem,5.2vw,4rem)", color:"var(--text-strong)" }}>Hablemos</h1>
          <p className="mt-[18px] mx-auto leading-relaxed" style={{ fontSize:"clamp(1.05rem,1.6vw,1.2rem)", color:"var(--text-muted)", maxWidth:"34em" }}>Estamos para resolver todas tus dudas. EscrÃ­benos, llÃ¡manos o visÃ­tanos en cualquiera de nuestras sedes.</p>
        </div>
      </section>

      {/* Form + info */}
      <section style={{ padding:"clamp(2.5rem,5vw,4.5rem) 0" }}>
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_400px] items-start">
          {/* Form */}
          <div className="rounded-[var(--radius-lg)] border p-8 shadow-xs"
            style={{ background:"var(--surface-card)", borderColor:"var(--line-sm)" }}>
            <span className="eyebrow mb-4 block">Formulario</span>
            <h2 className="font-display font-bold mb-6" style={{ fontSize:"1.5rem", color:"var(--text-strong)" }}>EnvÃ­anos un mensaje</h2>
            <ContactForm />
          </div>

          {/* Contact info */}
          <aside className="flex flex-col gap-6">
            <div className="rounded-[var(--radius-lg)] border p-7" style={{ background:"var(--surface-card)", borderColor:"var(--line-sm)" }}>
              <span className="eyebrow mb-4 block">InformaciÃ³n de contacto</span>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3.5">
                  <span className="grid h-9 w-9 place-items-center rounded-[var(--radius-sm)] shrink-0" style={{ background:"rgba(224,48,63,.1)", color:"var(--color-primary)" }}><PhoneIcon /></span>
                  <div>
                    <div className="text-[11.5px] font-semibold uppercase tracking-wider mb-0.5" style={{ color:"var(--text-muted)" }}>TelÃ©fono</div>
                    <a href={`tel:${PHONE.replace(/\s/g,"")}`} className="font-display font-semibold text-[1.05rem]" style={{ color:"var(--text-strong)" }}>{PHONE}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="grid h-9 w-9 place-items-center rounded-[var(--radius-sm)] shrink-0" style={{ background:"rgba(224,48,63,.1)", color:"var(--color-primary)" }}><MailIcon /></span>
                  <div>
                    <div className="text-[11.5px] font-semibold uppercase tracking-wider mb-0.5" style={{ color:"var(--text-muted)" }}>Correo</div>
                    <a href={`mailto:${EMAIL}`} className="font-display font-semibold text-[1.05rem]" style={{ color:"var(--text-strong)" }}>{EMAIL}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="grid h-9 w-9 place-items-center rounded-[var(--radius-sm)] shrink-0" style={{ background:"rgba(224,48,63,.1)", color:"var(--color-primary)" }}><MapPinIcon /></span>
                  <div>
                    <div className="text-[11.5px] font-semibold uppercase tracking-wider mb-0.5" style={{ color:"var(--text-muted)" }}>Horario</div>
                    <p className="text-[15px] leading-[1.6]" style={{ color:"var(--text-body)" }}>Lun â Vie 8:00 â 15:00 hrs<br />SÃ¡b 9:00 â 12:00 hrs</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Campuses */}
            <div className="rounded-[var(--radius-lg)] border p-7 flex flex-col gap-5" style={{ background:"var(--surface-card)", borderColor:"var(--line-sm)" }}>
              <span className="eyebrow">Nuestras sedes</span>
              {CAMPUSES.map((c) => (
                <div key={c.name}>
                  <div className="font-display font-bold mb-1" style={{ fontSize:".95rem", color:"var(--text-strong)" }}>{c.name}</div>
                  <p className="text-[14px] leading-[1.55]" style={{ color:"var(--text-body)" }}>{c.address}</p>
                  <p className="text-[13px] mt-0.5" style={{ color:"var(--text-muted)" }}>{c.levels}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section style={{ padding:"0 0 clamp(3rem,5vw,5rem)" }}>
        <div className="wrap">
          <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-md border" style={{ borderColor:"var(--line-sm)" }}>
            <LazyMap />
          </div>
        </div>
      </section>
    </main>
  );
}
