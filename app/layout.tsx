import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Apropos – Estações de IA",
    template: "%s | Apropos – Estações de IA"
  },
  description: "Apropos – Estações de IA para aprender competências críticas do futuro.",
  openGraph: {
    title: "Apropos – Estações de IA",
    description: "Estações de IA como meio para aprender competências críticas do futuro.",
    images: ["/og.svg"],
    type: "website"
  },
  metadataBase: new URL("https://apropos.ai")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-neutral-950 text-neutral-100 antialiased">{children}</body>
    </html>
  );
}
