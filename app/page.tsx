"use client";
import { useState, useEffect } from "react";
import {
  MessageSquare, ChevronRight, Cpu, ShieldCheck, Building2, Menu, X,
  Target, Eye, Compass, Search, PenTool, Wrench, Activity,
} from "lucide-react";

const DIVISIONS = [
  {
    code: "DIV.01",
    title: "Digital",
    icon: Cpu,
    desc: "Transformación digital y arquitecturas en la nube.",
    items: [
      "Migración y arquitectura cloud (AWS, Azure, GCP)",
      "DevOps, CI/CD y automatización de infraestructura",
      "Ciencia de datos e IA aplicada a procesos de negocio",
    ],
  },
  {
    code: "DIV.02",
    title: "Compliance",
    icon: ShieldCheck,
    desc: "Ciberseguridad y cumplimiento normativo.",
    items: [
      "Pentesting y ciberseguridad ofensiva/defensiva",
      "Auditoría y adecuación a la Ley 29733",
      "Preparación para certificación ISO 27001",
    ],
  },
  {
    code: "DIV.03",
    title: "Infraestructura",
    icon: Building2,
    desc: "Infraestructura crítica y facility management.",
    items: [
      "Sistemas HVAC y eficiencia energética",
      "Seguridad física y control de accesos",
      "Facility management y mantenimiento predictivo",
    ],
  },
];

const PROCESS = [
  { n: "01", title: "Diagnóstico", icon: Search, desc: "Evaluamos tu operación actual, riesgos e infraestructura para entender el punto de partida real." },
  { n: "02", title: "Diseño", icon: PenTool, desc: "Diseñamos la arquitectura de solución con rutas primarias y de respaldo, alineada a tu presupuesto." },
  { n: "03", title: "Implementación", icon: Wrench, desc: "Ejecutamos por fases, con hitos verificables y mínima disrupción a tus operaciones diarias." },
  { n: "04", title: "Monitoreo", icon: Activity, desc: "Supervisión continua post-entrega, con reportes de estado y ajustes proactivos." },
];

const STACK = [
  "AWS", "Microsoft Azure", "Google Cloud", "Cisco", "Fortinet",
  "ISO 27001", "ISO 9001", "Ley 29733",
];

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem("ecloss-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    window.localStorage.setItem("ecloss-cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-panel border-t border-line px-6 py-5 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-muted max-w-2xl">
          Usamos cookies esenciales y de analítica para mejorar tu experiencia. Consulta nuestra{" "}
          <a href="/cookies" className="text-technical underline">política de cookies</a>.
        </p>
        <div className="flex gap-3 shrink-0">
          <a href="/cookies" className="font-mono text-xs text-muted px-4 py-2.5 border border-line hover:border-technical transition-colors">
            MÁS INFO
          </a>
          <button onClick={accept} className="font-mono text-xs bg-signal text-ink px-4 py-2.5 hover:bg-signal/90 transition-colors">
            ACEPTAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#nosotros", label: "Quiénes somos" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Proceso" },
    { href: "#partners", label: "Tecnologías" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <main className="min-h-screen bg-ink text-paper font-body">
      <nav className="fixed w-full z-50 bg-ink/90 backdrop-blur-md border-b border-line px-6 md:px-10 py-4 flex justify-between items-center">
        <a href="#" className="font-display font-bold tracking-tight text-lg">
          ECLOSS <span className="text-signal">SAC</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-mono text-muted">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-paper transition-colors">{l.label}</a>
          ))}
        </div>
        
          href="#contacto"
          className="hidden md:inline-flex items-center gap-1.5 font-mono text-xs bg-signal text-ink px-4 py-2.5 hover:bg-signal/90 transition-colors"
        >
          DIAGNÓSTICO <ChevronRight size={14} />
        </a>
        <button aria-label="Abrir menú" className="md:hidden text-paper" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-ink pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 font-mono text-lg">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="border-b border-line pb-4">
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setMenuOpen(false)} className="bg-signal text-ink text-center py-3.5 mt-2">
              SOLICITAR DIAGNÓSTICO
            </a>
          </div>
        </div>
      )}

      <section className="relative min-h-screen flex items-center blueprint-grid pt-24 overflow-hidden">
        <div className="absolute top-24 left-6 md:left-10 w-4 h-4 border-l border-t corner-mark" />
        <div className="absolute top-24 right-6 md:right-10 w-4 h-4 border-r border-t corner-mark" />
        <div className="absolute bottom-10 left-6 md:left-10 w-4 h-4 border-l border-b corner-mark" />
        <div className="absolute bottom-10 right-6 md:right-10 w-4 h-4 border-r border-b corner-mark" />

        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <p className="font-mono text-xs tracking-widest text-technical uppercase mb-6">
              Ingeniería de sistemas críticos — Lima, PE
            </p>
            <h1 className="font-display font-bold text-5xl md:text-6xl leading-[1.05] mb-6">
              Diseñamos<br />
              <span className="relative inline-block">
                resiliencia
                <svg className="absolute -bottom-3 left-0 w-full" height="10" viewBox="0 0 240 10" preserveAspectRatio="none">
                  <line x1="0" y1="5" x2="240" y2="5" stroke="#FF6B35" strokeWidth="1" />
                  <line x1="0" y1="0" x2="0" y2="10" stroke="#FF6B35" strokeWidth="1" />
                  <line x1="240" y1="0" x2="240" y2="10" stroke="#FF6B35" strokeWidth="1" />
                </svg>
              </span>
              <span className="text-muted">.</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-md mb-10 leading-relaxed">
              Consultoría integral en TI, ciberseguridad e infraestructura crítica.
              Arquitecturas con redundancia real, no promesas de marketing.
            </p>
            <div className="flex flex-wrap gap-4">
              
                href="#contacto"
                className="inline-flex items-center gap-2 bg-signal text-ink font-mono font-medium text-sm px-6 py-3.5 hover:bg-signal/90 transition-colors"
              >
                SOLICITAR DIAGNÓSTICO <ChevronRight size={16} />
              </a>
              
                href="#servicios"
                className="inline-flex items-center gap-2 border border-line font-mono text-sm px-6 py-3.5 hover:border-technical transition-colors"
              >
                VER SERVICIOS
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <svg viewBox="0 0 400 340" className="w-full h-auto">
              <line x1="200" y1="170" x2="80" y2="60" stroke="#1F2A3A" strokeWidth="1.5" />
              <line x1="200" y1="170" x2="320" y2="60" stroke="#1F2A3A" strokeWidth="1.5" />
              <line x1="200" y1="170" x2="200" y2="290" stroke="#1F2A3A" strokeWidth="1.5" />
              <line x1="80" y1="60" x2="320" y2="60" stroke="#4FD1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              <line x1="80" y1="60" x2="200" y2="290" stroke="#4FD1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              <line x1="320" y1="60" x2="200" y2="290" stroke="#4FD1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />

              <circle cx="200" cy="170" r="34" fill="#10151F" stroke="#FF6B35" strokeWidth="1.5" className="pulse" />
              <text x="200" y="166" textAnchor="middle" fill="#EDF1F7" fontSize="9" fontFamily="JetBrains Mono">NÚCLEO</text>
              <text x="200" y="178" textAnchor="middle" fill="#8A94A6" fontSize="8" fontFamily="JetBrains Mono">SAC</text>

              <circle cx="80" cy="60" r="26" fill="#10151F" stroke="#1F2A3A" strokeWidth="1.5" />
              <text x="80" y="64" textAnchor="middle" fill="#EDF1F7" fontSize="8" fontFamily="JetBrains Mono">DIGITAL</text>

              <circle cx="320" cy="60" r="26" fill="#10151F" stroke="#1F2A3A" strokeWidth="1.5" />
              <text x="320" y="64" textAnchor="middle" fill="#EDF1F7" fontSize="7.5" fontFamily="JetBrains Mono">COMPLIANCE</text>

              <circle cx="200" cy="290" r="26" fill="#10151F" stroke="#1F2A3A" strokeWidth="1.5" />
              <text x="200" y="286" textAnchor="middle" fill="#EDF1F7" fontSize="7" fontFamily="JetBrains Mono">INFRAEST-</text>
              <text x="200" y="296" textAnchor="middle" fill="#EDF1F7" fontSize="7" fontFamily="JetBrains Mono">RUCTURA</text>
            </svg>
            <p className="font-mono text-[10px] text-muted text-center -mt-4">
              rutas primarias — rutas de respaldo (N+1)
            </p>
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-line">
        <p className="font-mono text-xs text-technical uppercase tracking-widest mb-3">Quiénes somos</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-8 max-w-2xl">
          Ingenieros primero, consultores después.
        </h2>
        <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed mb-16">
          ECLOSS SAC nace de la convicción de que la resiliencia operativa no se improvisa: se diseña.
          Integramos tecnología, cumplimiento normativo e infraestructura física bajo un mismo criterio
          de ingeniería, para que cada decisión de negocio esté respaldada por un sistema que no falla
          en el momento crítico.
        </p>
        <div className="grid md:grid-cols-2 gap-px bg-line">
          <div className="bg-ink p-8">
            <Target size={20} className="text-signal mb-4" />
            <h3 className="font-display font-bold text-lg mb-2">Misión</h3>
            <p className="text-muted text-sm leading-relaxed">
              Proteger la continuidad operativa de nuestros clientes mediante arquitecturas
              tecnológicas y físicas redundantes, seguras y conformes con la normativa vigente.
            </p>
          </div>
          <div className="bg-ink p-8">
            <Eye size={20} className="text-signal mb-4" />
            <h3 className="font-display font-bold text-lg mb-2">Visión</h3>
            <p className="text-muted text-sm leading-relaxed">
              Ser la consultora de referencia en resiliencia de infraestructura crítica en Perú,
              reconocida por la precisión técnica de cada entrega.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Precisión", desc: "Cada arquitectura se documenta y valida antes de implementarse." },
            { title: "Integridad", desc: "Recomendamos lo que tu operación necesita, no lo que es más rentable vender." },
            { title: "Continuidad", desc: "Diseñamos para el peor escenario, no solo para el día normal." },
          ].map((v) => (
            <div key={v.title} className="flex items-start gap-3">
              <Compass size={16} className="text-technical mt-1 shrink-0" />
              <div>
                <p className="font-mono text-sm mb-1">{v.title}</p>
                <p className="text-muted text-xs leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="servicios" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-line">
        <div className="flex items-baseline justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs text-technical uppercase tracking-widest mb-3">Servicios</p>
            <h2 className="font-display font-bold text-3xl">Divisiones</h2>
          </div>
          <span className="font-mono text-xs text-muted">CATÁLOGO / 03 UNIDADES</span>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-line">
          {DIVISIONS.map((s) => (
            <div key={s.code} className="bg-ink p-8 hover:bg-panel transition-colors group flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] text-signal">{s.code}</span>
                <s.icon size={18} className="text-muted group-hover:text-technical transition-colors" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2.5 mt-auto pt-5 border-t border-line">
                {s.items.map((item) => (
                  <li key={item} className="text-xs text-muted flex gap-2">
                    <span className="text-technical shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="proceso" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-line">
        <p className="font-mono text-xs text-technical uppercase tracking-widest mb-3">Cómo trabajamos</p>
        <h2 className="font-display font-bold text-3xl mb-12">Proceso de trabajo</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {PROCESS.map((p, i) => (
            <div key={p.n} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-signal">{p.n}</span>
                <p.icon size={16} className="text-technical" />
              </div>
              <h3 className="font-display font-bold text-base mb-2">{p.title}</h3>
              <p className="text-muted text-xs leading-relaxed">{p.desc}</p>
              {i < PROCESS.length - 1 && (
                <div className="hidden md:block absolute top-2 -right-4 w-8 h-px bg-line" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="partners" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-line">
        <p className="font-mono text-xs text-technical uppercase tracking-widest mb-3">Ecosistema técnico</p>
        <h2 className="font-display font-bold text-3xl mb-4">Tecnologías y estándares con los que trabajamos</h2>
        <p className="text-muted text-sm max-w-xl mb-10">
          Implementamos sobre plataformas y marcos reconocidos por la industria.
        </p>
        <div className="flex flex-wrap gap-3">
          {STACK.map((tech) => (
            <span key={tech} className="font-mono text-xs border border-line px-4 py-2.5 text-muted hover:border-technical hover:text-paper transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section id="contacto" className="py-24 px-6 md:px-10 border-t border-line">
        <div className="max-w-md mx-auto">
          <p className="font-mono text-xs text-technical uppercase tracking-widest mb-3 text-center">
            Formulario de requerimiento
          </p>
          <h2 className="font-display font-bold text-3xl mb-8 text-center">Solicitar diagnóstico</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Nombre de la empresa" className="w-full p-3.5 bg-panel border border-line focus:border-signal outline-none text-sm placeholder:text-muted transition-colors" required />
            <input type="email" placeholder="Correo corporativo" className="w-full p-3.5 bg-panel border border-line focus:border-signal outline-none text-sm placeholder:text-muted transition-colors" required />
            <input type="tel" placeholder="Teléfono de contacto" className="w-full p-3.5 bg-panel border border-line focus:border-signal outline-none text-sm placeholder:text-muted transition-colors" />
            <textarea placeholder="Cuéntanos tu requerimiento" className="w-full p-3.5 bg-panel border border-line focus:border-signal outline-none text-sm placeholder:text-muted transition-colors resize-none" rows={4} required />
            <button type="submit" className="w-full bg-signal text-ink font-mono font-medium text-sm py-3.5 hover:bg-signal/90 transition-colors">
              ENVIAR SOLICITUD
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-line py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <p className="font-display font-bold mb-3">ECLOSS <span className="text-signal">SAC</span></p>
            <p className="text-muted text-xs leading-relaxed">Ingeniería de sistemas críticos desde Lima, Perú.</p>
          </div>
          <div>
            <p className="font-mono text-xs text-technical mb-3">NAVEGACIÓN</p>
            <ul className="space-y-2 text-xs text-muted">
              <li><a href="#nosotros" className="hover:text-paper">Quiénes somos</a></li>
              <li><a href="#servicios" className="hover:text-paper">Servicios</a></li>
              <li><a href="#proceso" className="hover:text-paper">Proceso</a></li>
              <li><a href="#contacto" className="hover:text-paper">Contacto</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs text-technical mb-3">LEGAL</p>
            <ul className="space-y-2 text-xs text-muted">
              <li><a href="/privacidad" className="hover:text-paper">Política de privacidad</a></li>
              <li><a href="/cookies" className="hover:text-paper">Política de cookies</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs text-technical mb-3">CONTACTO</p>
            <ul className="space-y-2 text-xs text-muted">
              <li>contacto@ecloss.pe</li>
              <li>+51 999 228 3448</li>
              <li>Lima, Perú</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 border-t border-line text-xs text-muted font-mono flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 ECLOSS SAC — RUC 20XXXXXXXXX</p>
          <p>-12.0464, -77.0428</p>
        </div>
      </footer>

      
        href="https://wa.me/519992283448"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-8 right-8 bg-panel border border-line p-3.5 z-50 hover:border-technical transition-colors"
      >
        <MessageSquare size={20} className="text-technical" />
      </a>

      <CookieBanner />
    </main>
  );
}
