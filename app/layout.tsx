import type { Metadata } from "next";
import { Bricolage_Grotesque, Spectral, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import StickyCTA from "@/components/StickyCTA";
import AdmissionsPopup from "@/components/AdmissionsPopup";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"], weight: ["400","500","600","700","800"],
  variable: "--font-bricolage", display: "swap",
});
const spectral = Spectral({
  subsets: ["latin"], weight: ["400","500","600"],
  style: ["normal","italic"], variable: "--font-spectral", display: "swap",
});
const hanken = Hanken_Grotesk({
  subsets: ["latin"], weight: ["300","400","500","600","700","800"],
  variable: "--font-hanken", display: "swap",
});

const SITE = "https://cpdg-web.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Colegio Pedro de Gante | Preescolar a Preparatoria en Tulancingo", template: "%s | Colegio Pedro de Gante" },
  description: "Colegio Pedro de Gante en Tulancingo, Hidalgo: educaciÃ³n con valores de preescolar a preparatoria. Desarrollamos talento para la vida.",
  keywords: ["Colegio Pedro de Gante","colegio en Tulancingo","escuela privada Tulancingo","preparatoria Tulancingo"],
  alternates: { canonical: SITE },
  openGraph: {
    title: "Colegio Pedro de Gante | EducaciÃ³n con valores en Tulancingo",
    description: "Desarrollando talento para la vida. De preescolar a preparatoria en Tulancingo, Hidalgo.",
    url: SITE, siteName: "Colegio Pedro de Gante", locale: "es_MX", type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Colegio Pedro de Gante" }],
  },
  twitter: { card: "summary_large_image", title: "Colegio Pedro de Gante | Tulancingo", description: "EducaciÃ³n con valores, de preescolar a preparatoria.", images: ["/og-image.png"] },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "EducationalOrganization",
  name: "Colegio Pedro de Gante", alternateName: "CPDG", url: SITE,
  telephone: "+52-775-753-0990", email: "contacto@cpdg.edu.mx",
  address: { "@type": "PostalAddress", streetAddress: "Av. Vicente Riva Palacio #200, Col. Felipe Ãngeles", addressLocality: "Tulancingo de Bravo", addressRegion: "Hidalgo", addressCountry: "MX" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bricolage.variable} ${spectral.variable} ${hanken.variable}`}>
      <body className="font-sans antialiased">
        <TopBar />
        <Nav />
        {children}
        <Footer />
        <WhatsApp />
        <StickyCTA />
        <AdmissionsPopup />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
