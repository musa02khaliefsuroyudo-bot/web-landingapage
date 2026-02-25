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
      <body>{children}</body>
    </html>
  );
}
