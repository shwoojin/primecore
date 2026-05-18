import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT"
        title={
          <>
            건설 현장을 위한
            <br />
            안정적인 조인트 솔루션
          </>
        }
      />
      <section className="section">
        <div className="container about-layout">
        <div className="about-visual">
          <img src="/about-primecore-site.png?v=20260518" alt="PRIMECORE 건설 현장 협의 이미지" />
        </div>
        <div className="content-narrow about-copy">
          <p>
            PRIMECORE는 주식회사 투유컴퍼니가 운영하는 건축 마감 전문
            브랜드입니다.
          </p>
          <p>
            건식벽체 조인트 자재를 중심으로, 건설 현장에서 안정적으로 적용
            가능한 제품 공급을 목표로 하고 있습니다.
          </p>
          <p>
            조인트 종이테이프, 조인트 망사테이프, 메탈 코너 테이프 등 건축
            마감에 필요한 다양한 제품을 공급하며, 현장의 시공 품질과 공급
            안정성을 중요하게 생각합니다.
          </p>
          <p>
            우리는 단순한 자재 공급을 넘어, 건설 현장의 품질과 효율을 함께
            고려하는 파트너가 되고자 합니다.
          </p>
        </div>
        </div>
      </section>
    </>
  );
}
