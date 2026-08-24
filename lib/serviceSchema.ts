import { SITE_NAME, SITE_URL } from "@/lib/site";

export function serviceSchema({
  name,
  description,
  price,
  path,
}: {
  name: string;
  description: string;
  price: number;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Trading Mentorship",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      price: String(price),
      priceCurrency: "USD",
      url: `${SITE_URL}${path}`,
    },
  };
}
