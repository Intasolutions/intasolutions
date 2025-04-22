import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PageTransitionWrapper from "@/components/PageTransition";
import { TransitionOverlay } from "@/components/TransitionOverlay";
import Preloader from "@/components/Preloder";

// Fonts setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "IN-TA Solutions | Empowering Businesses with Technology",
  description: "IN-TA Solutions delivers cutting-edge digital, cloud, and software services to empower businesses globally.",
  keywords: [
    "IN-TA Solutions",
    "IT Services",
    "Cloud Solutions",
    "Software Development",
    "Business Digital Solutions",
    "Web Development",
    "Custom Software",
    "Digital Innovation",
    "Tech Company in India",
  ],
  authors: [{ name: "IN-TA Solutions", url: "https://in-tasolutions.com" }],
  openGraph: {
    title: "IN-TA Solutions | Your Partner in Digital Success",
    description: "Transform your business with IN-TA Solutions’ expert cloud, software, and IT services.",
    url: "https://in-tasolutions.com",
    siteName: "IN-TA Solutions",
    images: [
      {
        url: "/img/in-ta.png", // Make sure you add og-image.jpg in public/
        width: 1200,
        height: 630,
        alt: "IN-TA Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/img/favicon/favicon.ico", // Make sure favicon.ico is in public/
  },
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Extra SEO tags if you want manually */}
        <link rel="icon" href="/img/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
        <meta name="theme-color" content="#0E0E10" />
        {/* Optional social meta */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="IN-TA Solutions" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          <TransitionOverlay />
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
