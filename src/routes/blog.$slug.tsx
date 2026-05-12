import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, User, MessageCircle, Mail, Phone, ArrowRight, ChevronDown } from "lucide-react";
import { posts, type BlogPost, type FAQ } from "@/data/posts";
import { CONTACT } from "@/lib/contact";
import { useState } from "react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Apoorva Verma` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "article:author", content: loaderData.post.author },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="text-center py-32">
      <h1 className="text-3xl font-display">Article not found</h1>
      <Link to="/blog" className="glass-btn-gold rounded-full px-6 py-3 mt-6 inline-block">Back to journal</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="text-center py-32">
      <p>{error.message}</p>
      <button onClick={reset} className="glass-btn rounded-full px-6 py-3 mt-4">Retry</button>
    </div>
  ),
  component: Post,
});

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full p-6 flex items-center justify-between text-left">
        <span className="font-display text-lg pr-4">{q}</span>
        <ChevronDown className={`text-primary transition-transform shrink-0 ${open ? "rotate-180" : ""}`} size={20}/>
      </button>
      {open && <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed animate-fade-in" dangerouslySetInnerHTML={{ __html: a }} />}
    </div>
  );
}

function Post() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  // FAQ JSON-LD for AEO
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f: FAQ) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") },
    })),
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <div className="grid lg:grid-cols-[320px_1fr] gap-10">
        {/* SIDEBAR — booking & backlinks */}
        <aside className="lg:sticky lg:top-28 lg:self-start space-y-6 order-2 lg:order-1">
          <div className="glass-strong rounded-3xl p-6">
            <h3 className="font-display text-xl mb-2">Book Apoorva Verma</h3>
            <p className="text-xs text-muted-foreground mb-5">Free 20-min discovery call. Pick a channel.</p>
            <div className="space-y-3">
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="glass-btn-gold rounded-full px-4 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                <MessageCircle size={14}/> WhatsApp
              </a>
              <a href={`mailto:${CONTACT.email}`} className="glass-btn rounded-full px-4 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                <Mail size={14}/> Email
              </a>
              <a href={`tel:${CONTACT.phoneRaw}`} className="glass-btn rounded-full px-4 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                <Phone size={14}/> Call
              </a>
              <Link to="/contact" className="glass-btn rounded-full px-4 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                Book Appointment <ArrowRight size={12}/>
              </Link>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="font-display text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="gold-underline">Image Consulting</Link></li>
              <li><Link to="/services" className="gold-underline">Personal Branding</Link></li>
              <li><Link to="/services" className="gold-underline">Grooming & Styling</Link></li>
              <li><Link to="/services" className="gold-underline">Corporate Training</Link></li>
            </ul>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="font-display text-lg mb-4">Continue reading</h3>
            <ul className="space-y-3 text-sm">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to="/blog/$slug" params={{ slug: r.slug }} className="text-muted-foreground hover:text-primary transition-colors block">
                    <div className="text-xs uppercase tracking-widest text-primary mb-1">{r.category}</div>
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ARTICLE */}
        <article className="order-1 lg:order-2 max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary mb-4">{post.category}</div>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-5 text-xs text-muted-foreground mb-12 pb-8 border-b border-primary/15">
            <span className="flex items-center gap-1.5"><User size={12}/>{post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={12}/>{new Date(post.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="flex items-center gap-1.5"><Clock size={12}/>{post.readTime}</span>
          </div>

          <div className="prose-luxury space-y-10">
            {post.body.map((s: BlogPost["body"][number]) => (
              <section key={s.heading}>
                <h2 className="text-2xl md:text-3xl font-display mb-4 text-gradient-gold">{s.heading}</h2>
                <p className="text-foreground/85 leading-[1.85] text-[17px]" dangerouslySetInnerHTML={{ __html: s.content }} />
              </section>
            ))}
          </div>

          {/* Author */}
          <div className="glass rounded-3xl p-8 mt-16 flex gap-5 items-start">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent shrink-0 flex items-center justify-center text-2xl font-display text-background">A</div>
            <div>
              <div className="text-xs uppercase tracking-widest text-primary mb-1">Written by</div>
              <h4 className="text-xl font-display">{post.author}</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{post.authorBio}</p>
            </div>
          </div>

          {/* FAQs */}
          <section className="mt-20">
            <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Questions answered</p>
            <h2 className="text-3xl md:text-4xl font-light mb-10">Frequently asked</h2>
            <div className="space-y-4">
              {post.faqs.map((f: FAQ) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </section>

          {/* CTA */}
          <div className="glass-strong rounded-3xl p-10 mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-light">Ready to do this work?</h3>
            <p className="mt-3 text-muted-foreground text-sm">Book a discovery call or message me directly.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="glass-btn-gold rounded-full px-6 py-3 text-xs uppercase tracking-widest">WhatsApp</a>
              <Link to="/contact" className="glass-btn rounded-full px-6 py-3 text-xs uppercase tracking-widest">Book Appointment</Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
