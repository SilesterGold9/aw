import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AW Elite Shielding - Blindagem Premium de Celulares",
  description:
    "Proteja seu dispositivo com a melhor tecnologia de blindagem para celulares. Serviços profissionais de Adelmo e Wilker.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children} <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
