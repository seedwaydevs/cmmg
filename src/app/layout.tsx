import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Production Music",
    "Record Label",
    "Content Production",
    "CAPASSO",
    "Content Music Media Group",
    "YandiSibi",
    "Abe Sibiya",
  ],
  authors: [
    {
      name: "Abe Sibiya",
      url: "https://www.linkedin.com/in/rev-abe-sibiya-072aa2103/",
    },
  ],
  creator: "CMMG",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/cmmg-logo.ico", // favicon
    shortcut: "/images/cmmg-logo.png",
    apple: "/images/cmmg-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          sted.className
        )}
      >
        <Nav />
        <div className="flex-1 realtive z-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
