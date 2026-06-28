import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

const gaMeasurementId = "G-CHYCMD13LT";

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
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}', { send_page_view: false });
          `}
        </Script>
        <Suspense fallback={null}>
          <GoogleAnalytics measurementId={gaMeasurementId} />
        </Suspense>
      </body>
    </html>
  );
}
