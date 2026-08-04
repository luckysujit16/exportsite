import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

export const metadata = {
  title: "SJFK FINTECH PRIVATE LIMITED | Global Import & Export Solutions",
  description:
    "SJFK FINTECH PRIVATE LIMITED is a Navi Mumbai based import and export company sourcing pulses, spices, onion, potato and fresh vegetables for buyers worldwide, with custom branding and private label services.",
  keywords: [
    "import export company India",
    "agricultural commodity exporter",
    "pulses exporter",
    "spices exporter",
    "onion potato exporter",
    "Navi Mumbai import export",
    "private label agri products",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
