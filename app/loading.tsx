export default function Loading() {
  return (
    <div style={{ minHeight:"60vh", display:"flex", alignItems:"center", justifyContent:"center" }} aria-label="Cargando...">
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"1rem" }}>
        <div style={{
          width:40, height:40, borderRadius:"50%",
          border:"3px solid var(--color-primary-border)",
          borderTopColor:"var(--color-primary)",
          animation:"spin .8s linear infinite"
        }} />
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        <span style={{ fontSize:"14px", color:"var(--text-muted)", fontWeight:500 }}>Cargando…</span>
      </div>
    </div>
  );
}
