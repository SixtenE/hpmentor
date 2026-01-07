import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./convex-client-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Viewport configuration - separated from metadata in Next.js 14+
 * Controls mobile viewport behavior and theme color
 */
export const viewport: Viewport = {
  themeColor: "#8B7FC7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

/**
 * Enhanced metadata with OpenGraph and Twitter cards
 * Improves SEO and social sharing
 */
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://hpmentor.se",
  ),
  title: {
    default: "HP Mentor",
    template: "%s | HP Mentor",
  },
  description:
    "Öva på Högskoleprovet med HP Mentor - din personliga mentor för att förbättra dina resultat.",
  manifest: "/manifest.json",
  applicationName: "HP Mentor",
  keywords: ["högskoleprovet", "HP", "övning", "quiz", "utbildning", "Sverige"],
  authors: [{ name: "HP Mentor" }],
  creator: "HP Mentor",
  publisher: "HP Mentor",

  // OpenGraph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://hpmentor.se",
    siteName: "HP Mentor",
    title: "HP Mentor - Öva på Högskoleprovet",
    description:
      "Öva på Högskoleprovet med HP Mentor - din personliga mentor för att förbättra dina resultat.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HP Mentor",
      },
    ],
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "HP Mentor - Öva på Högskoleprovet",
    description:
      "Öva på Högskoleprovet med HP Mentor - din personliga mentor för att förbättra dina resultat.",
    images: ["/og-image.png"],
  },

  // PWA configuration
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "HP Mentor",
  },
  formatDetection: {
    telephone: false,
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Root layout component
 * Server Component - wraps all pages with common layout and providers
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
