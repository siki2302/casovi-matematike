"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "./brand-mark";

const links = [
  ["O meni", "/o-meni"],
  ["Časovi", "/casovi"],
  ["Kako izgleda čas", "/kako-izgleda-cas"],
  ["Cenovnik", "/cenovnik"],
  ["FAQ", "/faq"],
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header shell">
      <Link className="brand" href="/" aria-label="Časovi, početna"><BrandMark /><span className="brand-name">časovi<span>.</span></span></Link>
      <nav className="main-nav" aria-label="Glavna navigacija">{links.map(([label, href]) => <Link key={href} className={pathname === href ? "active" : ""} aria-current={pathname === href ? "page" : undefined} href={href}>{label}</Link>)}</nav>
      <Link className="header-cta" href="/kontakt">Zakažite prvi čas <span aria-hidden="true">↗</span></Link>
      <details className="mobile-menu" open={menuOpen} onToggle={(event) => setMenuOpen(event.currentTarget.open)}>
        <summary aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}><span /><span /><span /></summary>
        <nav aria-label="Mobilna navigacija">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}<Link href="/kontakt" onClick={() => setMenuOpen(false)}>Zakažite prvi čas ↗</Link></nav>
      </details>
    </header>
  );
}
