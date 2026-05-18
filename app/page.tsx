import Link from "next/link";
import { aboutHighlights, fields, products, whyPrimecore } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__overlay" />
        <div className="container hero__content">
          <p className="eyebrow">B2B CONSTRUCTION FINISHING MATERIALS</p>
          <h1>
            건설 현장을 위한
            <br />
            안정적인 조인트 솔루션
          </h1>
          <p>
            건축 마감 현장의 품질과 납기를 고려한 전문 조인트 자재 공급
            브랜드
          </p>
          <div className="button-row">
            <Link className="button button--primary" href="/products">
              제품보기
            </Link>
            <Link className="button button--ghost" href="/contact">
              문의하기
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">ABOUT PRIMECORE</p>
            <h2>건식벽체 조인트 자재 전문 공급 브랜드</h2>
          </div>
          <p className="lead">
            PRIMECORE는 건식벽체 조인트 자재를 전문으로 공급하며, 건설
            현장에서 안정적으로 적용 가능한 제품을 중심으로 공급하고 있습니다.
          </p>
        </div>
        <div className="container card-grid card-grid--three">
          {aboutHighlights.map((item) => (
            <article className="feature-card" key={item.title}>
              <span className="icon-badge">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container section-heading">
          <p className="eyebrow">PRODUCTS</p>
          <h2>대표 제품</h2>
        </div>
        <div className="container card-grid card-grid--three">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div
                className={`product-card__image${product.image.startsWith("/") ? " product-card__image--contain" : ""}`}
                aria-label={product.name}
              >
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-card__body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <ul className="check-list">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <p className="eyebrow">WHY PRIMECORE</p>
          <h2>품질과 납기를 함께 고려하는 공급 파트너</h2>
        </div>
        <div className="container card-grid card-grid--three">
          {whyPrimecore.map((item) => (
            <article className="strength-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--image">
        <div className="container section-heading section-heading--light">
          <p className="eyebrow">SUPPLY FIELDS</p>
          <h2>납품분야</h2>
        </div>
        <div className="container field-grid">
          {fields.map((field) => (
            <article
              className="field-card"
              style={{ backgroundImage: `url(${field.image})` }}
              key={field.title}
            >
              <div>
                <h3>{field.title}</h3>
                <p>{field.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div className="container cta__inner">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2>건설 현장을 위한 안정적인 파트너</h2>
            <p>제품 및 납품 관련 문의는 언제든지 문의해주시기 바랍니다.</p>
          </div>
          <Link className="button button--primary" href="/contact">
            문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
