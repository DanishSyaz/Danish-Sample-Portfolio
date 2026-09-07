import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "[YOUR NAME] | Technical Consultant",
  description:
    "Technical Consultant bridging Computer Science architectures and Advanced Data Analytics. Delivering measurable engineering and algorithmic performance for scalable enterprise ecosystems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-default text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary">
        <Navbar />
        <main className="w-full pt-20 bg-surface min-h-screen flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
