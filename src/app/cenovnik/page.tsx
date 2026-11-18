import type { Metadata } from "next";
import SiteHeader from "../site-header";
import Calculator from "./calculator";

export const metadata: Metadata = {
  title: "Cenovnik časova matematike | Časovi",
  description:
    "Cene individualnih i grupnih časova matematike i kalkulator procene dolaska u Novom Sadu.",
};

export default function PricingPage() {
  return (
    <main>
      <SiteHeader />
      <div className="shell subpage">
        <p className="eyebrow section-eyebrow">CENOVNIK</p>
        <h1>Cena časa, <em>jasno prikazana.</em></h1>
        <p className="page-lede">
          Za čas na adresi učenika izaberite naselje i trajanje da biste videli procenu ukupne cene.
        </p>
        <Calculator />
        <div className="pricing-layout pricing-static">
          <article className="price-panel">
            <div className="price-panel-heading"><span>INDIVIDUALNI ČASOVI</span><span>45 MIN</span></div>
            <div className="price-row"><span>Online</span><strong>750 <small>RSD</small></strong></div>
            <div className="price-row"><span>Na Grbavici</span><strong>1.000 <small>RSD</small></strong></div>
            <div className="price-row"><span>Na adresi učenika</span><strong>od 1.200 <small>RSD</small></strong></div>
            <div className="price-row"><span>Na adresi učenika · 90 min</span><strong>2.000 <small>RSD</small></strong></div>
          </article>
          <article className="price-panel group-price">
            <div className="price-panel-heading"><span>GRUPNI ČASOVI</span><span>PO UČENIKU · 45 MIN</span></div>
            <div className="price-row"><span>Grupa od 2 učenika</span><strong>1.700 <small>RSD</small></strong></div>
            <div className="price-row"><span>Grupa od 3 učenika</span><strong>1.600 <small>RSD</small></strong></div>
            <div className="price-row"><span>Grupa od 4 učenika</span><strong>1.500 <small>RSD</small></strong></div>
          </article>
        </div>
        <p className="estimate-note">
          Rastojanja i trošak goriva su približne procene po naselju, ne konačna ponuda za konkretnu
          adresu. Potvrdićemo cenu pre dogovora o terminu.
        </p>
      </div>
    </main>
  );
}
