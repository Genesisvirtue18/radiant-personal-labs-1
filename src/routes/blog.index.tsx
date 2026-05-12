import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — Image Consulting & Personal Branding Insights" },
      { name: "description", content: "Long-form essays on image management, personal branding, executive presence and colour analysis by Apoorva Verma." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
        <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">The Journal</p>
        <h1 className="text-5xl md:text-6xl font-light">Field notes on <span className="italic text-gradient-gold">presence</span></h1>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">Long-form essays on image, branding and the quiet craft of being remembered.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <motion.div key={p.slug} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:0.5,delay:i*0.1}}>
            <Link to="/blog/$slug" params={{ slug: p.slug }} className="glass rounded-3xl p-8 hover-lift block group h-full">
              <div className="text-xs uppercase tracking-widest text-primary mb-4">{p.category}</div>
              <h2 className="text-2xl font-display leading-tight mb-4 group-hover:text-primary transition-colors">{p.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar size={12}/>{new Date(p.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                <span className="flex items-center gap-1.5"><Clock size={12}/>{p.readTime}</span>
              </div>
              <div className="mt-6 text-primary text-sm flex items-center gap-2 gold-underline w-fit">Read article <ArrowRight size={14}/></div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
