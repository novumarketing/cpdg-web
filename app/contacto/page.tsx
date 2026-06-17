import type { Metadata } from "next";
import { PageHero, SectionHead } from "@/components/ui";
import { PHONE, EMAIL, WA, CAMPUS } from "@/components/site";
import ContactForm from "@/components/ContactForm";
import LazyMap from "@/components/LazyMap";
import { MapPin, Phone, Mail, MessageCircle, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta al Colegio Pedro de Gante en Tulancingo. Teléfono, correo, campus y formulario de informes.",
};

function Info({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <div className="grid h-11 w-11 flex-none place-items-center rounded-[13px] bg-wine-soft"><Icon className="h-5 w-5 text-wine" strokeWidth={1.75} aria-hidden /></div>
      <div><b className="block font-display text-[15px] text-wine">{title}</b><p className="text-[14.5px] text-muted">{children}</p></div>
    </div>
  );
}

export default function Contacto() {
  return (
    <main>
      <PageHero kicker="Contacto" title={<>Estamos para <span className="grad-text">ayudarte</span></>}
        sub="Déjanos tus datos y un asesor de admisiones te contactará para resolver todas tus dudas." />

      <section className="py-20 md:py-24">
        <div className="wrap grid items-start gap-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHead kicker="Datos de contacto" title="Dos campus en Tulancingo" />
            {CAMPUS.map((c) => (<Info key={c.nombre} icon={MapPin} title={c.nombre}>{c.dir}</Info>))}
            <Info icon={Phone} title="Teléfono">{PHONE}</Info>
            <Info icon={Mail} title="Correo">{EMAIL}</Info>
            <Info icon={MessageCircle} title="WhatsApp">Respuesta inmediata en horario escolar</Info>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">Escribir por WhatsApp</a>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="wrap">
          <SectionHead center kicker="Ubicación" title="Encuéntranos en Tulancingo" />
          <LazyMap />
        </div>
      </section>
    </main>
  );
}
