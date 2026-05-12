import { useState } from "react";
import { Phone, Mail, MessageCircle, Sparkles, X } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function FloatingActions() {
  const [open, setOpen] = useState(false);
  const items = [
    { icon: Phone, label: "Call", href: `tel:${CONTACT.phoneRaw}` },
    { icon: Mail, label: "Email", href: `mailto:${CONTACT.email}` },
  ];
  return (
    <>
      {/* Dedicated WhatsApp FAB - always visible */}
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle size={26} className="text-white" />
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full animate-ping" style={{ backgroundColor: "#25D366" }} />
      </a>

      {/* Right-side multi-action menu */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {open && items.map((it, idx) => (
          <a
            key={it.label}
            href={it.href}
            className="glass-btn flex items-center gap-2 rounded-full pl-4 pr-5 py-2.5 text-sm animate-slide-up"
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            <it.icon size={16} className="text-primary" />
            <span>{it.label}</span>
          </a>
        ))}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Contact options"
          className="glass-btn-gold h-14 w-14 rounded-full flex items-center justify-center shadow-2xl"
        >
          {open ? <X size={22}/> : <Sparkles size={22}/>}
        </button>
      </div>
    </>
  );
}
