import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { inquiryTypes } from "@/lib/content";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="문의하기"
        description="제품, 납품, 시공 적용 관련 문의를 남겨주시면 확인 후 연락드리겠습니다."
      />
      <section className="section">
        <div className="container contact-layout">
          <aside className="contact-info">
            <h2>PRIMECORE</h2>
            <p>운영사 : 주식회사 투유컴퍼니</p>
            <dl>
              <div>
                <dt>대표번호</dt>
                <dd>02-428-3010</dd>
              </div>
              <div>
                <dt>이메일</dt>
                <dd>primcore@nave.com</dd>
              </div>
              <div>
                <dt>주소</dt>
                <dd>서울특별시 강동구 양재대로 1622 3층</dd>
              </div>
            </dl>
          </aside>
          <ContactForm inquiryTypes={inquiryTypes} />
        </div>
      </section>
    </>
  );
}
