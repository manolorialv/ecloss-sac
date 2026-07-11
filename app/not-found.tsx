export default function NotFound() {
  return (
    <main className="min-h-screen bg-ink text-paper font-body flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs text-technical uppercase tracking-widest mb-4">Error 404</p>
      <h1 className="font-display font-bold text-4xl mb-4">Esta pagina no existe</h1>
      <p className="text-muted text-sm mb-10 max-w-md">La ruta que buscas no esta disponible o fue movida.</p>
      <a href="/" className="inline-flex items-center gap-2 bg-signal text-ink font-mono text-sm px-6 py-3.5 hover:bg-signal/90 transition-colors">VOLVER AL INICIO</a>
    </main>
  );
}
