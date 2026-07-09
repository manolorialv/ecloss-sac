"use client";
import { MessageSquare, ShieldCheck, Cpu, Building2, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tighter">ECLOSS <span className="text-cyan-500">SAC</span></h1>
        <div className="flex gap-8 text-sm font-medium text-gray-300">
          <a href="#servicios" className="hover:text-cyan-500 transition">Servicios</a>
          <a href="#contacto" className="hover:text-cyan-500 transition">Contacto</a>
        </div>
      </nav>

      <section className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
          Ingeniería de <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Resiliencia</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
          Consultoría integral en TI, Ciberseguridad e Infraestructura Crítica. 
          Blindamos su operación con estándares de clase mundial desde Lima, Perú.
        </p>
        <a href="#contacto" className="flex items-center gap-2 bg-cyan-600 px-8 py-4 font-bold hover:bg-cyan-700 transition">
          Solicitar Diagnóstico <ChevronRight size={18} />
        </a>
      </section>

      <section id="servicios" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Nuestras Divisiones</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Digital", icon: <Cpu />, desc: "Transformación, IA, Nube y Análisis de Datos." },
            { title: "Compliance", icon: <ShieldCheck />, desc: "Ciberseguridad Avanzada y Ley 29733." },
            { title: "Infraestructura", icon: <Building2 />, desc: "HVAC, Energía, Seguridad y Facility." }
          ].map((s, i) => (
            <div key={i} className="p-8 border border-white/10 bg-white/5 hover:border-cyan-500 transition-all duration-300">
              <div className="mb-4 text-cyan-500">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
	{/* Formulario */}
      <section className="p-8 md:p-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Solicitar Diagnóstico</h2>
        <form className="max-w-md mx-auto space-y-4 bg-gray-900 p-8 rounded-xl border border-cyan-500/30">
          <input type="text" placeholder="Nombre de la Empresa" className="w-full p-3 bg-black border border-cyan-400 rounded" required />
          <input type="email" placeholder="Correo Corporativo" className="w-full p-3 bg-black border border-cyan-400 rounded" required />
          <textarea placeholder="Cuéntanos tu requerimiento" className="w-full p-3 bg-black border border-cyan-400 rounded" rows={4} required />
          <button type="submit" className="w-full bg-cyan-500 text-black font-bold py-3 rounded hover:bg-cyan-300 transition-colors">
            Enviar Solicitud
          </button>
        </form>
      </section>	


      <footer className="border-t border-white/10 py-16 px-10 text-gray-500 text-sm">
        <div className="text-center">
          <p>© 2026 ECLOSS SAC. Lima, Perú. RUC: 20XXXXXXXXX</p>
          <p className="font-mono mt-2">contacto@ecloss.pe</p>
        </div>
      </footer>

      <a href="https://wa.me/519992283448" className="fixed bottom-8 right-8 bg-green-600 p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition duration-300">
        <MessageSquare size={24} />
      </a>
    </main>
  );
}
