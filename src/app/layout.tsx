import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Property for Sale in Coorg | Resort & Investment Land Near Madikeri",
  description: "Premium 3.86-acre property for sale in Coorg near Madikeri. Ideal for resort, wedding venue & Kodagu investment. Fixed price. Serious investors only.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Property for Sale in Coorg | Resort & Investment Land Near Madikeri",
    description: "Premium 3.86-acre property for sale in Coorg near Madikeri. Ideal for resort, wedding venue & Kodagu investment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preload" href="/videos/hero-video.mp4" as="video" type="video/mp4" />
      </head>
      <body className="antialiased bg-cream text-text-dark">
        {children}
      </body>
    </html>
  );
}
