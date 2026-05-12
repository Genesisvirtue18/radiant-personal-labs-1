import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Award, Heart, Target, Compass, BookOpen, Globe, Users } from "lucide-react";
import portrait from "@/assets/portrait-sitting.jpg";
import portraitAbout from "@/assets/portrait-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Apoorva Verma — Image Consultant, Brand Strategist & Speaker" },
      { name: "description", content: "Apoorva Verma's story — image management as identity work. AICI-aligned methodology, 8+ years across boardrooms, brides and brands." },
      { property: "og:title", content: "About Apoorva Verma" },
      { property: "og:description", content: "Image management as identity work — story, philosophy and credentials." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Transformation", desc: "Real change comes from the inside out — wardrobes are only the surface layer." },
  { icon: Award, title: "Expertise", desc: "AICI-aligned methodology, 8+ years across boardrooms, weddings and brand campaigns." },
  { icon: Target, title: "Personal Branding", desc: "Every client gets a strategy and a system — never a template." },
  { icon: Sparkles, title: "Quiet Luxury", desc: "Restraint, intention, refinement — never loud, always remembered." },
];

const journey = [
  { year: "2008", title: "Trained in fashion & styling", desc: "Foundation in design, fabric, garment construction and the language of style." },
  { year: "2012", title: "Modelling, hosting & on-camera work", desc: "A decade in front of the lens — learning posture, light, presence and the discipline of looking effortless." },
  { year: "2017", title: "AICI image-consulting certification", desc: "Formal training in image management, behaviour, communication and the psychology of perception." },
  { year: "2020", title: "Founded the studio", desc: "1:1 client practice in image management, personal branding and corporate training." },
  { year: "2023", title: "Speaker, trainer & editorial collaborator", desc: "40+ corporate workshops, leadership-forum keynotes and editorial features in national lifestyle press." },
];

const method = [
  { icon: Compass, t: "Discover", d: "We start with a deep interview — who you are, who you want to become, where image is leaking energy." },
  { icon: BookOpen, t: "Diagnose", d: "Body type, face shape, colour palette, personality and lifestyle audit. Behaviour and communication assessment." },
  { icon: Sparkles, t: "Design", d: "A bespoke image strategy — wardrobe, grooming, etiquette, presence — anchored to your goals and pocket." },
  { icon: Users, t: "Deliver", d: "Implementation: closet edits, personal shopping, photoshoots, coaching — and follow-through so it sticks." },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.6 } };

function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative order-2 md:order-1">
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-3xl -z-10"/>
          <img src={portrait} alt="Apoorva Verma portrait" loading="lazy" className="rounded-3xl object-cover object-top w-full aspect-[4/5] glass-strong p-2"/>
        </motion.div>
        <motion.div {...fadeUp} className="order-1 md:order-2">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">The Story</p>
          <h1 className="text-5xl md:text-6xl font-light leading-[1.05]">
            I built this practice for the woman <span className="italic text-gradient-gold">I once was</span>.
          </h1>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I started my career in a beige cubicle, watching brilliant colleagues get
              passed over because they didn't <em>look the part</em>. I was one of them.
            </p>
            <p>
              The shift didn't begin with a new dress. It began with a question:
              <span className="text-foreground italic"> "What do I want people to feel before I open my mouth?"</span>
            </p>
            <p>
              That single question became a methodology. A methodology became
              hundreds of one-to-one transformations. And those transformations
              became the work I do today — image management as identity work.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Long-form bio */}
      <section className="grid md:grid-cols-5 gap-12 mb-32 items-start">
        <motion.div {...fadeUp} className="md:col-span-2 md:sticky md:top-28">
          <img src={portraitAbout} alt="Apoorva Verma at work" loading="lazy" className="rounded-3xl object-cover object-top w-full aspect-[4/5] glass-strong p-2"/>
        </motion.div>
        <motion.div {...fadeUp} className="md:col-span-3 space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-primary tracking-[0.3em] text-xs uppercase">Who I am</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight">More than another <span className="italic text-gradient-gold">image consultant</span>.</h2>
          <p>
            My background is unusual on purpose. A formal education in fashion and image,
            combined with years in front of the camera as a model and host, then sharpened
            by certified training in image management. That mix means I understand both
            sides of the lens — how a look is engineered, and how it actually feels to wear it.
          </p>
          <p>
            I've worked with first-time founders walking into investor rooms, women returning
            to themselves after motherhood, men learning to dress for the role they want next,
            and brides who refused to disappear into someone else's vision of a wedding.
            I've trained leadership teams at corporates across India and spoken at women's
            leadership forums. The thread through all of it is the same: helping intelligent,
            ambitious people stop translating themselves and start being seen accurately.
          </p>
          <p>
            I don't believe in trends, gatekeeping, or the same old impractical advice.
            My work is built on three quiet ideas: <em>appearance, behaviour and communication</em>
            — the A·B·C of image. When those three speak in the same voice, your presence
            stops needing an introduction.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="glass rounded-2xl p-5 text-center"><Globe className="text-primary mx-auto mb-2" size={22}/><div className="text-2xl font-display text-gradient-gold">15+</div><div className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">Cities</div></div>
            <div className="glass rounded-2xl p-5 text-center"><Users className="text-primary mx-auto mb-2" size={22}/><div className="text-2xl font-display text-gradient-gold">300+</div><div className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">Clients</div></div>
            <div className="glass rounded-2xl p-5 text-center"><Award className="text-primary mx-auto mb-2" size={22}/><div className="text-2xl font-display text-gradient-gold">40+</div><div className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">Workshops</div></div>
          </div>
        </motion.div>
      </section>

      {/* Method */}
      <section className="mb-32">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">How I Work</p>
          <h2 className="text-4xl md:text-5xl font-light">A four-step <span className="italic text-gradient-gold">method</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {method.map((m, i) => (
            <motion.div key={m.t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass rounded-3xl p-8 hover-lift">
              <div className="text-[10px] tracking-[0.3em] text-primary mb-3">STEP {String(i+1).padStart(2,"0")}</div>
              <m.icon className="text-primary mb-4" size={26}/>
              <h3 className="text-xl font-display mb-3">{m.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journey timeline */}
      <section className="mb-32">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">Journey</p>
          <h2 className="text-4xl md:text-5xl font-light">A <span className="italic text-gradient-gold">decade</span> in image</h2>
        </motion.div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30"/>
          {journey.map((j, i) => (
            <motion.div
              key={j.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative pl-12 md:pl-0 mb-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}
            >
              <div className={`absolute top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_var(--gold)] left-3 md:left-auto ${i % 2 === 0 ? "md:-right-1.5" : "md:-left-1.5"}`}/>
              <div className="glass rounded-2xl p-6">
                <div className="text-xs tracking-[0.3em] text-primary mb-2">{j.year}</div>
                <h3 className="text-xl font-display mb-2">{j.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{j.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mb-32">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">The Philosophy</p>
          <h2 className="text-4xl md:text-5xl font-light">What I <span className="italic text-gradient-gold">stand for</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <motion.div key={v.title} {...fadeUp} className="glass rounded-2xl p-8 hover-lift">
              <v.icon className="text-primary mb-4" size={26}/>
              <h3 className="text-xl font-display mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <motion.section {...fadeUp} className="glass-strong rounded-3xl p-12 md:p-16">
        <h2 className="text-3xl md:text-4xl font-light mb-10">Credentials & <span className="italic text-gradient-gold">Recognition</span></h2>
        <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-muted-foreground">
          <li className="border-l-2 border-primary/40 pl-4">Certified Image Consultant — AICI methodology</li>
          <li className="border-l-2 border-primary/40 pl-4">Featured speaker, Women Leadership Forum 2024</li>
          <li className="border-l-2 border-primary/40 pl-4">Corporate trainer for 40+ organisations across India</li>
          <li className="border-l-2 border-primary/40 pl-4">Editorial collaborator with national lifestyle magazines</li>
          <li className="border-l-2 border-primary/40 pl-4">Bridal stylist for 100+ weddings across India & abroad</li>
          <li className="border-l-2 border-primary/40 pl-4">Guest faculty at design and management institutes</li>
        </ul>
        <Link to="/contact" className="glass-btn-gold rounded-full px-8 py-4 text-sm uppercase tracking-widest mt-10 inline-block">
          Work With Me
        </Link>
      </motion.section>
    </div>
  );
}
