import { PageHero } from "@/components/PageHero";
import { products } from "@/lib/content";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="PRODUCTS"
        title="제품소개"
        description="현장 적용성과 마감 품질을 고려한 PRIMECORE 조인트 자재를 소개합니다."
      />
      <section className="section section--soft">
        <div className="container product-list">
          {products.map((product) => (
            <article className="product-detail" key={product.name}>
              <div
                className={`product-detail__image${product.image.startsWith("/") ? " product-detail__image--contain" : ""}`}
              >
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-detail__content">
                <p className="eyebrow">PRIMECORE</p>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="detail-columns">
                  <div>
                    <h3>특징</h3>
                    <ul className="check-list">
                      {product.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>적용 분야</h3>
                    <ul className="check-list">
                      {product.applications.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
