import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Crown, Sparkles, Scissors, Briefcase, Camera, Users, ArrowRight, Heart, MessageSquare, Shirt, UserCheck, Mic } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Image Consulting, Personal Branding & Corporate Training | Apoorva Verma" },
      { name: "description", content: "Re-imagine, re-think, re-create. Signature image management, personal styling, grooming, communication and corporate training programmes by Apoorva Verma." },
      { property: "og:title", content: "Services — Apoorva Verma" },
      { property: "og:description", content: "Individual solutions, corporate training, wedding styling and fashion direction." },
    ],
  }),
  component: Services,
});

const pillars = [
  { icon: Heart, t: "Look & feel more attractive" },
  { icon: UserCheck, t: "Feel & act more confident" },
  { icon: Sparkles, t: "Be more credible" },
  { icon: Crown, t: "Become more successful" },
  { icon: Users, t: "Balance every role in life" },
  { icon: MessageSquare, t: "Improve communication" },
];

const individual = [
  { icon: Crown, title: "The Whole Deal", price: "Signature Programme", desc: "The A·B·C of image — Appearance, Behaviour & Communication. Lifestyle audit, body & personality discovery, styling, wardrobe analysis, personal shopping, etiquette and confidence work — built into one comprehensive transformation.", bullets: ["Lifestyle & image goals", "Body, colour & personality analysis", "Wardrobe rebuild + personal shopping", "Etiquette, communication & confidence"] },
  { icon: Briefcase, title: "Dress for Success", price: "Career Programme", desc: "In a competitive world, capable people get overlooked because they don't 'look ready' for the next role. Learn how to dress up and dress down for every business occasion so your visual story matches your ambition.", bullets: ["Workplace wardrobe audit", "Industry-appropriate styling", "Power-dressing for meetings", "Travel & event capsule"] },
  { icon: Camera, title: "Picture Perfect", price: "Signature Look", desc: "Looking in the mirror should make you happy. Discover your body type, face shape and personal colour palette. Pair it with the right haircut, skincare, fragrance and make-up to look effortlessly you — every single day.", bullets: ["Body & face-shape analysis", "Personal colour palette", "Hair, skin & fragrance", "Signature day-to-night looks"] },
  { icon: Shirt, title: "The Wardrobe Sort", price: "Quick Win", desc: "Solves the age-old dilemma of 'I have nothing to wear'. A focused wardrobe edit and clustering session so every piece you own works harder and pulls together into outfits you actually love.", bullets: ["Closet detox & edit", "Outfit clustering", "Capsule building", "Shopping list for gaps"] },
  { icon: Sparkles, title: "Always-Ready Make-up", price: "Self-Styling Course", desc: "Stop being dependent on the salon. Personalised make-up, grooming and hair-styling tips based on your face shape and skin so you can be photo-ready and stage-ready any time of day.", bullets: ["Face mapping basics", "5-min everyday face", "Evening & event looks", "Skincare ritual"] },
  { icon: UserCheck, title: "It's a Man Thing", price: "Men's Masterclass", desc: "Formal doesn't equal boring. Rugged doesn't equal unkempt. A focused programme on grooming, haircare, etiquette, style and body language for the modern, intentional gentleman.", bullets: ["Grooming & haircare", "Wardrobe essentials", "Etiquette & body language", "Travel & meeting style"] },
  { icon: Mic, title: "Communicate Correctly", price: "Communication Lab", desc: "Over 70% of communication isn't the words you say. A masterclass in body language, etiquette, positive vocabulary, public speaking and presentation — so the room hears you before you open your mouth.", bullets: ["Body language & posture", "Voice & vocabulary", "Public speaking", "Boardroom presence"] },
];

const corporate = [
  { title: "Executive Presence", desc: "Half-day to multi-week programmes for leaders and high-potential teams. Build a coherent, confident, culture-aware presence." },
  { title: "Corporate Grooming", desc: "Industry-tailored sessions on dress code, grooming, etiquette and client interaction for customer-facing teams." },
  { title: "Cross-Cultural Image", desc: "Prepare leaders for international markets with global etiquette, cultural intelligence and travel-ready styling." },
  { title: "Speaker / Spokesperson Coaching", desc: "Camera-ready styling, body-language coaching and message delivery for founders and senior spokespeople." },
];

const wedding = [
  { title: "Bride & Groom Styling", desc: "End-to-end styling across functions — sangeet, mehendi, cocktails, ceremony — with looks that feel like you, not the trend cycle." },
  { title: "Trousseau Curation", desc: "A curated wardrobe for the wedding week and the year that follows: occasion wear, travel looks and a refreshed everyday closet." },
  { title: "Family Styling", desc: "Coordinated, photograph-worthy looks for parents, siblings and the inner circle — without forcing everyone into the same colour." },
];

const fashion = [
  { title: "Editorial & Campaign Direction", desc: "Concept, moodboard, casting and on-set direction for brand campaigns, lookbooks and editorial." },
  { title: "Film & Character Styling", desc: "Character-led costume design and styling for short films, web series and brand films." },
  { title: "Model & Talent Grooming", desc: "Personal grooming, posture, presentation and image training for models, anchors and on-screen talent." },
];

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      {/* Hero */}
      <motion.div {...fadeUp} className="text-center mb-20">
        <p className="text-primary tracking-[0.4em] text-xs uppercase mb-5">Re-imagine · Re-think · Re-create</p>
        <h1 className="text-5xl md:text-7xl font-light leading-[1.05]">Our <span className="italic text-gradient-gold">Services</span></h1>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Image management is far more than a makeover. It's the deliberate alignment of how you look,
          how you behave and how you communicate — so people experience the best version of you, every time.
        </p>
      </motion.div>

      {/* Pillars */}
      <motion.section {...fadeUp} className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-28">
        {pillars.map((p) => (
          <div key={p.t} className="glass rounded-2xl p-6 hover-lift flex items-center gap-4">
            <p.icon className="text-primary shrink-0" size={26}/>
            <span className="text-sm md:text-base text-foreground/90">{p.t}</span>
          </div>
        ))}
      </motion.section>

      {/* INDIVIDUAL SOLUTIONS */}
      <section className="mb-28">
        <motion.div {...fadeUp} className="mb-12">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Personal Image & Style</p>
          <h2 className="text-4xl md:text-5xl font-light">Individual <span className="italic text-gradient-gold">Solutions</span></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">A solution to fit every pocket and every schedule — for the woman or man ready to do things differently.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {individual.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass rounded-3xl p-8 hover-lift flex flex-col"
            >
              <s.icon className="text-primary mb-5" size={28}/>
              <h3 className="text-xl font-display mb-2">{s.title}</h3>
              <div className="text-[10px] uppercase tracking-[0.25em] text-primary/80 mb-4">{s.price}</div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{s.desc}</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground mb-7">
                {s.bullets.map((b) => <li key={b} className="flex gap-2"><span className="text-primary">·</span>{b}</li>)}
              </ul>
              <Link to="/contact" className="glass-btn rounded-full px-5 py-2.5 text-[10px] uppercase tracking-[0.25em] inline-flex items-center justify-center gap-2 mt-auto">
                Know More <ArrowRight size={11}/>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CORPORATE */}
      <section className="mb-28">
        <motion.div {...fadeUp} className="mb-12">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Training & Marketing</p>
          <h2 className="text-4xl md:text-5xl font-light">Corporates & <span className="italic text-gradient-gold">Institutions</span></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">Workshops, masterclasses and bespoke programmes for organisations that want their people to embody the brand.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {corporate.map((s) => (
            <motion.div key={s.title} {...fadeUp} className="glass-strong rounded-3xl p-8 hover-lift">
              <h3 className="text-2xl font-display mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WEDDINGS */}
      <section className="mb-28">
        <motion.div {...fadeUp} className="mb-12">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Styling & Consulting</p>
          <h2 className="text-4xl md:text-5xl font-light">Wedding <span className="italic text-gradient-gold">Solutions</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {wedding.map((s) => (
            <motion.div key={s.title} {...fadeUp} className="glass rounded-3xl p-8 hover-lift">
              <h3 className="text-xl font-display mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FASHION & FILM */}
      <section className="mb-28">
        <motion.div {...fadeUp} className="mb-12">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Styling & Direction</p>
          <h2 className="text-4xl md:text-5xl font-light">Fashion & <span className="italic text-gradient-gold">Film</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {fashion.map((s) => (
            <motion.div key={s.title} {...fadeUp} className="glass rounded-3xl p-8 hover-lift">
              <Scissors className="text-primary mb-4" size={22}/>
              <h3 className="text-xl font-display mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.div {...fadeUp} className="glass-strong rounded-3xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-light">Not sure where to start?</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Book a complimentary 20-minute discovery call. We'll find the right shape for your goals together.</p>
        <Link to="/contact" className="glass-btn-gold rounded-full px-8 py-4 text-sm uppercase tracking-widest mt-8 inline-block">Book Discovery Call</Link>
      </motion.div>
    </div>
  );
}
