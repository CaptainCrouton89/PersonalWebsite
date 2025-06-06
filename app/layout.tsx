import "primeicons/primeicons.css";
import "./index.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Silas Rhyneer - Software Developer",
  description: "AI-powered full-stack solutions for ambitious startups. Building the future, one line of code at a time.",
  icons: {
    icon: "/icon.png"
  },
  openGraph: {
    title: "Silas Rhyneer - Software Developer",
    description: "AI-powered full-stack solutions for ambitious startups. Building the future, one line of code at a time.",
    url: "https://silasrhyneer.com",
    siteName: "Silas Rhyneer",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Silas Rhyneer"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Silas Rhyneer - Software Developer",
    description: "AI-powered full-stack solutions for ambitious startups. Building the future, one line of code at a time.",
    images: ["/icon.png"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}