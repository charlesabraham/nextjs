import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Final Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className="bg-gray-100">
      <Header />
        {children}
      <Footer />
      </body>

      
    </html>
  );



  
}
