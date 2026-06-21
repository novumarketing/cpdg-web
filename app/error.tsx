"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div style={{ minHeight:"60vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"2rem", gap:"1.5rem" }}>
      <div style={{ fontSize:"3rem" }} aria-hidden>⚠️</div>
      <h2 className="font-display font-bold" style={{ fontSize:"clamp(1.4rem,3vw,2rem)", color:"var(--text-strong)" }}>Algo salió mal</h2>
      <p style={{ color:"var(--text-muted)", maxWidth:"30em" }}>Ocurrió un error inesperado. Intenta recargar la página o contáctanos si el problema persiste.</p>
      <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", justifyContent:"center" }}>
        <button onClick={reset} className="btn btn-primary">Intentar de nuevo</button>
        <a href="/" className="btn btn-outline">Ir al inicio</a>
      </div>
    </div>
  );
}
