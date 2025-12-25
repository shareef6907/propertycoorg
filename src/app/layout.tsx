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
  metadataBase: new URL('https://propertycoorg.com'),
  title: "Property for Sale in Coorg, India | 3.86 Acre Resort Land Near Madikeri",
  description: "Premium 3.86-acre land for sale in Coorg, Karnataka, India. Ideal for resort development, wedding venue & commercial investment. Near Madikeri. Convertible to commercial. ₹2 Lakhs per Cent. Contact: +973 3300 7030",
  keywords: [
    "property for sale in india",
    "land for sale in india",
    "investment property india",
    "resort land for sale in india",
    "property for sale in coorg",
    "land for sale in coorg",
    "resort land for sale in coorg",
    "coorg property",
    "kodagu land for sale",
    "madikeri property",
    "coorg investment land",
    "resort land kodagu",
    "wedding venue land coorg",
    "commercial land coorg",
    "napokulu property",
    "coorg real estate",
  ],
  authors: [{ name: "PropertyCoorg" }],
  creator: "PropertyCoorg",
  publisher: "PropertyCoorg",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://propertycoorg.com",
    siteName: "PropertyCoorg",
    title: "3.86 Acre Property for Sale in Coorg | Resort & Investment Land Near Madikeri",
    description: "Premium land for sale in Coorg, Napokulu. Perfect for resort, wedding venue & commercial development. 3.86 acres near Madikeri. ₹2 Lakhs per Cent.",
    images: [
      {
        url: "/gallery/1.jpeg",
        width: 1200,
        height: 630,
        alt: "Property for sale in Coorg - 3.86 acre land near Madikeri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3.86 Acre Property for Sale in Coorg | Resort Land Near Madikeri",
    description: "Premium land for sale in Coorg. Ideal for resort & wedding venue. 3.86 acres in Napokulu, Kodagu. ₹2 Lakhs per Cent.",
    images: ["/gallery/1.jpeg"],
  },
  alternates: {
    canonical: "https://propertycoorg.com",
  },
  verification: {
    google: "z35UxX2EqHUz_ZwF3_TkEnyhJrhgh3cP5S0_NsrYh1M",
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

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11385612335"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11385612335');
            `,
          }}
        />
      </head>
      <body className="antialiased bg-cream text-text-dark">
        {children}
      </body>
    </html>
  );
}
