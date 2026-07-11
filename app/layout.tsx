import "./globals.css";

export var metadata = {
  title: "ECLOS GROUP | Ingenieria Digital, Compliance e Infraestructura Critica en Peru",
  description: "Consultoria integral en transformacion digital, ciberseguridad, cumplimiento normativo (Ley 29733) e infraestructura critica para empresas en Peru.",
  keywords: "consultoria TI Peru, ciberseguridad Lima, Ley 29733, infraestructura critica Peru, transformacion digital, ISO 27001 Peru, HVAC salas de servidores",
  openGraph: {
    title: "ECLOS GROUP | Ingenieria tecnologica integral en Peru",
    description: "Transformacion digital, ciberseguridad e infraestructura critica bajo un solo equipo.",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout(props) {
  return (
    <html lang="es">
      <body>{props.children}</body>
    </html>
  );
}
