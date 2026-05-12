import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import portrait from "@/assets/portrait-hero.jpg";
import portrait2 from "@/assets/portrait-about.jpg";
import portrait3 from "@/assets/portrait-sitting.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import award1 from "@/assets/award-1.jpg";
import award2 from "@/assets/award-2.jpg";

export const Route = createFileRoute("/social")({
  head: () => ({
    meta: [
      { title: "Social — Instagram & LinkedIn | Apoorva Verma" },
      { name: "description", content: "Follow Apoorva Verma on Instagram and LinkedIn. Recent posts, behind-the-scenes and styling insights." },
      { property: "og:title", content: "Follow Apoorva Verma" },
      { property: "og:description", content: "Latest posts and updates from Instagram and LinkedIn." },
    ],
  }),
  component: Social,
});

const igPosts = [
  { img: portrait, caption: "Behind today's editorial shoot — quiet luxury, head to toe.", likes: 1240, comments: 86 },
  { img: event1, caption: "Speaking at the Women Leadership Forum — 'Quiet Authority'.", likes: 980, comments: 54 },
  { img: portrait2, caption: "What you wear is the first sentence you speak.", likes: 1612, comments: 122 },
  { img: award1, title: "Award", caption: "Honoured to receive the Image Consultant of the Year 2024.", likes: 2100, comments: 198 },
  { img: portrait3, caption: "The 5-piece capsule that runs my entire travel calendar.", likes: 870, comments: 41 },
  { img: event2, caption: "A morning with the leadership team — executive presence intensive.", likes: 760, comments: 38 },
];

const liPosts = [
  { img: event1, title: "The 3 image mistakes I see in every boardroom",
    excerpt: "Most leaders don't have a wardrobe problem — they have a coherence problem. Here's how to spot it…",
    reactions: 412, comments: 47 },
  { img: award2, title: "Receiving the Image Consultant of the Year award",
    excerpt: "Eight years ago I started this practice in a single room. Today, an honour I'll never take lightly…",
    reactions: 1280, comments: 156 },
  { img: portrait3, title: "Personal branding is not a logo — it's a behaviour",
    excerpt: "A short essay on why your LinkedIn headline matters less than how you walk into the room…",
    reactions: 689, comments: 73 },
];

const channels = [
  { icon: Instagram, label: "Instagram", handle: "@apoorvaverma", href: CONTACT.instagram, color: "from-[#FFC9A8] via-[#FF7E5F] to-[#E91E63]" },
  { icon: Linkedin, label: "LinkedIn", handle: "Apoorva Verma", href: CONTACT.linkedin, color: "from-[#0A66C2] to-[#004182]" },
  { icon: Facebook, label: "Facebook", handle: "Apoorva Verma", href: CONTACT.facebook, color: "from-[#1877F2] to-[#0A4DA1]" },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.6 } };

function Social() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <motion.div {...fadeUp} className="text-center mb-14">
        <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">Follow Along</p>
        <h1 className="text-5xl md:text-6xl font-light">Social <span className="italic text-gradient-gold">Feed</span></h1>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">Behind-the-scenes from shoots, styling thoughts, client wins and the occasional unfiltered note.</p>
      </motion.div>

      {/* Follow CTAs */}
      <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-5 mb-20">
        {channels.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="glass rounded-3xl p-7 hover-lift flex items-center gap-5 group">
            <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center shrink-0`}>
              <c.icon className="text-white" size={26}/>
            </div>
            <div className="flex-1">
              <div className="text-[10px] tracking-widest uppercase text-primary">{c.label}</div>
              <div className="text-lg font-display">{c.handle}</div>
            </div>
            <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18}/>
          </a>
        ))}
      </motion.div>

      {/* Instagram grid */}
      <section className="mb-24">
        <motion.div {...fadeUp} className="flex items-end justify-between mb-8">
          <div>
            <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Latest from</p>
            <h2 className="text-3xl md:text-4xl font-light">Instagram <span className="italic text-gradient-gold">@apoorvaverma</span></h2>
          </div>
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="glass-btn-gold rounded-full px-6 py-3 text-xs uppercase tracking-widest hidden md:inline-flex items-center gap-2">
            Follow <Instagram size={14}/>
          </a>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {igPosts.map((p, i) => (
            <motion.a
              key={i}
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="relative aspect-square overflow-hidden rounded-2xl glass group block"
            >
              <img src={p.img} alt={p.caption} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <p className="text-xs text-foreground/95 mb-3 line-clamp-3">{p.caption}</p>
                <div className="flex gap-4 text-[10px] tracking-widest uppercase text-primary">
                  <span className="flex items-center gap-1"><Heart size={12}/> {p.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle size={12}/> {p.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* LinkedIn posts */}
      <section className="mb-20">
        <motion.div {...fadeUp} className="flex items-end justify-between mb-8">
          <div>
            <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Latest from</p>
            <h2 className="text-3xl md:text-4xl font-light">LinkedIn <span className="italic text-gradient-gold">Essays</span></h2>
          </div>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="glass-btn-gold rounded-full px-6 py-3 text-xs uppercase tracking-widest hidden md:inline-flex items-center gap-2">
            Follow <Linkedin size={14}/>
          </a>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {liPosts.map((p, i) => (
            <motion.a
              key={i}
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-3xl overflow-hidden hover-lift block"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover object-top"/>
              </div>
              <div className="p-7">
                <h3 className="text-lg font-display mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">{p.excerpt}</p>
                <div className="flex gap-4 text-[10px] tracking-widest uppercase text-primary">
                  <span className="flex items-center gap-1"><Heart size={12}/> {p.reactions}</span>
                  <span className="flex items-center gap-1"><MessageCircle size={12}/> {p.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <motion.div {...fadeUp} className="glass-strong rounded-3xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-light">Let's stay in <span className="italic text-gradient-gold">touch</span></h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Follow on the platforms you actually use. I share what I'd tell a private client — minus the price tag.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {channels.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="glass-btn rounded-full px-6 py-3 text-xs uppercase tracking-widest inline-flex items-center gap-2">
              <c.icon size={14} className="text-primary"/> Follow on {c.label}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
