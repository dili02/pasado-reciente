import { NewsArticle, WithContext } from "schema-dts";

interface JsonLdArticleProps {
  title: string;
  description: string;
  date: Date;
  url: string;
  type: string;
}

export default function JsonLdArticle({
  title,
  description,
  date,
  url,
  type,
}: JsonLdArticleProps) {
  const jsonLd: WithContext<NewsArticle> = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description: description,
    datePublished: date.toISOString(),
    url: url,
    publisher: {
      "@type": "Organization",
      name: "Pasado Reciente",
      url: "https://www.pasadoreciente.com/",
    },
    author: {
      "@type": "Organization",
      name: "Pasado Reciente - Museo de la Memoria",
    },
    inLanguage: "es-UY",
    articleSection: type,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
