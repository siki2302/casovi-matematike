"use client";

import { useState } from "react";

const fuelUseLitersPer100Km = 8;
const dieselPricePerLiter = 237;

const areas = [
  ["Grbavica", 1.5],
  ["Centar / Stari grad", 2.5],
  ["Sajmište", 2.5],
  ["Liman 1", 3],
  ["Liman 2", 3.5],
  ["Liman 3", 4],
  ["Liman 4", 4.5],
  ["Banatić", 3.5],
  ["Podbara", 4],
  ["Salajka", 4.5],
  ["Detelinara", 4.5],
  ["Novo naselje / Bistrica", 5],
  ["Telep", 5],
  ["Adice", 7],
  ["Petrovaradin", 6],
  ["Sremska Kamenica", 8],
] as const;

export default function Calculator() {
  const [areaIndex, setAreaIndex] = useState(0);
  const [minutes, setMinutes] = useState<45 | 90>(45);
  const [areaName, kilometers] = areas[areaIndex];
  const fuelCost =
    (kilometers * 2 * fuelUseLitersPer100Km * dieselPricePerLiter) / 100;
  const roundedFuelCost = Math.max(200, Math.ceil(fuelCost / 100) * 100);
  const basePrice = minutes === 90 ? 2000 : 1000;
  const totalPrice = minutes === 90 ? basePrice : basePrice + roundedFuelCost;

  return (
    <section className="calculator-panel" aria-labelledby="calculator-title">
      <p className="eyebrow section-eyebrow">KALKULATOR DOLASKA</p>
      <h2 id="calculator-title">Izračunajte cenu <em>časa.</em></h2>
      <p className="calculator-help">
        U procenu je uračunata vožnja u oba smera i gradska potrošnja od 8 l/100 km.
        Konačna cena može malo da odstupa zbog tačne adrese i saobraćaja.
      </p>

      <div className="calculator-fields">
        <label>
          Naselje
          <select value={areaIndex} onChange={(event) => setAreaIndex(Number(event.target.value))}>
            {areas.map(([name], index) => <option value={index} key={name}>{name}</option>)}
          </select>
        </label>
        <label>
          Trajanje časa
          <select
            value={minutes}
            onChange={(event) => setMinutes(Number(event.target.value) as 45 | 90)}
          >
            <option value={45}>45 minuta</option>
            <option value={90}>90 minuta</option>
          </select>
        </label>
      </div>

      <div className="calculator-breakdown">
        <div><span>Naselje</span><strong>{areaName}</strong></div>
        <div><span>Osnovna cena</span><strong>{basePrice.toLocaleString("sr-RS")} RSD</strong></div>
        {minutes === 45 && (
          <div>
            <span>Procenjeni trošak goriva (oba smera)</span>
            <strong>{roundedFuelCost.toLocaleString("sr-RS")} RSD</strong>
          </div>
        )}
      </div>

      <div className="calculator-total" aria-live="polite">
        <span>Konačna cena</span>
        <strong>{totalPrice.toLocaleString("sr-RS")} <small>RSD</small></strong>
      </div>
      {minutes === 90 && (
        <p className="calculator-footnote">
          Čas od 90 minuta košta dva puta više od osnovne cene časa; putni trošak se ne dodaje.
        </p>
      )}
    </section>
  );
}
