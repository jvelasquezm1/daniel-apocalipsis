import React from "react";
import { useTranslations } from "next-intl";

interface RenderTextContentProps {
  title: string;
  content: string[];
  itemClassName?: string; // Nueva prop para clases CSS de cada elemento de contenido
}

export const RenderTextContent: React.FC<RenderTextContentProps> = ({
  title,
  content,
  itemClassName,
}) => {
  const t = useTranslations();
  return (
    <div>
      <h3 className="text-lg font-bold">{t(title)}</h3>
      {content.map((paragraph, index) => (
        <p key={index} className={`mt-2 ${itemClassName || ""}`}>
          {t(paragraph)}
        </p>
      ))}
    </div>
  );
};
