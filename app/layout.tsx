import type { Metadata } from "next";
import { Bebas_Neue, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Sany — Portfolio",
  description: "Portfolio website Hasna Tsaniya — Front End Developer & Quality Assurance.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${bebasNeue.variable} ${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-full font-sans text-brown bg-cream" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

