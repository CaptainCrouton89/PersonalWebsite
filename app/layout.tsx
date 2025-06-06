import "primeicons/primeicons.css";
import "./index.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Silas Rhyneer - Software Developer",
  description: "Personal portfolio website of Silas Rhyneer, a software developer who never learned when to stop building.",
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