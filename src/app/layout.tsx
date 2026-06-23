import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SessionProviderWrapper from "./components/SessionProviderWrapper";

const siteUrl = "https://www.fundacionbelong.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fundación Belong — Construimos comunidades donde tod@s sientan que pertenecen",
    template: "%s | Fundación Belong",
  },
  description: "Fundación Belong acompaña a empresas, instituciones y comunidades en la construcción de culturas de pertenencia, con equidad de género, liderazgo inclusivo y herramientas que generan cambio medible.",
  keywords: [
    "equidad de género", "liderazgo inclusivo", "cultura organizacional", "diversidad e inclusión",
    "fundación Colombia", "pertenencia", "inclusión empresarial", "Bogotá", "Pamela López",
  ],
  authors: [{ name: "Fundación Belong", url: siteUrl }],
  creator: "Fundación Belong",
  publisher: "Fundación Belong",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Fundación Belong",
    title: "Fundación Belong — Construimos comunidades donde tod@s sientan que pertenecen",
    description: "Acompañamos a empresas, instituciones y comunidades en la construcción de culturas de pertenencia, equidad de género y liderazgo inclusivo.",
    images: [{ url: "/cover-facebook.png", width: 1200, height: 630, alt: "Fundación Belong" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundación Belong — Culturas de pertenencia",
    description: "Equidad de género, liderazgo inclusivo y cambio medible para empresas y comunidades en Colombia.",
    images: ["/cover-facebook.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Fundación Belong",
  url: siteUrl,
  logo: `${siteUrl}/logo-belong.png`,
  description: "Fundación Belong acompaña a empresas, instituciones y comunidades en la construcción de culturas de pertenencia, con equidad de género y liderazgo inclusivo.",
  foundingLocation: { "@type": "Place", name: "Bogotá, Colombia" },
  areaServed: "Colombia",
  email: "fundacionbelong@gmail.com",
  telephone: "+57 317 513 4506",
  taxID: "902.037.750-8",
  sameAs: [
    "https://www.instagram.com/pamelalopez.belong",
    "https://www.linkedin.com/in/pamelalopezz",
    "https://www.fundacionbelong.org",
    "https://www.fundacionbelong.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SessionProviderWrapper>
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
