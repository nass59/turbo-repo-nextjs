import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { type LayoutProps } from "@/types/common"
import { baseMetadata, baseViewport } from "@/constants/metadata"
import { cn, Toaster } from "@shared/ui"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { Help } from "@/features/public/common/ui/helper"

import "@shared/ui/styles/global.css"

// Define the font styles
const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "400",
})

const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

/**
 * Define the metadata for the site
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
 */
export const metadata: Metadata = baseMetadata

/**
 * Define the viewport for the site
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-viewport
 */
export const viewport: Viewport = baseViewport

/**
 * Define the root layout for the site
 * Only the root layout can contain <html> and <body> tags.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/layout#root-layouts
 */
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen scroll-smooth bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          forcedTheme="light"
        >
          <div className="flex min-h-screen flex-col">{children}</div>
          <Help />
          <Toaster />
          <TailwindIndicator />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
