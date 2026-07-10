export default function Cookies() {
  return (
    <main className="min-h-screen bg-ink text-paper font-body px-6 md:px-10 py-24 max-w-3xl mx-auto">
      <a href="/" className="font-mono text-xs text-technical">← volver</a>
      <h1 className="font-display font-bold text-3xl mt-6 mb-8">Política de cookies</h1>
      <div className="space-y-6 text-muted text-sm leading-relaxed">
        <p>
          Este sitio utiliza cookies esenciales para su funcionamiento y, opcionalmente, cookies
          de analítica para entender cómo se usa el sitio y mejorarlo.
        </p>
        <p>
          Puedes gestionar o eliminar las cookies desde la configuración de tu navegador en
          cualquier momento. Deshabilitarlas podría afectar algunas funciones del sitio.
        </p>
      </div>
    </main>
  );
}