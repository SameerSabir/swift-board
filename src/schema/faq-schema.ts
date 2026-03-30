import { parseFaqs } from "@/utils/helper";

export function generateFAQSchema(
  faqs: string | { question: string; answer: string }[] | undefined
) {
  const parsedFaqs = parseFaqs(faqs);

  if (!parsedFaqs || parsedFaqs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: parsedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
