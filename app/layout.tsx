import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Braxton McKee | Personal Blog",
  description:
    "I wash cars. Mostly by making what’s next make sense. Notes on car wash growth, customer behavior, technology, and the reality of the wash.",
  openGraph: {
    title: "Braxton McKee | Personal Blog",
    description:
      "I wash cars. Mostly by making what’s next make sense. Notes on car wash growth, customer behavior, technology, and the reality of the wash.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
