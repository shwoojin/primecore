import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "PRIMECORE | 건설 현장을 위한 조인트 솔루션",
  description:
    "PRIMECORE는 건식벽체 조인트 자재를 전문으로 공급하는 B2B 건축 마감 브랜드입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
