import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "../content-page";
import { LessonDoodle } from "../math-illustrations";

export const metadata: Metadata = {
  title: "Časovi matematike | Časovi",
  description: "Individualni, grupni i online časovi matematike za učenike od 5. do 8. razreda.",
};

const lessonOptions = [
  {
    kind: "individual",
    title: "Individualni časovi",
    description: "Radimo tempom koji učeniku odgovara i zadržavamo se na onome što još nije jasno.",
  },
  {
    kind: "group",
    title: "Mala grupa",
    description: "Vežbanje u grupi od dva do četiri učenika, uz zajedničko rešavanje zadataka.",
  },
  {
    kind: "exam",
    title: "Priprema za malu maturu",
    description: "Obnavljamo gradivo i vežbamo tipove zadataka za završni ispit.",
  },
  {
    kind: "online",
    title: "Online časovi",
    description: "Individualni čas na daljinu, uz objašnjenja i zajedničko rešavanje zadataka.",
  },
] as const;

export default function LessonsPage() {
  return (
    <ContentPage
      eyebrow="ČASOVI ZA 5–8. RAZRED"
      title={<>Priprema za kontrolni,<br /><em>bez žurbe.</em></>}
      lead="Izaberite način rada koji odgovara Vašem detetu. Časovi su namenjeni učenicima od 5. do 8. razreda."
    >
      <div className="service-grid">
        {lessonOptions.map((option) => (
          <article className="service-card" key={option.kind}>
            <LessonDoodle kind={option.kind} />
            <h2>{option.title}</h2>
            <p>{option.description}</p>
          </article>
        ))}
      </div>
      <Link className="button button-primary" href="/kontakt">Zakažite prvi čas ↗</Link>
    </ContentPage>
  );
}
