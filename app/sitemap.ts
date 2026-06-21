import { MetadataRoute } from "next";

const SITE = "https://cpdg-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE,                         lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/nuestra-esencia`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/niveles`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/admisiones`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/contacto`,           lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
  ];
}
