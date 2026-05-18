import Link from "next/link";
import { PrimecoreLogo } from "@/components/PrimecoreLogo";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "회사소개", href: "/about" },
  { label: "제품소개", href: "/products" },
  { label: "납품분야", href: "/fields" },
  { label: "기술자료", href: "/resources" },
  { label: "문의하기", href: "/contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="logo" href="/" aria-label="PRIMECORE home">
        <PrimecoreLogo />
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
