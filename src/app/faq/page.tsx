import type { Metadata } from "next";
import ContentPage from "../content-page";

export const metadata: Metadata = {
  title: "Česta pitanja | Časovi matematike",
  description: "Odgovori o uzrastu, trajanju, lokaciji i zakazivanju časova matematike.",
};

const questions = [
  ["Za koje razrede držite časove?", "Za učenike od 5. do 8. razreda osnovne škole."],
  ["Koliko traje čas?", "Možete izabrati čas od 45 ili 90 minuta."],
  ["Da li su časovi dostupni online?", "Da. Online časovi su individualni."],
  ["Da li dolazite na adresu učenika?", "Da, u Novom Sadu. Izaberite naselje u kalkulatoru na stranici Cenovnik da biste videli procenu cene."],
  ["Mogu li časovi biti grupni?", "Da, moguće je učiti u grupi od dva do četiri učenika."],
  ["Kako da zakažem prvi čas?", "Pošaljite upit kroz formular ili pozovite 066 451 219. Javiću Vam se da dogovorimo termin."],
] as const;

export default function FAQPage() {
  return (
    <ContentPage
      eyebrow="ČESTA PITANJA"
      title={<>Odgovori na <em>Vaša pitanja.</em></>}
      lead="Ako ne pronađete odgovor, slobodno pošaljite upit."
    >
      <div className="faq-list">
        {questions.map(([question, answer]) => (
          <details className="faq-item" key={question}>
            <summary>{question}<span aria-hidden="true">+</span></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </ContentPage>
  );
}
