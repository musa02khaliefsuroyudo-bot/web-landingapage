import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sinar Logam - Supplier Logam Terpercaya",
  description: "Penyedia berbagai jenis logam berkualitas untuk kebutuhan industri dan konstruksi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Sinar Logam" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>{children}</body>
    </html>
  );
}
