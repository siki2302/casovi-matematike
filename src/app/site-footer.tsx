import Link from "next/link";
import BrandMark from "./brand-mark";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="brand" href="/" aria-label="Časovi, početna">
        <BrandMark />
        <span className="brand-name">časovi<span>.</span></span>
      </Link>
      <nav aria-label="Dodatna navigacija">
        <Link href="/cenovnik">Cenovnik</Link>
        <Link href="/kontakt">Kontakt</Link>
        <Link href="/privacy">Privatnost</Link>
      </nav>
      <span>© 2026 Časovi matematike</span>
    </footer>
  );
}
