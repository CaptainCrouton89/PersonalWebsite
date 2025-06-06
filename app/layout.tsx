import type { Metadata } from "next";
import "primeicons/primeicons.css";
import "./index.css";

export const metadata: Metadata = {
  title: "Silas Rhyneer - Software Developer",
  description:
    "Personal portfolio website of Silas Rhyneer. AI, full-stack, startups, and everything in between.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Silas Rhyneer - Software Developer",
    description:
      "Personal portfolio website of Silas Rhyneer. AI, full-stack, startups, and everything in between.",
    url: "https://silasrhyneer.me",
    siteName: "Silas Rhyneer",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Silas Rhyneer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Silas Rhyneer - Software Developer",
    description:
      "Personal portfolio website of Silas Rhyneer. AI, full-stack, startups, and everything in between.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
