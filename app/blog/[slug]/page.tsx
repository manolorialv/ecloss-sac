import { POSTS } from "../posts";

export function generateStaticParams() {
  return POSTS.map(function (post) {
    return { slug: post.slug };
  });
}

export function generateMetadata(props) {
  var found = POSTS.filter(function (p) { return p.slug === props.params.slug; });
  var post = found[0];
  if (!post) return { title: "Articulo no encontrado | ECLOS GROUP" };
  return { title: post.title + " | ECLOS GROUP", description: post.excerpt };
}

export default function PostPage(props) {
  var found = POSTS.filter(function (p) { return p.slug === props.params.slug; });
  var post = found[0];

  if (!post) {
    return (
      <main className="min-h-screen bg-ink text-paper font-body px-6 md:px-10 py-24 max-w-3xl mx-auto">
        <a href="/blog" className="font-mono text-xs text-technical">volver al blog</a>
        <h1 className="font-display font-bold text-3xl mt-8">Articulo no encontrado</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ink text-paper font-body px-6 md:px-10 py-24 max-w-3xl mx-auto">
      <a href="/blog" className="font-mono text-xs text-technical">volver al blog</a>
      <div className="flex items-center gap-3 mt-8 mb-4">
        <span className="font-mono text-xs text-signal">{post.category}</span>
        <span className="font-mono text-xs text-muted">{post.date}</span>
      </div>
      <h1 className="font-display font-bold text-3xl md:text-4xl mb-10 leading-tight">{post.title}</h1>
      <div className="space-y-5">
        {post.body.map(function (para, i) {
          return <p key={i} className="text-muted text-base leading-relaxed">{para}</p>;
        })}
      </div>
    </main>
  );
}
