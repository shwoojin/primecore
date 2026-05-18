import { PageHero } from "@/components/PageHero";
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
          <form className="contact-form">
            <fieldset>
              <legend>문의 유형</legend>
              <select className="inquiry-select" name="inquiryType" defaultValue="">
                <option value="" disabled>
                  선택하기
                </option>
                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </fieldset>
            <div className="form-grid">
              <label>
                회사명
                <input name="company" type="text" />
              </label>
              <label>
                담당자명
                <input name="name" type="text" />
              </label>
              <label>
                연락처
                <input name="phone" type="tel" />
              </label>
              <label>
                이메일
                <input name="email" type="email" />
              </label>
            </div>
            <label>
              문의내용
              <textarea name="message" rows={8} />
            </label>
            <button className="button button--primary" type="submit">
              문의 보내기
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
