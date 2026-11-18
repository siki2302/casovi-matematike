import type { Metadata } from "next";
import BookingForm from "../booking-form";
import ContentPage from "../content-page";

export const metadata: Metadata = {
  title: "Zakažite prvi čas | Časovi matematike",
  description: "Pošaljite upit za čas matematike u Novom Sadu ili pozovite Simona.",
};

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="ZAKAŽITE PRVI ČAS"
      title={<>Recite mi šta je učeniku <em>potrebno.</em></>}
      lead="Pošaljite nekoliko osnovnih informacija. Javiću Vam se da odgovorim na pitanja i dogovorimo termin."
    >
      <div className="booking-panel contact-page-panel">
        <div className="booking-intro">
          <h3>Upit za čas</h3>
          <p>Podaci iz formulara stižu mi mejlom preko Formspree-a.</p>
        </div>
        <BookingForm />
      </div>
      <p className="contact-direct">
        Radije biste pozvali? <a href="tel:+38166451219">066 451 219</a> ·{" "}
        <a href="https://wa.me/38166451219" target="_blank" rel="noreferrer">WhatsApp</a>
      </p>
    </ContentPage>
  );
}
