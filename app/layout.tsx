import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mohammed Abu Kmail - Software Engineer",
  description:
    "Experienced Front-End Engineer specializing in React, Next.js, and modern web development. Currently working at Talents Valley with expertise in TypeScript, JavaScript, and responsive design.",
  keywords:
    "Mohammed Abu Kmail, Software Engineer, Front-End Developer, React, Next.js, TypeScript, JavaScript, Web Development",
  authors: [{ name: "Mohammed Abu Kmail" }],
  creator: "Mohammed Abu Kmail",
  openGraph: {
    title: "Mohammed Abu Kmail - Software Engineer",
    description: "Experienced Front-End Engineer specializing in React, Next.js, and modern web development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Abu Kmail - Software Engineer",
    description: "Experienced Front-End Engineer specializing in React, Next.js, and modern web development.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
