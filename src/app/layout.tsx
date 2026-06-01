import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fundación Belong — Construimos comunidades donde tod@s sientan que pertenecen",
  description: "Fundación Belong acompaña a empresas, instituciones y comunidades en la construcción de culturas de pertenencia, con equidad de género, liderazgo inclusivo y herramientas que generan cambio medible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
