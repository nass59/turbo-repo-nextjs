import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { ClerkProvider } from "@clerk/nextjs"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { type LayoutProps } from "@/types/common"
import { baseMetadata, baseViewport } from "@/constants/metadata"
import { cn, Toaster } from "@shared/ui"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { ModalProvider } from "@/features/admin/common/providers/modal-provider"

import "@shared/ui/styles/global.css"

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "400",
})

const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export const metadata: Metadata = baseMetadata
export const viewport: Viewport = baseViewport

export default function RootLayout({ children }: LayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen scroll-smooth bg-background font-sans antialiased",
            fontSans.variable,
            fontHeading.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ModalProvider />
            <div className="flex min-h-screen flex-col">{children}</div>
            <Toaster />
            <TailwindIndicator />
            <SpeedInsights />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
