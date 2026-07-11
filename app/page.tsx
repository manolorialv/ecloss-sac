"use client";
import { useState, useEffect, useRef } from "react";
import {
  ChevronRight, Cpu, ShieldCheck, Building2, Menu, X,
  Target, Eye, Compass, Search, PenTool, Wrench, Activity, ChevronDown,
  ShieldQuestion, MapPin, FileCheck, Users,
} from "lucide-react";
import { POSTS } from "./blog/posts";

function WhatsAppIcon(props) {
  var size = props.size || 24;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.386.7 4.607 1.902 6.47L4 29l7.72-1.865A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.8c-1.99 0-3.85-.58-5.41-1.58l-.39-.24-4.03.97 1-3.86-.26-.4A9.76 9.76 0 0 1 5.2 15C5.2 9.04 10.04 4.2 16 4.2S26.8 9.04 26.8 15 21.96 24.8 16 24.8zm5.4-7.34c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5-.17 0-.37-.02-.57-.02s-.52.07-.8.37c-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.75-.71 2-1.4.24-.68.24-1.27.17-1.4-.07-.13-.27-.2-.57-.35z" />
    </svg>
  );
}

function Reveal(props) {
  var ref = useRef(null);
  var state = useState(false);
  var visible = state[0];
  var setVisible = state[1];

  useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(el);
    return function () { observer.disconnect(); };
  }, []);

  var cls = "transition-all duration-700 ease-out " + (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8");
  return <div ref={ref} className={cls}>{props.children}</div>;
}

var SERVICE_CATEGORIES = [
  {
    code: "01",
    title: "Digital",
    subtitle: "Sistemas y Transformacion",
    icon: Cpu,
    intro: "Modernizamos tu tecnologia para que tu operacion escale sin fricciones.",
    items: [
      { title: "Modernizacion de Sistemas Legacy", desc: "Refactorizacion de codigo antiguo y migracion de bases de datos obsoletas hacia arquitecturas de microservicios y contenedores (Docker/Kubernetes)." },
      { title: "IA y Automatizacion Inteligente", desc: "Implementacion de bots para tareas repetitivas (RPA) y agentes de IA generativa para atencion al cliente o analisis masivo de documentos." },
      { title: "Estrategia de Nube (Cloud y FinOps)", desc: "Consultoria para migracion a nubes hibridas y auditoria de consumo (FinOps) para reducir el gasto mensual en AWS o Azure." },
      { title: "Data y Analytics", desc: "Ingenieria de datos (ETL) y creacion de dashboards estrategicos en Power BI o Tableau para toma de decisiones." },
    ],
  },
  {
    code: "02",
    title: "Seguridad y Cumplimiento",
    subtitle: "Compliance",
    icon: ShieldCheck,
    intro: "Blindamos tu operacion frente a riesgos normativos y ciberataques.",
    items: [
      { title: "Ciberseguridad Avanzada", desc: "Pruebas de penetracion (pentesting), monitoreo preventivo (SOC) y planes de respuesta rapida ante ataques de ransomware." },
      { title: "Proteccion de Datos Personales (LPDP)", desc: "Adecuacion tecnica y legal para cumplir con la Ley 29733, registro de bancos de datos y blindaje contra multas de la ANPD." },
      { title: "Gobierno Digital e Interoperabilidad", desc: "Integracion de sistemas mediante APIs con la Plataforma de Interoperabilidad del Estado (PIDE), SUNAT, RENIEC y SUNARP." },
      { title: "Firma Digital y Cero Papel", desc: "Implementacion de software de firma digital certificada con validez legal plena segun la Ley 27269." },
    ],
  },
  {
    code: "03",
    title: "Infraestructura Critica",
    subtitle: "Servicios Generales TI",
    icon: Building2,
    intro: "Soporte fisico, energia y mantenimiento especializado para la continuidad operativa.",
    items: [
      { title: "Climatizacion y Aire Acondicionado (HVAC)", desc: "Instalacion, mantenimiento preventivo y correctivo de equipos de precision para salas de servidores y equipos de confort para oficinas." },
      { title: "Energia Critica y Respaldo", desc: "Implementacion de sistemas de energia ininterrumpida (UPS) y mantenimiento preventivo de generadores a combustible." },
      { title: "Electricidad Industrial y Pozos a Tierra", desc: "Instalacion de tableros electricos, cableado de potencia y protocolos de medicion de pozo a tierra certificados por ingeniero electrico." },
      { title: "Cableado Estructurado y Redes de Datos", desc: "Tendido de fibra optica, instalacion de puntos de voz/datos y ordenamiento profesional de racks y gabinetes de comunicacion." },
      { title: "Seguridad Electronica y Vigilancia (CCTV)", desc: "Camaras IP de alta resolucion, alarmas contra intrusion, cercos electricos y sistemas de monitoreo remoto por software." },
      { title: "Sistemas Contra Incendio", desc: "Instalacion de sensores de humo, luces de emergencia, extintores y sistemas de extincion por agentes limpios para salas de servidores." },
      { title: "Control de Accesos y Biometria", desc: "Instalacion de torniquetes, lectoras de huella o rostro y cerraduras electromagneticas para puertas de alta seguridad." },
      { title: "Gestion de Residuos Tecnologicos (RAEE)", desc: "Recoleccion, transporte y disposicion final certificada de equipos electronicos obsoletos o malogrados." },
      { title: "Mantenimiento Preventivo Integral", desc: "Gestion bajo un solo contrato de mantenimiento general que cubre electricidad, soporte tecnico, cerrajeria y reparaciones menores." },
    ],
  },
];

var PROCESS = [
  { n: "01", title: "Diagnostico", icon: Search, desc: "Evaluamos tu operacion actual, riesgos e infraestructura para entender el punto de partida real." },
  { n: "02", title: "Diseno", icon: PenTool, desc: "Disenamos la arquitectura de solucion con rutas primarias y de respaldo, alineada a tu presupuesto." },
  { n: "03", title: "Implementacion", icon: Wrench, desc: "Ejecutamos por fases, con hitos verificables y minima disrupcion a tus operaciones diarias." },
  { n: "04", title: "Monitoreo", icon: Activity, desc: "Supervision continua post-entrega, con reportes de estado y ajustes proactivos." },
];

var STACK = [
  "AWS", "Microsoft Azure", "Google Cloud", "Cisco", "Fortinet",
  "ISO 27001", "ISO 9001", "Ley 29733",
];

var DIFERENCIADORES = [
  { icon: Users, title: "Un solo equipo", desc: "Digital, compliance e infraestructura bajo un mismo contrato, sin coordinar entre proveedores distintos." },
  { icon: MapPin, title: "Cobertura nacional", desc: "Atendemos proyectos en todo el Peru, con presencial para infraestructura y remoto para servicios digitales." },
  { icon: FileCheck, title: "Cumplimiento incorporado", desc: "Cada solucion se disena considerando la normativa peruana vigente desde el inicio, no como un tramite posterior." },
  { icon: ShieldQuestion, title: "Confidencialidad garantizada", desc: "Firmamos acuerdos de confidencialidad (NDA) antes de acceder a informacion sensible de tu empresa." },
];

var FAQS = [
  { q: "Cuanto tiempo toma un diagnostico inicial?", a: "Normalmente entre 5 y 10 dias habiles, dependiendo del alcance de tu operacion y del numero de sistemas involucrados." },
  { q: "Trabajan con empresas fuera de Lima?", a: "Si, atendemos proyectos en todo el Peru. Los servicios digitales se ejecutan de forma remota y los de infraestructura fisica con visitas presenciales coordinadas." },
  { q: "Firman NDA antes de la evaluacion?", a: "Si. Firmamos un acuerdo de confidencialidad antes de acceder a cualquier informacion sensible de tu empresa." },
  { q: "Que pasa si ya tengo un proveedor de TI?", a: "Podemos trabajar en paralelo con tu equipo actual o realizar una auditoria independiente, sin necesidad de reemplazar a tu proveedor." },
  { q: "Los servicios se pueden contratar por separado?", a: "Si. Puedes contratar una sola division (Digital, Compliance o Infraestructura) o las tres de forma integrada." },
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
      <a href="/" className="font-display font-bold tracking-tight text-lg">ECLOS <span className="text-signal">GROUP</span></a>
      <div className="hidden md:flex gap-8 text-sm font-mono text-muted">
        {navLinks.map(function (l) {
          return <a key={l.href} href={l.href} className="hover:text-paper transition-colors">{l.label}</a>;
        })}
      </div>
      <a href="#contacto" className="hidden md:inline-flex items-center gap-1.5 font-mono text-xs bg-signal text-ink px-4 py-2.5 hover:bg-signal/90 hover:shadow-lg hover:shadow-signal/20 transition-all duration-300">DIAGNOSTICO <ChevronRight size={14} /></a>
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
          <p className="font-mono text-xs tracking-widest text-technical uppercase mb-6">ECLOS GROUP - Ingenieria tecnologica integral, Lima PE</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight mb-6">
            Sistemas que<br />
            <span className="relative inline-block">
              nunca se detienen
              <svg className="absolute -bottom-3 left-0 w-full" height="10" viewBox="0 0 320 10" preserveAspectRatio="none">
                <line x1="0" y1="5" x2="320" y2="5" stroke="#FF6B35" strokeWidth="1"></line>
                <line x1="0" y1="0" x2="0" y2="10" stroke="#FF6B35" strokeWidth="1"></line>
                <line x1="320" y1="0" x2="320" y2="10" stroke="#FF6B35" strokeWidth="1"></line>
              </svg>
            </span>
            <span className="text-muted">.</span>
          </h1>
          <p className="text-muted text-base md:text-lg max-w-md mb-10 leading-relaxed">
            Unificamos transformacion digital, ciberseguridad y infraestructura critica bajo un solo equipo, para que tu empresa siga operando incluso en el peor escenario.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#contacto" className="inline-flex items-center gap-2 bg-signal text-ink font-mono font-medium text-sm px-6 py-3.5 hover:bg-signal/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-signal/20 transition-all duration-300">SOLICITAR DIAGNOSTICO <ChevronRight size={16} /></a>
            <a href="#servicios" className="inline-flex items-center gap-1.5 font-mono text-sm text-muted hover:text-paper transition-colors duration-300 border-b border-transparent hover:border-technical pb-1">VER SERVICIOS</a>
          </div>
        </div>

        <div className="relative hidden md:block diagram-glow">
          <svg viewBox="0 0 400 340" className="w-full h-auto">
            <line x1="200" y1="170" x2="80" y2="60" stroke="#1F2A3A" strokeWidth="1.5"></line>
            <line x1="200" y1="170" x2="320" y2="60" stroke="#1F2A3A" strokeWidth="1.5"></line>
            <line x1="200" y1="170" x2="200" y2="290" stroke="#1F2A3A" strokeWidth="1.5"></line>
            <line x1="80" y1="60" x2="320" y2="60" stroke="#4FD1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"></line>
            <line x1="80" y1="60" x2="200" y2="290" stroke="#4FD1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"></line>
            <line x1="320" y1="60" x2="200" y2="290" stroke="#4FD1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"></line>
            <circle cx="200" cy="170" r="34" fill="#10151F" stroke="#FF6B35" strokeWidth="1.5" className="pulse"></circle>
            <text x="200" y="166" textAnchor="middle" fill="#EDF1F7" fontSize="9" fontFamily="JetBrains Mono">NUCLEO</text>
            <text x="200" y="178" textAnchor="middle" fill="#8A94A6" fontSize="8" fontFamily="JetBrains Mono">ECLOS</text>
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
        ECLOS GROUP nace de la conviccion de que la resiliencia operativa no se improvisa: se disena. Integramos tecnologia, cumplimiento normativo e infraestructura fisica bajo un mismo criterio de ingenieria, para que cada decision de negocio este respaldada por un sistema que no falla en el momento critico.
      </p>
      <div className="grid md:grid-cols-2 gap-px bg-line">
        <div className="bg-ink p-8 hover:-translate-y-1 hover:bg-panel transition-all duration-300">
          <Target size={20} className="text-signal mb-4" />
          <h3 className="font-display font-bold text-lg mb-2">Mision</h3>
          <p className="text-muted text-sm leading-relaxed">Proteger la continuidad operativa de nuestros clientes mediante arquitecturas tecnologicas y fisicas redundantes, seguras y conformes con la normativa vigente.</p>
        </div>
        <div className="bg-ink p-8 hover:-translate-y-1 hover:bg-panel transition-all duration-300">
          <Eye size={20} className="text-signal mb-4" />
          <h3 className="font-display font-bold text-lg mb-2">Vision</h3>
          <p className="text-muted text-sm leading-relaxed">Ser el grupo de referencia en resiliencia de infraestructura critica en Peru, reconocido por la precision tecnica de cada entrega.</p>
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

function ServiceCategory(props) {
  var cat = props.cat;
  var isOpen = props.isOpen;
  var onToggle = props.onToggle;
  var Icon = cat.icon;

  return (
    <div className="border border-line hover:border-technical/40 transition-colors duration-300">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left hover:bg-panel transition-all duration-300">
        <div className="flex items-center gap-5">
          <span className="font-mono text-xs text-signal shrink-0">{cat.code}</span>
          <Icon size={22} className="text-technical shrink-0" />
          <div>
            <h3 className="font-display font-bold text-lg md:text-xl">{cat.title}</h3>
            <p className="font-mono text-xs text-muted mt-1">{cat.subtitle}</p>
          </div>
        </div>
        <ChevronDown size={20} className={isOpen ? "text-signal shrink-0 rotate-180 transition-transform duration-300" : "text-muted shrink-0 transition-transform duration-300"} />
      </button>
      {isOpen ? (
        <div className="px-6 md:px-8 pb-8 border-t border-line pt-6">
          <p className="text-muted text-sm mb-6 max-w-2xl">{cat.intro}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {cat.items.map(function (item) {
              return (
                <div key={item.title} className="flex gap-3">
                  <span className="text-technical font-mono text-xs mt-1 shrink-0">-</span>
                  <div>
                    <p className="font-mono text-sm mb-1.5">{item.title}</p>
                    <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Servicios() {
  var state = useState(0);
  var openIndex = state[0];
  var setOpenIndex = state[1];

  return (
    <section id="servicios" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-line">
      <div className="flex items-baseline justify-between mb-12 flex-wrap gap-4">
        <div>
          <p className="font-mono text-xs text-technical uppercase tracking-widest mb-3">Servicios</p>
          <h2 className="font-display font-bold text-3xl">Que hacemos</h2>
        </div>
        <span className="font-mono text-xs text-muted">17 SERVICIOS / 03 AREAS</span>
      </div>
      <div className="space-y-4">
        {SERVICE_CATEGORIES.map(function (cat, i) {
          return (
            <ServiceCategory
              key={cat.code}
              cat={cat}
              isOpen={openIndex === i}
              onToggle={function () { setOpenIndex(openIndex === i ? -1 : i); }}
            />
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
            <div key={p.n} className="relative hover:-translate-y-1 transition-transform duration-300">
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

function PorQueElegirnos() {
  return (
    <section className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-line">
      <p className="font-mono text-xs text-technical uppercase tracking-widest mb-3">Por que ECLOS GROUP</p>
      <h2 className="font-display font-bold text-3xl mb-12">Lo que nos distingue</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {DIFERENCIADORES.map(function (d) {
          var Icon = d.icon;
          return (
            <div key={d.title} className="hover:-translate-y-1 transition-transform duration-300">
              <Icon size={22} className="text-signal mb-4" />
              <p className="font-display font-bold text-base mb-2">{d.title}</p>
              <p className="text-muted text-xs leading-relaxed">{d.desc}</p>
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
          return <span key={tech} className="font-mono text-xs border border-line px-4 py-2.5 text-muted hover:border-technical hover:text-paper hover:-translate-y-0.5 transition-all duration-300">{tech}</span>;
        })}
      </div>
    </section>
  );
}

function BlogTeaser() {
  var latest = POSTS.slice(0, 3);
  return (
    <section id="blog" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-line">
      <div className="flex items-baseline justify-between mb-12 flex-wrap gap-4">
        <div>
          <p className="font-mono text-xs text-technical uppercase tracking-widest mb-3">Blog</p>
          <h2 className="font-display font-bold text-3xl">Ultimos articulos</h2>
        </div>
        <a href="/blog" className="font-mono text-xs text-technical hover:text-paper transition-colors duration-300">VER TODOS</a>
      </div>
      <div className="grid md:grid-cols-3 gap-px bg-line">
        {latest.map(function (post) {
          return (
            <a key={post.slug} href={"/blog/" + post.slug} className="bg-ink p-8 hover:bg-panel hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-signal">{post.category}</span>
              </div>
              <h3 className="font-display font-bold text-base mb-3 leading-snug">{post.title}</h3>
              <p className="text-muted text-xs leading-relaxed">{post.excerpt}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function FAQItem(props) {
  var faq = props.faq;
  var isOpen = props.isOpen;
  var onToggle = props.onToggle;
  return (
    <div className="border-b border-line">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 py-6 text-left">
        <span className="font-mono text-sm">{faq.q}</span>
        <ChevronDown size={18} className={isOpen ? "text-signal shrink-0 rotate-180 transition-transform duration-300" : "text-muted shrink-0 transition-transform duration-300"} />
      </button>
      {isOpen ? <p className="text-muted text-sm leading-relaxed pb-6 max-w-2xl">{faq.a}</p> : null}
    </div>
  );
}

function FAQ() {
  var state = useState(0);
  var openIndex = state[0];
  var setOpenIndex = state[1];

  return (
    <section className="py-24 px-6 md:px-10 max-w-4xl mx-auto border-t border-line">
      <p className="font-mono text-xs text-technical uppercase tracking-widest mb-3">Preguntas frecuentes</p>
      <h2 className="font-display font-bold text-3xl mb-12">Resolvemos tus dudas</h2>
      <div>
        {FAQS.map(function (faq, i) {
          return (
            <FAQItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={function () { setOpenIndex(openIndex === i ? -1 : i); }}
            />
          );
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
          <input type="text" placeholder="Nombre de la empresa" className="w-full p-3.5 bg-panel border border-line focus:border-signal outline-none text-sm placeholder:text-muted transition-colors duration-300" required />
          <input type="email" placeholder="Correo corporativo" className="w-full p-3.5 bg-panel border border-line focus:border-signal outline-none text-sm placeholder:text-muted transition-colors duration-300" required />
          <input type="tel" placeholder="Telefono de contacto" className="w-full p-3.5 bg-panel border border-line focus:border-signal outline-none text-sm placeholder:text-muted transition-colors duration-300" />
          <textarea placeholder="Cuentanos tu requerimiento" className="w-full p-3.5 bg-panel border border-line focus:border-signal outline-none text-sm placeholder:text-muted transition-colors duration-300 resize-none" rows={4} required></textarea>
          <button type="submit" className="w-full bg-signal text-ink font-mono font-medium text-sm py-3.5 hover:bg-signal/90 hover:shadow-lg hover:shadow-signal/20 transition-all duration-300">ENVIAR SOLICITUD</button>
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
          <p className="font-display font-bold mb-3">ECLOS <span className="text-signal">GROUP</span></p>
          <p className="text-muted text-xs leading-relaxed">Ingenieria tecnologica integral desde Lima, Peru.</p>
        </div>
        <div>
          <p className="font-mono text-xs text-technical mb-3">NAVEGACION</p>
          <ul className="space-y-2 text-xs text-muted">
            <li><a href="#nosotros" className="hover:text-paper transition-colors duration-300">Quienes somos</a></li>
            <li><a href="#servicios" className="hover:text-paper transition-colors duration-300">Servicios</a></li>
            <li><a href="#proceso" className="hover:text-paper transition-colors duration-300">Proceso</a></li>
            <li><a href="/blog" className="hover:text-paper transition-colors duration-300">Blog</a></li>
            <li><a href="#contacto" className="hover:text-paper transition-colors duration-300">Contacto</a></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs text-technical mb-3">LEGAL</p>
          <ul className="space-y-2 text-xs text-muted">
            <li><a href="/privacidad" className="hover:text-paper transition-colors duration-300">Politica de privacidad</a></li>
            <li><a href="/cookies" className="hover:text-paper transition-colors duration-300">Politica de cookies</a></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs text-technical mb-3">CONTACTO</p>
          <ul className="space-y-2 text-xs text-muted">
            <li>contacto@eclosgroup.pe</li>
            <li>+51 999 228 3448</li>
            <li>Lima, Peru</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 border-t border-line text-xs text-muted font-mono flex flex-col md:flex-row justify-between gap-4">
        <p>2026 ECLOS GROUP - RUC 20XXXXXXXXX</p>
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
    { href: "/blog", label: "Blog" },
    { href: "#contacto", label: "Contacto" },
  ];

  function closeMenu() { setMenuOpen(false); }

  return (
    <main className="min-h-screen bg-ink text-paper font-body">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} navLinks={navLinks} />
      {menuOpen ? <MobileMenu navLinks={navLinks} close={closeMenu} /> : null}
      <Hero />
      <Reveal><Nosotros /></Reveal>
      <Reveal><Servicios /></Reveal>
      <Reveal><Proceso /></Reveal>
      <Reveal><PorQueElegirnos /></Reveal>
      <Reveal><Partners /></Reveal>
      <Reveal><BlogTeaser /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><Contacto /></Reveal>
      <Footer />
      
        href="https://wa.me/519992283448"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg z-50 hover:scale-110 transition-transform duration-300"
      >
        <WhatsAppIcon size={26} />
      </a>
      <CookieBanner />
    </main>
  );
}
