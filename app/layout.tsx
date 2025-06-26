import type { Metadata } from "next";
import "primeicons/primeicons.css";
import "./index.css";

export const metadata: Metadata = {
  title: "Silas Rhyneer - Software Developer",
  description:
    "Personal portfolio website of Silas Rhyneer. AI, full-stack, startups, and everything in between.",
  keywords: ["Silas Rhyneer", "Software Developer", "AI", "Full Stack", "Startups", "Portfolio", "React", "Next.js"],
  authors: [{ name: "Silas Rhyneer", url: "https://silasrhyneer.me" }],
  creator: "Silas Rhyneer",
  publisher: "Silas Rhyneer",
  metadataBase: new URL("https://silasrhyneer.me"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Silas Rhyneer - Software Developer",
    description:
      "Personal portfolio website of Silas Rhyneer. AI, full-stack, startups, and everything in between.",
    url: "https://silasrhyneer.me",
    siteName: "Silas Rhyneer",
    images: [
      {
        url: "/assets/main4a-wide.jpg",
        width: 1200,
        height: 630,
        alt: "Silas Rhyneer - Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silas Rhyneer - Software Developer",
    description:
      "Personal portfolio website of Silas Rhyneer. AI, full-stack, startups, and everything in between.",
    images: ["/assets/main4a-wide.jpg"],
    creator: "@SilasRhyneer1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Silas Rhyneer",
              jobTitle: "Software Developer",
              description: "AI, full-stack, startups, and everything in between.",
              url: "https://silasrhyneer.me",
              image: "https://silasrhyneer.me/icon.png",
              sameAs: [
                "https://www.linkedin.com/in/silas-rhyneer/",
                "https://github.com/CaptainCrouton89",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "rhyneer.silas@gmail.com",
                contactType: "professional",
              },
              knowsAbout: [
                "Artificial Intelligence",
                "Full Stack Development",
                "Software Engineering",
                "Startups",
                "React",
                "Next.js",
                "TypeScript",
              ],
            }),
          }}
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
