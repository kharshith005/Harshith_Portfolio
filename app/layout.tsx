import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure this path is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harshith Kurakula | Portfolio",
  description: "Harshith Kurakula portfolio. MSCS student at ASU (Dec 2026) seeking full-time software engineering roles starting 2027.",
  icons: {
    icon: {
      url: "/hk_logo.svg",
      type: "image/svg+xml",
      sizes: "any",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-blue-100 selection:text-blue-900`}>
        {children}
      </body>
    </html>
  );
}
