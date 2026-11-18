import type { Metadata } from "next";
import Link from "next/link";
import { getSiteUrl } from "../site-url";

export const metadata: Metadata = {
  title: "Politika privatnosti | Časovi matematike",
  description: "Obaveštenje o podacima koje delite prilikom kontakta za časove matematike.",
  alternates: getSiteUrl() ? { canonical: "/privacy" } : undefined,
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page shell">
      <Link className="text-link" href="/">← Nazad na početnu</Link>
      <p className="eyebrow section-eyebrow">PRIVATNOST</p>
      <h1>Obaveštenje o privatnosti</h1>
      <p className="privacy-lead">Ova stranica objašnjava šta se dešava sa podacima kada pošaljete upit za čas.</p>
      <section><h2>Koje podatke traži upit?</h2><p>Upit traži ime roditelja, broj telefona, razred učenika, način i vrstu časa, oblast matematike, željeni termin i opcionu napomenu. Unosite samo podatke potrebne za dogovor o času.</p></section>
      <section><h2>Gde se šalju?</h2><p>Kada pošaljete formular, podaci se prosleđuju Formspree-u radi obrade upita i obaveštenja mejlom. Sajt nema sopstvenu bazu podataka. Formspree obrađuje podatke prema svojim pravilima privatnosti. Formular ne šalje automatski odgovor Vama.</p><p>Ako ne želite da koristite formular, možete pozvati <a href="tel:+38166451219">066 451 219</a> ili poslati poruku putem <a href="https://wa.me/38166451219" target="_blank" rel="noreferrer">WhatsApp-a</a>. Ovi servisi imaju svoja pravila privatnosti.</p></section>
      <section><h2>Koliko dugo se čuvaju?</h2><p>Prijave se mogu čuvati u Formspree nalogu i mejlu primaoca. Brišite ih kada više nisu potrebne za dogovor i odgovor na upit. Za tačne rokove čuvanja proverite podešavanja i uslove Formspree-a.</p></section>
      <section><h2>Kontakt</h2><p>Za pitanja o upitu i podacima možete se obratiti Simonu putem <a href="tel:+38166451219">telefona 066 451 219</a> ili kontakt forme.</p></section>
      <Link className="button button-primary" href="/">Povratak na početnu</Link>
    </main>
  );
}
