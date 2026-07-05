import "./globals.css";
import type { Metadata, Viewport } from "next";
import { site } from "../lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://sameerbinraees-portfolio.vercel.app"),
  title: `${site.name} · ${site.role}`,
  description:
    "Sameer Bin Raees is a full stack engineer with a backend focus and 6+ years across Node.js, React and Go. Logistics, AI, e-commerce and payments systems.",
  keywords: [
    "Sameer Bin Raees",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Node.js",
    "NestJS",
    "React",
    "Go",
    "AWS",
    "Kafka",
    "Terraform",
    "Pakistan",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} · ${site.role}`,
    description:
      "Full stack engineer working on payments, integrations, and API gateways for logistics, AI, and e-commerce.",
    type: "website",
    url: "/",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0c10",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Instrument+Sans:ital,wght@0,400..600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              jobTitle: site.role,
              email: `mailto:${site.email}`,
              url: "https://sameerbinraees-portfolio.vercel.app",
              sameAs: [site.github, site.linkedin],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
