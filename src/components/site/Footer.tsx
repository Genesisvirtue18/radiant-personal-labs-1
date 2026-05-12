import { Link } from "@tanstack/react-router";
import { Mail, Phone, Instagram, MessageCircle, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import { CONTACT } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-primary/20 glass-strong">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Apoorva Verma" className="h-20 w-auto object-contain mb-4" />
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Personal branding & image management for leaders, entrepreneurs and professionals
            who refuse to be invisible. Crafted in confidence — worn with intention.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="glass h-10 w-10 rounded-full flex items-center justify-center hover-lift"><Instagram size={16} className="text-primary"/></a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass h-10 w-10 rounded-full flex items-center justify-center hover-lift"><Linkedin size={16} className="text-primary"/></a>
            <a href={CONTACT.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="glass h-10 w-10 rounded-full flex items-center justify-center hover-lift"><Facebook size={16} className="text-primary"/></a>
          </div>
        </div>
        <div>
          <h4 className="text-primary text-sm tracking-widest uppercase mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="gold-underline">About</Link></li>
            <li><Link to="/services" className="gold-underline">Services</Link></li>
            <li><Link to="/gallery" className="gold-underline">Gallery</Link></li>
            <li><Link to="/social" className="gold-underline">Social</Link></li>
            <li><Link to="/blog" className="gold-underline">Journal</Link></li>
            <li><Link to="/contact" className="gold-underline">Book a Session</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary text-sm tracking-widest uppercase mb-4">Connect</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 gold-underline"><Mail size={14}/>{CONTACT.email}</a></li>
            <li><a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 gold-underline"><Phone size={14}/>{CONTACT.phone}</a></li>
            <li><a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 gold-underline"><MessageCircle size={14}/>WhatsApp</a></li>
          </ul>
        </div>
      </div>
     <div className="border-t border-primary/10 py-6 text-center text-xs text-muted-foreground tracking-widest uppercase">
  © {new Date().getFullYear()} Apoorva Verma

  <div className="mt-2 text-[10px] tracking-[0.3em] text-primary/70">
    Developed by Genesis Virtue
  </div>
</div>
    </footer>
  );
}
