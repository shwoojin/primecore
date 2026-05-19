type LegalDocumentProps = {
  content: string;
};

export function LegalDocument({ content }: LegalDocumentProps) {
  const lines = content.split(/\r?\n/);

  return (
    <div className="legal-document">
      {lines.map((line, index) => {
        const trimmed = line.trim();

        if (!trimmed) {
          return null;
        }

        if (trimmed === "---") {
          return <hr key={index} />;
        }

        if (trimmed.startsWith("### ")) {
          return <h3 key={index}>{trimmed.replace(/^###\s+/, "")}</h3>;
        }

        if (trimmed.startsWith("## ")) {
          return <h2 key={index}>{trimmed.replace(/^##\s+/, "")}</h2>;
        }

        if (trimmed.startsWith("# ")) {
          return <h1 key={index}>{trimmed.replace(/^#\s+/, "")}</h1>;
        }

        if (trimmed.startsWith("* ")) {
          return <p className="legal-document__item" key={index}>{trimmed.replace(/^\*\s+/, "")}</p>;
        }

        return <p key={index}>{trimmed}</p>;
      })}
    </div>
  );
}
