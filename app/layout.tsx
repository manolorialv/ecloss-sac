import "./globals.css";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-body" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export var metadata = {
  metadataBase: new URL("https://ecloss-sac.vercel.app"),
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

export var viewport = {
  themeColor: "#0A0E17",
};

export default function RootLayout(props) {
  var fontVars = spaceGrotesk.variable + " " + inter.variable + " " + jetbrainsMono.variable;
  return (
    <html lang="es">
      <body className={fontVars}>{props.children}</body>
    </html>
  );
}
