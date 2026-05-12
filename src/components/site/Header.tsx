import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/social", label: "Social" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-strong">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Apoorva Verma — Image Management" className="h-14 md:h-16 w-auto object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="gold-underline text-xs tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {i.label}
            </Link>
          ))}
          <Link to="/contact" className="glass-btn-gold px-5 py-2 rounded-full text-xs tracking-wide">
            Book Now
          </Link>
        </nav>
        <button className="lg:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden glass-strong border-t border-primary/20 px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {navItems.map((i) => (
            <Link key={i.to} to={i.to} onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest text-foreground/80">
              {i.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="glass-btn-gold px-5 py-2 rounded-full text-sm text-center">Book Now</Link>
        </nav>
      )}
    </header>
  );
}
