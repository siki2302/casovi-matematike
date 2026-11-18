import type { Metadata } from "next";
import ContentPage from "../content-page";

export const metadata: Metadata = {
  title: "O meni | Časovi matematike",
  description: "Upoznajte Simona, studenta FTN-a i predavača matematike u Novom Sadu.",
};

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="O MENI"
      title={<>Razumljivo objašnjenje.<br /><em>Više sigurnosti.</em></>}
      lead="Upoznajte osobu koja će pomoći Vašem detetu da se bolje pripremi za kontrolni."
    >
      <section className="content-card">
        <p>
          Zovem se Simon i student sam Fakulteta tehničkih nauka u Novom Sadu, na smeru
          Informacioni inženjering. Već dve godine držim časove matematike; do sada sam
          radio sa više od 30 učenika.
        </p>
        <p>
          Na času najpre proverimo šta je jasno, a gde treba dodatno da zastanemo. Zatim
          objašnjavam gradivo korak po korak i zajedno vežbamo, dok učenik ne može
          samostalno da reši sličan zadatak.
        </p>
        <div className="about-facts">
          <span><strong>2 godine</strong><small>iskustva u radu</small></span>
          <span><strong>30+</strong><small>učenika</small></span>
          <span><strong>5–8.</strong><small>razredi</small></span>
        </div>
      </section>
    </ContentPage>
  );
}
