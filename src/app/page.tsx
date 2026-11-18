import Link from "next/link";
import SiteHeader from "./site-header";
import { MathHeroIllustration } from "./math-illustrations";
import SiteFooter from "./site-footer";

const pageLinks = [
  ["Časovi", "/casovi", "Podrška za domaće zadatke i pripremu za kontrolni."],
  ["Kako izgleda čas", "/kako-izgleda-cas", "Radimo korak po korak, uz vežbu."],
  ["Cenovnik", "/cenovnik", "Pogledajte cene i procenu dolaska."],
  ["Česta pitanja", "/faq", "Odgovori o časovima i dogovoru."],
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <SiteHeader />
      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> PRIVATNI ČASOVI · NOVI SAD</div>
          <h1>Spremite se za kontrolni iz matematike <em>sa više sigurnosti.</em></h1>
          <p className="hero-lede">Držim časove matematike učenicima od 5. do 8. razreda. Zajedno prolazimo ono što nije jasno i vežbamo zadatke, korak po korak.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/kontakt">Zakažite prvi čas <span aria-hidden="true">↗</span></Link>
            <Link className="button button-quiet" href="/cenovnik">Pogledajte cenovnik <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-proof"><p><strong>2 godine iskustva</strong><br /><span>i više od 30 učenika</span></p></div>
        </div>
        <MathHeroIllustration />
      </section>
      <section className="intro-strip shell">
        <p className="strip-label">MOJ PRISTUP</p>
        <p className="strip-copy">Objasniću gradivo razumljivo, a zatim ćemo vežbati dok učenik ne stekne sigurnost da zadatak reši samostalno.</p>
        <Link href="/o-meni" className="text-link">Upoznajte Simona ↗</Link>
      </section>
      <section className="service-grid shell home-links">
        {pageLinks.map(([title, href, description]) => (
          <article className="service-card" key={href}>
            <h2>{title}</h2><p>{description}</p>
            <Link href={href} className="card-arrow" aria-label={title}>↗</Link>
          </article>
        ))}
      </section>
      <div className="shell"><SiteFooter /></div>
    </main>
  );
}
