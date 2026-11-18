type LessonArtKind = "individual" | "group" | "exam" | "online";

export function MathHeroIllustration() {
  return (
    <div className="math-hero-illustration" aria-hidden="true">
      <svg viewBox="0 0 520 410" role="presentation">
        <circle className="hero-wash" cx="270" cy="203" r="168" />
        <path className="doodle-line doodle-green" d="M75 306c24 19 43 23 65 20" />
        <path className="doodle-line doodle-amber" d="M402 103c17-14 31-18 48-13" />
        <path className="book-shadow" d="M93 284c75-22 134-18 168 8 39-28 98-31 170-9v31c-73-20-131-15-170 15-37-30-95-34-168-13z" />
        <path className="book-page book-page-left" d="M96 148c62-19 118-12 165 19v126c-48-30-103-33-165-14z" />
        <path className="book-page book-page-right" d="M261 167c48-31 105-38 170-19v131c-64-19-121-16-170 14z" />
        <path className="book-spine" d="M261 168v125" />
        <path className="book-rule" d="M118 180c39-10 75-8 109 7M118 199c39-9 75-7 109 8M118 219c39-9 75-6 109 9M286 184c39-17 79-21 122-14M286 204c39-16 79-20 122-13" />
        <text className="book-equation" x="318" y="245">x + 4 = 10</text>
        <path className="pencil" d="m380 90 89 169-17 19-99-159z" />
        <path className="pencil-detail" d="m361 119 31-18m70 138-27 17" />
        <path className="pencil-tip" d="m452 278 17-19 4 31z" />
        <circle className="doodle-dot" cx="119" cy="97" r="18" />
        <path className="doodle-triangle" d="m104 340 20-37 21 37z" />
        <path className="doodle-star" d="m431 325 7 15 16 2-12 10 4 16-15-8-14 8 3-16-12-10 16-2z" />
        <path className="doodle-square" d="m74 142 24-8 8 25-24 8z" />
        <path className="book-cover" d="M93 279c68-19 124-13 168 15 44-28 101-34 170-15v22c-69-18-126-12-170 20-44-32-100-38-168-20z" />
      </svg>
      <span className="illustration-sticker">Znam da rešim!</span>
    </div>
  );
}

export function LessonDoodle({ kind }: { kind: LessonArtKind }) {
  return (
    <svg className={`lesson-doodle lesson-doodle-${kind}`} viewBox="0 0 80 64" aria-hidden="true">
      {kind === "individual" && <><path d="M16 47c3-12 10-18 19-18s16 6 19 18" /><circle cx="35" cy="17" r="9" /><path d="M57 15h12m-6-6v12" /></>}
      {kind === "group" && <><circle cx="27" cy="24" r="12" /><circle cx="51" cy="24" r="12" /><path d="M8 53c2-10 8-15 17-15 7 0 12 4 15 10m0 5c2-10 8-15 17-15 8 0 13 5 16 15" /></>}
      {kind === "exam" && <><path d="M18 48h45M23 43l12-22 12 22zm22-3h20M50 36l8-15 8 15z" /><circle cx="60" cy="12" r="3" /></>}
      {kind === "online" && <><rect x="13" y="10" width="48" height="34" rx="5" /><path d="M8 51h58M27 44l-2 7m20-7 2 7M22 35l10-9 8 5 12-12" /><path d="m48 19 4 0 0 4" /></>}
    </svg>
  );
}
