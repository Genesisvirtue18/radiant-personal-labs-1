import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Apoorva Verma" },
      { name: "description", content: "Book an image consultation with Apoorva Verma via WhatsApp, email or phone." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const channels = [
    { icon: MessageCircle, label: "WhatsApp", value: "Reply in minutes", href: CONTACT.whatsapp, target: "_blank" as const, primary: true },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: "Call", value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
  ];
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="text-center mb-16">
        <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">Let's Talk</p>
        <h1 className="text-5xl md:text-6xl font-light">Book your <span className="italic text-gradient-gold">consultation</span></h1>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">Choose how you'd like to reach me. Discovery calls are free and last 20 minutes.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {channels.map((c) => (
          <a key={c.label} href={c.href} target={"target" in c ? c.target : undefined} rel="noreferrer"
            className={`${c.primary ? "glass-btn-gold" : "glass"} rounded-3xl p-8 hover-lift text-center block`}>
            <c.icon className={`mx-auto mb-4 ${c.primary ? "" : "text-primary"}`} size={28}/>
            <div className={`text-sm uppercase tracking-widest mb-2 ${c.primary ? "" : "text-primary"}`}>{c.label}</div>
            <div className={`font-display text-lg ${c.primary ? "" : "text-foreground"}`}>{c.value}</div>
          </a>
        ))}
      </div>

      <div className="glass-strong rounded-3xl p-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-display mb-4">Studio Hours</h2>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex items-center gap-3"><Clock size={16} className="text-primary"/> Mon – Sat · 10:00 – 19:00 IST</li>
            <li className="flex items-center gap-3"><MapPin size={16} className="text-primary"/> By appointment, New Delhi · Online worldwide</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-display mb-4">What to expect</h2>
          <ol className="space-y-3 text-muted-foreground text-sm list-decimal list-inside">
            <li>Send a quick note with what you're working on.</li>
            <li>I'll respond within one working day with a discovery slot.</li>
            <li>We meet, decide if we're a fit, and craft a plan together.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
