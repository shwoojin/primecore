type PrimecoreLogoProps = {
  className?: string;
};

export function PrimecoreLogo({ className = "logo-mark" }: PrimecoreLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 920 330"
      role="img"
      aria-label="PRIMECORE"
      focusable="false"
    >
      <rect width="920" height="330" fill="white" />
      <g transform="translate(70 68)">
        <path d="M652 38L830 0L822 68H788L793 30L652 38Z" fill="#f27600" />
        <path d="M565 63L760 22V47L565 63Z" fill="#0a4384" />
        <path d="M610 71L790 53V77H610V71Z" fill="#787f88" />
        <text
          x="0"
          y="120"
          fill="#0a4384"
          fontFamily="Arial Black, Impact, sans-serif"
          fontSize="104"
          fontStyle="italic"
          fontWeight="900"
          letterSpacing="-8"
        >
          PRIME
        </text>
        <text
          x="420"
          y="120"
          fill="#f27600"
          fontFamily="Arial Black, Impact, sans-serif"
          fontSize="104"
          fontStyle="italic"
          fontWeight="900"
          letterSpacing="-8"
        >
          CORE
        </text>
        <path d="M12 176H190" stroke="#787f88" strokeWidth="7" />
        <path d="M562 176H758" stroke="#787f88" strokeWidth="7" />
        <text
          x="225"
          y="205"
          fill="#0a4384"
          fontFamily="Malgun Gothic, Arial, sans-serif"
          fontSize="70"
          fontWeight="900"
          letterSpacing="-4"
        >
          &#54532;&#46972;&#51076;
        </text>
        <text
          x="430"
          y="205"
          fill="#f27600"
          fontFamily="Malgun Gothic, Arial, sans-serif"
          fontSize="70"
          fontWeight="900"
          letterSpacing="-4"
        >
          &#53076;&#50612;
        </text>
      </g>
    </svg>
  );
}
