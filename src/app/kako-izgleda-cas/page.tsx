import type { Metadata } from "next";
import ContentPage from "../content-page";

export const metadata: Metadata = {
  title: "Kako izgleda čas matematike | Časovi",
  description: "Pogledajte kako teče čas i priprema za kontrolni iz matematike.",
};

const steps = [
  "Dogovorimo se šta učeniku treba za kontrolni.",
  "Ukratko proverimo prethodno znanje.",
  "Razjasnimo ono što je ostalo nejasno.",
  "Rešavamo zadatke slične onima koji se rade u školi.",
  "Učenik samostalno proba nekoliko primera.",
  "Na kraju proverimo šta je savladao i šta još treba vežbati.",
];

export default function ProcessPage() {
  return (
    <ContentPage
      eyebrow="KAKO IZGLEDA ČAS?"
      title={<>Jasno, mirno,<br /><em>korak po korak.</em></>}
      lead="Čas prilagođavamo gradivu koje učenik trenutno radi i cilju koji želi da postigne."
    >
      <ol className="process-grid">
        {steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
    </ContentPage>
  );
}
