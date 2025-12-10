import type { Metadata } from "next";
import { Cairo, Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import SiteChrome from "./components/sections/global/SiteChrome";

const cairo = Cairo({
  variable: "--font-display",
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Staron Egypt | Supply & Apply Interior Finishes",
  description:
    "Staron Egypt delivers premium solid surfaces, quartz, vinyl flooring, HPL compact, and PVC wall protection—from design and manufacturing to installation.",
  metadataBase: new URL("https://www.staron-egypt.example"), // replace with production URL
  openGraph: {
    title: "Staron Egypt | Premium Surfaces & Turnkey Delivery",
    description:
      "One-stop contractor for healthcare, residential, banking, and commercial interiors.",
    locale: "en_EG",
    siteName: "Staron Egypt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${inter.variable} ${notoArabic.variable} bg-background text-text-main antialiased`}
      >
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
