import { readFileSync } from "node:fs";
import { join } from "node:path";
import { LegalDocument } from "@/components/LegalDocument";
import { PageHero } from "@/components/PageHero";

export default function PrivacyPage() {
  const content = readFileSync(join(process.cwd(), "public", "legal", "privacy.txt"), "utf8");

  return (
    <>
      <PageHero eyebrow="PRIVACY POLICY" title="개인정보처리방침" />
      <section className="section">
        <div className="container legal-page">
          <LegalDocument content={content} />
        </div>
      </section>
    </>
  );
}
