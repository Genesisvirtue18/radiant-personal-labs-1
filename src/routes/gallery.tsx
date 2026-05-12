import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Trophy, Star, Calendar } from "lucide-react";
import award1 from "@/assets/award-1.jpg";
import award2 from "@/assets/award-2.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import portrait from "@/assets/portrait-about.jpg";
import portrait2 from "@/assets/portrait-sitting.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Awards, Achievements & Press | Apoorva Verma" },
      { name: "description", content: "Awards, achievements, speaking engagements and press features for image consultant Apoorva Verma." },
      { property: "og:title", content: "Gallery — Apoorva Verma" },
      { property: "og:description", content: "Awards, recognitions and milestones." },
      { property: "og:image", content: typeof window !== "undefined" ? window.location.origin + "/og-gallery.jpg" : "" },
    ],
  }),
  component: Gallery,
});

const awards = [
  { img: award1, title: "Image Consultant of the Year", year: "2024", body: "Recognised at the National Style & Image Awards for outstanding contribution to personal branding." },
  { img: award2, title: "AICI Certified Excellence", year: "2023", body: "Certification of excellence from the Association of Image Consultants International." },
  { img: event1, title: "Keynote — Women Leadership Forum", year: "2024", body: "Spoke on 'Quiet Authority' to a room of 500+ women leaders across India." },
  { img: event2, title: "Corporate Training — Fortune 500", year: "2023", body: "Designed and delivered an executive presence programme for senior leadership." },
  { img: portrait, title: "Editorial Feature — Vogue India", year: "2023", body: "Featured among 'Image Strategists Shaping Modern India'." },
  { img: portrait2, title: "Bridal Stylist — 100+ Weddings", year: "2024", body: "Crossed 100 brides styled across India, the UAE and the UK." },
];

const milestones = [
  { icon: Trophy, n: "12+", l: "Awards & Recognitions" },
  { icon: Star, n: "300+", l: "Clients Transformed" },
  { icon: Calendar, n: "40+", l: "Speaking Engagements" },
  { icon: Award, n: "8+", l: "Years of Practice" },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.6 } };

function Gallery() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <motion.div {...fadeUp} className="text-center mb-16">
        <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">Gallery</p>
        <h1 className="text-5xl md:text-6xl font-light">Awards & <span className="italic text-gradient-gold">Achievements</span></h1>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">A quiet record of the work, the recognitions and the rooms I've been honoured to stand in.</p>
      </motion.div>

      <motion.section {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
        {milestones.map((m) => (
          <div key={m.l} className="glass-strong rounded-2xl p-6 text-center">
            <m.icon className="text-primary mx-auto mb-3" size={26}/>
            <div className="text-3xl font-display text-gradient-gold">{m.n}</div>
            <div className="mt-1 text-[10px] tracking-widest uppercase text-muted-foreground">{m.l}</div>
          </div>
        ))}
      </motion.section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="glass rounded-3xl overflow-hidden hover-lift group"
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted/20">
              <img src={a.img} alt={a.title} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"/>
            </div>
            <div className="p-7">
              <div className="text-[10px] tracking-[0.3em] text-primary mb-2">{a.year}</div>
              <h3 className="text-xl font-display mb-3">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
