import { PageHero } from "@/components/PageHero";
import { fields } from "@/lib/content";

export default function FieldsPage() {
  return (
    <>
      <PageHero
        eyebrow="SUPPLY FIELDS"
        title="납품분야"
        description="건설 현장, 인테리어, 시공업체, 자재 유통까지 B2B 공급 환경에 맞춰 대응합니다."
      />
      <section className="section">
        <div className="container field-detail-grid">
          {fields.map((field) => (
            <article className="field-detail" key={field.title}>
              <div
                className="field-detail__image"
                style={{ backgroundImage: `url(${field.image})` }}
              />
              <div>
                <h2>{field.title}</h2>
                <p>{field.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
