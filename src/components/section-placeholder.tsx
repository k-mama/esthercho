import "./section-placeholder.css";

interface SectionPlaceholderProps {
  title: string;
  children: React.ReactNode;
}

export function SectionPlaceholder({
  title,
  children,
}: SectionPlaceholderProps) {
  return (
    <div className="container">
      <div className="section-placeholder">
        <h1 className="section-placeholder-title">{title}</h1>
        <p className="section-placeholder-description">{children}</p>
      </div>
    </div>
  );
}