import { readFileSync } from "node:fs";
import { join } from "node:path";
import { LegalDocument } from "@/components/LegalDocument";
import { PageHero } from "@/components/PageHero";

export default function TermsPage() {
  const content = readFileSync(join(process.cwd(), "public", "legal", "terms.txt"), "utf8");

  return (
    <>
      <PageHero eyebrow="TERMS OF USE" title="이용약관" />
      <section className="section">
        <div className="container legal-page">
          <LegalDocument content={content} />
        </div>
      </section>
    </>
  );
}
