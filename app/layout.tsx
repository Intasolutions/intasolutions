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
  title: "IN-TA Solutions Pvt Ltd",
  description: "Information Technology Company",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
          <Preloader/>
          <TransitionOverlay />
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

