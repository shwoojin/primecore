import { PrimecoreLogo } from "@/components/PrimecoreLogo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo">
            <PrimecoreLogo className="footer-logo__mark" />
          </div>
        </div>
        <address>
          <p>주식회사 투유컴퍼니</p>
          <p>등록번호 : 358-86-01071</p>
          <p>대표 : 주 화</p>
          <p>대표번호 : 02-428-3010</p>
          <p>이메일 : preimcore@gmail.com</p>
          <p>주소 : 서울특별시 강동구 양재대로 1622 3층</p>
        </address>
        <nav className="footer-legal" aria-label="법적 고지">
          <a href="/privacy">개인정보처리방침</a>
          <a href="/terms">이용약관</a>
        </nav>
      </div>
      <div className="container copyright">
        COPYRIGHT © TOU COMPANY. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
