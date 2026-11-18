import type { ReactNode } from "react";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";

type ContentPageProps = {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  children: ReactNode;
};

export default function ContentPage({ eyebrow, title, lead, children }: ContentPageProps) {
  return (
    <main>
      <SiteHeader />
      <div className="shell subpage">
        <p className="eyebrow section-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-lede">{lead}</p>
        <div className="content-page-body">{children}</div>
        <SiteFooter />
      </div>
    </main>
  );
}
