import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

const primaryFont = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-primary",
  weight: "100 900",
});
const secondaryFont = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-secondary",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "e-commerce",
  description: "Project M4 Henry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
