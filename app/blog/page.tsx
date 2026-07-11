import { POSTS } from "./posts";

export var metadata = {
  title: "Blog | ECLOS GROUP",
  description: "Articulos sobre transformacion digital, ciberseguridad e infraestructura critica para empresas en Peru.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-ink text-paper font-body px-6 md:px-10 py-24 max-w-5xl mx-auto">
      <a href="/" className="font-mono text-xs text-technical">volver al inicio</a>
      <p className="font-mono text-xs text-technical uppercase tracking-widest mt-8 mb-3">Blog</p>
      <h1 className="font-display font-bold text-4xl mb-4">Noticias y analisis</h1>
      <p className="text-muted text-base max-w-xl mb-16">Ideas practicas sobre tecnologia, cumplimiento normativo e infraestructura, pensadas para el mercado peruano.</p>
      <div className="space-y-px bg-line">
        {POSTS.map(function (post) {
          return (
            <a key={post.slug} href={"/blog/" + post.slug} className="block bg-ink p-8 hover:bg-panel transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-signal">{post.category}</span>
                <span className="font-mono text-xs text-muted">{post.date}</span>
              </div>
              <h2 className="font-display font-bold text-xl mb-2">{post.title}</h2>
              <p className="text-muted text-sm leading-relaxed">{post.excerpt}</p>
            </a>
          );
        })}
      </div>
    </main>
  );
}
