"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const phonePattern = "[+]?[0-9 ()-]{8,20}";
const formspreeEndpoint = "https://formspree.io/f/mjywwlww";

export default function BookingForm() {
  const [notice, setNotice] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const phone = String(values.get("phone") ?? "").replace(/\D/g, "");
    if (phone.length < 8 || phone.length > 15) {
      setNotice("Unesite ispravan broj telefona sa pozivnim brojem.");
      return;
    }

    setSending(true);
    setNotice("");
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: values,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Formspree rejected the submission");
      setNotice("Upit je poslat. Javiću Vam se čim budem mogao.");
      form.reset();
    } catch {
      setNotice("Slanje nije uspelo. Pokušajte ponovo ili pozovite 066 451 219.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="booking-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Ime roditelja<input name="parentName" autoComplete="name" required maxLength={80} placeholder="Ime i prezime" /></label>
        <label>Kontakt telefon<input name="phone" type="tel" autoComplete="tel" required pattern={phonePattern} title="Unesite broj telefona sa najmanje 8 cifara." placeholder="npr. 064 123 4567" /></label>
        <label>Razred učenika<select name="grade" required defaultValue=""><option value="" disabled>Izaberite razred</option>{[5, 6, 7, 8].map((grade) => <option key={grade} value={`${grade}. razred`}>{grade}. razred</option>)}</select></label>
        <label>Način održavanja<select name="format" required defaultValue=""><option value="" disabled>Izaberite način</option><option>Online</option><option>Na adresi predavača · Grbavica</option><option>Na adresi učenika · Novi Sad</option></select></label>
        <label>Vrsta časa<select name="lessonType" required defaultValue=""><option value="" disabled>Izaberite vrstu časa</option><option>Individualni</option><option>Grupni</option></select></label>
        <label>Oblast matematike<input name="topic" required maxLength={100} placeholder="npr. razlomci, jednačine..." /></label>
        <label className="form-wide">Željeni termin<input name="preferredTime" type="text" maxLength={100} placeholder="Dani ili vreme koje Vam odgovara" /></label>
        <label className="form-wide">Dodatna napomena<textarea name="note" rows={3} maxLength={500} placeholder="Šta bi bilo korisno da znam?" /></label>
      </div>
      <label className="form-honeypot" aria-hidden="true">Ne popunjavati<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
      <label className="privacy-check"><input type="checkbox" name="privacyConsent" value="yes" required /><span>Pročitao/la sam <a href="/privacy" target="_blank" rel="noreferrer">obaveštenje o privatnosti</a> i saglasan/na sam da se podaci proslede radi odgovora na upit.</span></label>
      <button className="button button-primary form-submit" type="submit" disabled={sending}>{sending ? "Šaljem…" : "Pošalji upit"} <span aria-hidden="true">↗</span></button>
      <p className="form-note" aria-live="polite">{notice || "Nakon slanja upita javiću Vam se lično radi dogovora."}</p>
    </form>
  );
}
