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
    desc: "Transformacion digital y arquitecturas en la nube.",
    items: [
      "Migracion y arquitectura cloud (AWS, Azure, GCP)",
      "DevOps, CI/CD y automatizacion de infraestructura",
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
      "Auditoria y adecuacion a la Ley 29733",
      "Preparacion para certificacion ISO 27001",
    ],
  },
  {
    code: "DIV.03",
    title: "Infraestructura",
    icon: Building2,
    desc: "Infraestructura critica y facility management.",
    items: [
      "Sistemas HVAC y eficiencia energetica",
      "Seguridad fisica y control de accesos",
      "Facility management y mantenimiento predictivo",
    ],
  },
];

const PROCESS = [
  { n: "01", title: "Diagnostico", icon: Search, desc: "Evaluamos tu operacion actual, riesgos e infraestructura para entender el punto de partida real." },
  { n: "02", title: "Diseno", icon: PenTool, desc: "Disenamos la arquitectura de solucion con rutas primarias y de respaldo, alineada a tu presupuesto." },
  { n: "03", title: "Implementacion", icon: Wrench, desc: "Ejecutamos por fases, con hitos verificables y minima disrupcion a tus operaciones diarias." },
  { n: "04", title: "Monitoreo", icon: Activity, desc: "Supervision continua post-entrega, con reportes de estado y ajustes proactivos." },
];

const STACK = [
  "AWS", "Microsoft Azure", "Google Cloud", "Cisco", "Fortinet",
  "ISO 27001", "ISO 9001", "Ley 29733",
];

function CookieBanner() {
  var state = useState(false);
  var visible = state[0];
  var setVisible = state[1];

  useEffect(function () {
    var consent = window.localStorage.getItem("ecloss-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    window.localStorage.setItem("ecloss-cookie-consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-panel border-t border-line px-6 py-5 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-muted max-w-2xl">
          Usamos cookies esenciales y de analitica para mejorar tu experiencia. Consulta nuestra
          <a href="/cookies" className="text-technical underline"> politica de cookies</a>.
        </p>
        <div className="flex gap-3 shrink-0">
          <a href="/cookies" className="font-mono text-xs text-muted px-4 py-2.5 border border-line hover:border-technical transition-colors">MAS INFO</a>
          <button onClick={accept} className="font-mono text-xs bg-signal text-ink px-4 py-2.5 hover:bg-signal/90 transition-colors">ACEPTAR</button>
        </div>
      </div>
    </div>
  );
}

function NavBar(props) {
  var menuOpen = props.menuOpen;
  var setMenuOpen = props.setMenuOpen;
  var navLinks = props.navLinks;

  return (
    <nav className="fixed w-full z-50 bg-ink/90 backdrop-blur-md border-b border-line px-6 md:px-10 py-4 flex justify-between items-center">
      <a href="#" className="font-display font-bold tracking-tight text-lg">ECLOSS <span className="text-signal">SAC</span></a>
      <div className="hidden md:flex gap-8 text-sm font-mono text-muted">
        {navLinks.map(function (l) {
          return <a key={l.href} href={l.href} className="hover:text-paper transition-colors">{l.label}</a>;
        })}
      </div>
      <a href="#contacto" className="hidden md:inline-flex items-center gap-1.5 font-mono text-xs bg-signal text-ink px-4 py-2.5 hover:bg-signal/90 transition-colors">DIAGNOSTICO <ChevronRight size={14} /></a>
      <button aria-label="Abrir menu" className="md:hidden text-paper" onClick={function () { setMenuOpen(!menuOpen); }}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </nav>
  );
}

function MobileMenu(props) {
  var navLinks = props.navLinks;
  var close = props.close;
  return (
    <div className="fixed inset-0 z-40 bg-ink pt-24 px-6 md:hidden">
      <div className="flex flex-col gap-6 font-mono text-lg">
        {navLinks.map(function (l) {
          return <a key={l.href} href={l.href} onClick={close} className="border-b border-line pb-4">{l.label}</a>;
        })}
        <a href="#contacto" onClick={close} className="bg-signal text-ink text-center py-3.5 mt-2">SOLICITAR DIAGNOSTICO</a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center blueprint-grid pt-24 overflow-hidden">
      <div className="absolute top-24 left-6 md:left-10 w-4 h-4 border-l border-t corner-mark"></div>
      <div className="absolute top-24 right-6 md:right-10 w-4 h-4 border-r border-t corner-mark"></div>
      <div className="absolute bottom-10 left-6 md:left-10 w-4 h-4 border-l border-b corner-mark"></div>
      <div className="absolute bottom-10 right-6 md:right-10 w-4 h-4 border-r border-b corner-mark"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center w-full">
        <div>
          <p className="font-mono text-xs tracking-widest text-technical uppercase mb-6">Ingenieria de sistemas criticos, Lima PE</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight mb-6">
            Disenamos<br />
            <span className="relative inline-block">
              resiliencia
              <svg className="absolute -bottom-3 left-0 w-full" height="10" viewBox="0 0 240 10" preserveAspectRatio="none">
                <line x1="0" y1="5" x2="240" y2="5" stroke="#FF6B35" strokeWidth="1"></line>
                <line x1="0" y1="0" x2="0" y2="10" stroke="#FF6B35" strokeWidth="1"></line>
                <line x1="240" y1="0" x2="240" y2="10" stroke="#FF6B35" strokeWidth="1"></line>
              </svg>
            </span>
            <span className="text-muted">.</span>
          </h1>
          <p className="text-muted text-base md:text-lg max-w-md mb-10 leading-relaxed">
            Consultoria integral en TI, ciberseguridad e infraestructura critica. Arquitecturas con redundancia real, no promesas de marketing.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contacto" className="inline-flex items-center gap-2 bg-signal text-ink font-mono font-medium text-sm px-6 py-3.5 hover:bg-signal/90 transition-colors">SOLICITAR DIAGNOSTICO <ChevronRight size={16} /></a>
            <a href="#servicios" className="inline-flex items-center gap-2 border border-line font-mono text-sm px-6 py-3.5 hover:border-technical transition-colors">VER SERVICIOS</a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <svg viewBox="0 0 400 340" className="w-full h-auto">
            <line x1="200" y1="170" x2="80" y2="60" stroke="#1F2A3A" strokeWidth="1.5"></line>
            <line x1="200" y1="170" x2="320" y2="60" stroke="#1F2A3A" strokeWidth="1.5"></line>
            <line x1="200" y1="170" x2="200" y2="290" stroke="#1F2A3A" strokeWidth="1.5"></line>
            <line x1="80" y1="60" x2="320" y2="60" stroke="#4FD1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"></line>
            <line x1="80" y1="60" x2="200" y2="290" stroke="#4FD1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"></line>
            <line x1="320" y1="60" x2="200" y2="290" stroke="#4FD1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"></line>
            <circle cx="200" cy="170" r="34" fill="#10151F" stroke="#FF6B35" strokeWidth="1.5" className="pulse"></circle>
            <text x="200" y="166" textAnchor="middle" fill="#EDF1F7" fontSize="9" fontFamily="JetBrains Mono">NUCLEO</text>
            <text x="200" y="178" textAnchor="middle" fill="#8A94A6" fontSize="8" fontFamily="JetBrains Mono">SAC</text>
            <circle cx="80" cy="60" r="26" fill="#10151F" stroke="#1F2A3A" strokeWidth="1.5"></circle>
            <text x="80" y="64" textAnchor="middle" fill="#EDF1F7" fontSize="8" fontFamily="JetBrains Mono">DIGITAL</text>
            <circle cx="320" cy="60" r="26" fill="#10151F" stroke="#1F2A3A" strokeWidth="1.5"></circle>
            <text x="320" y="64" textAnchor="middle" fill="#EDF1F7" fontSize="7.5" fontFamily="JetBrains Mono">COMPLIANCE</text>
            <circle cx="200" cy="290" r="26" fill="#10151F" stroke="#1F2A3A" strokeWidth="1.5"></circle>
            <text x="200" y="286" textAnchor="middle" fill="#EDF1F7" fontSize="7" fontFamily="JetBrains Mono">INFRAEST-</text>
            <text x="200" y="296" textAnchor="middle" fill="#EDF1F7" fontSize="7" fontFamily="JetBrains Mono">RUCTURA</text>
          </svg>
          <p className="font-mono text-xs text-muted text-center -mt-4">rutas primarias, rutas de respaldo (N+1)</p>
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  var values = [
    { title: "Precision", desc: "Cada arquitectura se documenta y valida antes de implementarse." },
    { title: "Integridad", desc: "Recomendamos lo que tu operacion necesita, no lo que es mas rentable vender." },
    { title: "Continuidad", desc: "Disenamos para el peor escenario, no solo para el dia normal." },
  ];
  return (
    <section id="nosotros" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-line">
      <p className="font-mono text-xs text-technical uppercase tracking-widest mb-3">Quienes somos</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-8 max-w-2xl">Ingenieros primero, consultores despues.</h2>
      <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed mb-16">
        ECLOSS SAC nace de la conviccion de que la resiliencia operativa no se improvisa: se disena. Integramos tecnologia, cumplimiento normativo e infraestructura fisica bajo un mismo criterio de ingenieria, para que cada decision de negocio este respaldada por un sistema que no falla en el momento critico.
      </p>
      <div className="grid md:grid-cols-2 gap-px bg-line">
        <div className="bg-ink p-8">
          <Target size={20} className="text-signal mb-4" />
          <h3 className="font-display font-bold text-lg mb-2">Mision</h3>
          <p className="text-muted text-sm leading-relaxed">Proteger la continuidad operativa de nuestros clientes mediante arquitecturas tecnologicas y fisicas redundantes, seguras y conformes con la normativa vigente.</p>
        </div>
        <div className="bg-ink p-8">
          <Eye size={20} className="text-signal mb-4" />
          <h3 className="font-display font-bold text-lg mb-2">Vision</h3>
          <p className="text-muted text-sm leading-relaxed">Ser la consultora de referencia en resiliencia de infraestructura critica en Peru, reconocida por la precision tecnica de cada entrega.</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-8 mt-12">
        {values.map(function (v) {
          return (
            <div key={v.title} className="flex items-start gap-3">
              <Compass size={16} className="text-technical mt-1 shrink-0" />
              <div>
                <p className="font-mono text-sm mb-1">{v.title}</p>
                <p className="text-muted text-xs leading-relaxed">{v.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-line">
      <div className="flex items-baseline justify-between mb-12 flex-wrap gap-4">
        <div>
          <p className="font-mono text-xs text-technical uppercase tracking-widest mb-3">Servicios</p>
          <h2 className="font-display font-bold text-3xl">Divisiones</h2>
        </div>
        <span className="font-mono text-xs text-muted">CATALOGO / 03 UNIDADES</span>
      </div>
      <div className="grid md:grid-cols-3 gap-px bg-line">
        {DIVISIONS.map(function (s) {
          var Icon = s.icon;
          return (
            <div key={s.code} className="bg-ink p-8 hover:bg-panel transition-colors group flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-signal">{s.code}</span>
                <Icon size={18} className="text-muted group-hover:text-technical transition-colors" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2.5 mt-auto pt-5 border-t border-line">
                {s.items.map(function (item) {
                  return (
                    <li key={item} className="text-xs text-muted flex gap-2">
                      <span className="text-technical shrink-0">-</span>{item}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Proceso() {
  return (
    <section id="proceso" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-line">
      <p className="font-mono text-xs text-technical uppercase tracking-widest mb-3">Como trabajamos</p>
      <h2 className="font-display font-bold text-3xl mb-12">Proceso de trabajo</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {PROCESS.map(function (p) {
          var Icon = p.icon;
          return (
            <div key={p.n} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-signal">{p.n}</span>
                <Icon size={16} className="text-technical" />
              </div>
              <h3 className="font-display font-bold text-base mb-2">{p.title}</h3>
              <p className="text-muted text-xs leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-line">
      <p className="font-mono text-xs text-technical uppercase tracking-widest mb-3">Ecosistema tecnico</p>
      <h2 className="font-display font-bold text-3xl mb-4">Tecnologias y estandares con los que trabajamos</h2>
      <p className="text-muted text-sm max-w-xl mb-10">Implementamos sobre plataformas y marcos reconocidos por la industria.</p>
      <div className="flex flex-wrap gap-3">
        {STACK.map(function (tech) {
          return <span key={tech} className="font-mono text-xs border border-line px-4 py-2.5 text-muted hover:border-technical hover:text-paper transition-colors">{tech}</span>;
        })}
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-24 px-6 md:px-10 border-t border-line">
      <div className="max-w-md mx-auto">
        <p className="font-mono text-xs text-technical uppercase tracking-widest mb-3 text-center">Formulario de requerimiento</p>
        <h2 className="font-display font-bold text-3xl mb-8 text-center">Solicitar diagnostico</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Nombre de la empresa" className="w-full p-3.5 bg-panel border border-line focus:border-signal outline-none text-sm placeholder:text-muted transition-colors" required />
          <input type="email" placeholder="Correo corporativo" className="w-full p-3.5 bg-panel border border-line focus:border-signal outline-none text-sm placeholder:text-muted transition-colors" required />
          <input type="tel" placeholder="Telefono de contacto" className="w-full p-3.5 bg-panel border border-line focus:border-signal outline-none text-sm placeholder:text-muted transition-colors" />
          <textarea placeholder="Cuentanos tu requerimiento" className="w-full p-3.5 bg-panel border border-line focus:border-signal outline-none text-sm placeholder:text-muted transition-colors resize-none" rows={4} required></textarea>
          <button type="submit" className="w-full bg-signal text-ink font-mono font-medium text-sm py-3.5 hover:bg-signal/90 transition-colors">ENVIAR SOLICITUD</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-10">
        <div>
          <p className="font-display font-bold mb-3">ECLOSS <span className="text-signal">SAC</span></p>
          <p className="text-muted text-xs leading-relaxed">Ingenieria de sistemas criticos desde Lima, Peru.</p>
        </div>
        <div>
          <p className="font-mono text-xs text-technical mb-3">NAVEGACION</p>
          <ul className="space-y-2 text-xs text-muted">
            <li><a href="#nosotros" className="hover:text-paper">Quienes somos</a></li>
            <li><a href="#servicios" className="hover:text-paper">Servicios</a></li>
            <li><a href="#proceso" className="hover:text-paper">Proceso</a></li>
            <li><a href="#contacto" className="hover:text-paper">Contacto</a></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs text-technical mb-3">LEGAL</p>
          <ul className="space-y-2 text-xs text-muted">
            <li><a href="/privacidad" className="hover:text-paper">Politica de privacidad</a></li>
            <li><a href="/cookies" className="hover:text-paper">Politica de cookies</a></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs text-technical mb-3">CONTACTO</p>
          <ul className="space-y-2 text-xs text-muted">
            <li>contacto@ecloss.pe</li>
            <li>+51 999 228 3448</li>
            <li>Lima, Peru</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 border-t border-line text-xs text-muted font-mono flex flex-col md:flex-row justify-between gap-4">
        <p>2026 ECLOSS SAC - RUC 20XXXXXXXXX</p>
        <p>-12.0464, -77.0428</p>
      </div>
    </footer>
  );
}

export default function Home() {
  var state = useState(false);
  var menuOpen = state[0];
  var setMenuOpen = state[1];

  var navLinks = [
    { href: "#nosotros", label: "Quienes somos" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Proceso" },
    { href: "#partners", label: "Tecnologias" },
    { href: "#contacto", label: "Contacto" },
  ];

  function toggleMenu() { setMenuOpen(!menuOpen); }
  function closeMenu() { setMenuOpen(false); }

  return (
    <main className="min-h-screen bg-ink text-paper font-body">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} navLinks={navLinks} />
      {menuOpen ? <MobileMenu navLinks={navLinks} close={closeMenu} /> : null}
      <Hero />
      <Nosotros />
      <Servicios />
      <Proceso />
      <Partners />
      <Contacto />
      <Footer />
      <a href="https://wa.me/519992283448" aria-label="Contactar por WhatsApp" className="fixed bottom-8 right-8 bg-panel border border-line p-3.5 z-50 hover:border-technical transition-colors">
        <MessageSquare size={20} className="text-technical" />
      </a>
      <CookieBanner />
    </main>
  );
}
