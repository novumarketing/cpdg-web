import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight:"70vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"2rem", gap:"1.5rem" }}>
      <div className="font-display font-extrabold" style={{ fontSize:"clamp(5rem,15vw,10rem)", color:"var(--color-primary)", lineHeight:1, opacity:.15 }} aria-hidden>404</div>
      <h1 className="font-display font-bold" style={{ fontSize:"clamp(1.5rem,3vw,2.2rem)", color:"var(--text-strong)", marginTop:"-1.5rem" }}>Página no encontrada</h1>
      <p style={{ color:"var(--text-muted)", maxWidth:"28em" }}>La página que buscas no existe o fue movida. Te llevamos al inicio.</p>
      <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", justifyContent:"center" }}>
        <Link href="/" className="btn btn-primary">Ir al inicio</Link>
        <Link href="/contacto" className="btn btn-outline">Contacto</Link>
      </div>
    </div>
  );
}
