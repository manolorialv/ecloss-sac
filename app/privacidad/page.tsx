export default function Privacidad() {
  return (
    <main className="min-h-screen bg-ink text-paper font-body px-6 md:px-10 py-24 max-w-3xl mx-auto">
      <a href="/" className="font-mono text-xs text-technical">← volver</a>
      <h1 className="font-display font-bold text-3xl mt-6 mb-8">Política de privacidad</h1>
      <div className="space-y-6 text-muted text-sm leading-relaxed">
        <p>
          ECLOSS SAC (&quot;nosotros&quot;) recopila los datos que nos proporcionas a través de nuestro
          formulario de contacto (nombre de empresa, correo corporativo, teléfono y detalle de tu
          requerimiento) con el único fin de responder a tu solicitud de diagnóstico o consultoría.
        </p>
        <p>
          No compartimos tus datos con terceros salvo obligación legal. Puedes solicitar la
          rectificación o eliminación de tu información escribiendo a contacto@ecloss.pe, conforme
          a lo establecido por la Ley N.º 29733, Ley de Protección de Datos Personales del Perú.
        </p>
        <p>
          Conservamos los datos únicamente durante el tiempo necesario para atender tu solicitud
          y cumplir con obligaciones legales o contractuales aplicables.
        </p>
      </div>
    </main>
  );
}