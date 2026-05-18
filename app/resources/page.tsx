import { Fragment } from "react";
import { PageHero } from "@/components/PageHero";

const productFeatures = [
  {
    title: "조인트 종이테이프",
    image: "/resource-paper-tape.png",
    description: [
      "석고보드의 평면 접합부 및 내·외각 시공에 적용되는 건축 마감용 조인트 자재입니다. 우수한 접착력과 안정적인 인장 강도를 기반으로 접합부의 균열 발생을 효과적으로 줄여주며, 마감 품질 향상에 도움을 줍니다.",
      "건축 마감 공정에서 발생할 수 있는 들뜸 및 크랙 문제를 고려하여 설계되었으며, 건설 현장의 다양한 시공 환경에서도 안정적으로 적용 가능합니다. 석고보드 이음부, 벽체 연결 부위 및 코너 마감 등 다양한 건식벽체 시공에 폭넓게 사용할 수 있습니다.",
    ],
    points: ["우수한 접착력", "높은 인장 강도", "기포 및 들뜸 방지"],
  },
  {
    title: "조인트 망사테이프",
    image: "/resource-mesh-tape.png",
    description: [
      "건식벽체 및 석고 접합부의 균열 보수와 보강 작업에 적용되는 건축 마감용 망사테이프입니다. 우수한 유연성과 안정적인 메쉬 구조를 기반으로 다양한 벽체 환경에 대응할 수 있으며, 시공 과정에서 발생할 수 있는 균열 및 들뜸 현상을 효과적으로 보완합니다.",
      "내알칼리성을 고려한 소재 적용으로 건축 마감 환경에서도 안정적인 사용이 가능하며, 석고보드 접합부, 벽체 균열 보수, 실내 마감 공정 등 다양한 현장에서 폭넓게 활용할 수 있습니다.",
    ],
    points: ["내알칼리성", "기포 및 수포 방지", "다양한 벽체 대응"],
  },
  {
    title: "메탈 코너 테이프",
    image: "/resource-installation.png",
    description: [
      "인코너 및 아웃코너 시공에 적용되는 건축 마감용 메탈 코너 테이프입니다. 코너 부위의 보강과 안정적인 마감 품질 구현을 고려하여 설계되었으며, 다양한 각도의 시공 환경에서도 유연하게 적용 가능합니다.",
      "코너 부위에서 발생할 수 있는 충격 및 균열 문제를 보완하며, 시공 편의성을 높여 보다 안정적인 마감 작업이 가능하도록 도와줍니다. 건식벽체 코너 마감, 벽체 모서리 보강 및 다양한 건축 마감 공정에 폭넓게 사용할 수 있습니다.",
    ],
    points: ["다양한 각도 시공", "코너 보강", "시공 편의성"],
  },
];

const guideSteps = [
  {
    step: "STEP 1",
    title: "조인트 부위 정리",
    description: "시공 전 접합부의 먼지와 이물질을 제거하고 표면을 정리합니다.",
  },
  {
    step: "STEP 2",
    title: "퍼티 도포",
    description: "조인트 부위에 퍼티를 균일하게 도포합니다.",
  },
  {
    step: "STEP 3",
    title: "테이프 부착",
    description: "조인트 테이프를 중앙선에 맞춰 부착합니다.",
  },
  {
    step: "STEP 4",
    title: "기포 제거 및 밀착",
    description: "헤라를 이용하여 내부 기포를 제거하고 표면에 밀착시킵니다.",
  },
  {
    step: "STEP 5",
    title: "건조 후 마감",
    description: "충분히 건조한 뒤 추가 퍼티 및 마감 작업을 진행합니다.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="TECHNICAL CONTENTS"
        title="기술자료"
        description="건설 현장에서 PRIMECORE 조인트 자재를 안정적으로 적용하기 위한 제품 특성, 시공 가이드, 품질 관리 정보를 제공합니다."
      />

      <section className="section section--soft">
        <div className="container resource-nav-grid">
          <a className="resource-nav-card" href="#product-features">
            <span>01</span>
            <h2>제품 특성</h2>
            <p>조인트 자재별 주요 특징과 현장 적용 포인트를 확인합니다.</p>
          </a>
          <a className="resource-nav-card" href="#installation-guide">
            <span>02</span>
            <h2>시공 가이드</h2>
            <p>조인트 부위 정리부터 건조 후 마감까지 기본 시공 흐름을 안내합니다.</p>
          </a>
          <a className="resource-nav-card" href="#quality-management">
            <span>03</span>
            <h2>품질 관리</h2>
            <p>품질 기준, 납기, 공급 안정성을 중심으로 관리 방향을 정리합니다.</p>
          </a>
        </div>
      </section>

      <section className="section" id="product-features">
        <div className="container resource-section-heading resource-section-heading--wide">
          <span>PRODUCT FEATURES</span>
          <h2>제품 특성</h2>
          <p>
            PRIMECORE는 건축 마감 현장에서 요구되는 접착력, 균열 방지, 시공 편의성을 고려하여
            조인트 자재를 공급합니다.
          </p>
        </div>
        <div className="container product-feature-visual">
          <img src="/product-features-overview.png?v=20260515" alt="PRIMECORE 제품 특성 적용 이미지" />
        </div>
        <div className="container resource-detail-grid">
          {productFeatures.map((item) => (
            <article className="resource-detail-card" key={item.title}>
              <div className="resource-detail-card__body">
                <h3>{item.title}</h3>
                {item.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--soft" id="installation-guide">
        <div className="container resource-section-heading resource-section-heading--wide">
          <span>INSTALLATION GUIDE</span>
          <h2>시공 가이드</h2>
          <p>현장 마감 품질을 고려한 조인트 테이프 기본 시공 순서입니다.</p>
        </div>
        <div className="container step-list">
          {guideSteps.map((item, index) => (
            <Fragment key={item.step}>
              <article className="step-card">
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
              {index === 0 ? (
                <div className="guide-visual guide-visual--inline">
                  <img src="/guide-step-cleaning.png?v=20260515" alt="조인트 부위 정리 과정" />
                </div>
              ) : null}
              {index === 1 ? (
                <div className="guide-visual guide-visual--inline">
                  <img src="/guide-step-putty.png?v=20260515" alt="퍼티 도포 과정" />
                </div>
              ) : null}
              {index === 2 ? (
                <div className="guide-visual guide-visual--inline">
                  <img src="/guide-step-tape.png?v=20260515" alt="테이프 부착 과정" />
                </div>
              ) : null}
              {index === 3 ? (
                <div className="guide-visual guide-visual--inline">
                  <img src="/guide-step-bubble.png?v=20260515" alt="기포 제거 및 밀착 과정" />
                </div>
              ) : null}
              {index === 4 ? (
                <div className="guide-visual guide-visual--inline">
                  <img src="/guide-step-finish.png?v=20260515" alt="건조 후 마감 과정" />
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="section" id="quality-management">
        <div className="container resource-section-heading resource-section-heading--wide">
          <span>QUALITY MANAGEMENT</span>
          <h2>품질 관리</h2>
          <p>
            PRIMECORE는 건설 현장의 품질 기준과 공급 일정을 고려하여 안정적인 제품 공급을 목표로 합니다.
          </p>
        </div>
        <div className="container quality-visual">
          <img src="/quality-management-overview.png?v=20260515" alt="PRIMECORE 품질 관리 항목" />
        </div>
      </section>
    </>
  );
}
