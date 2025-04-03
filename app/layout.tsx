import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Mountain } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Capital Markets IPO Advisor",
  description: "Expert guidance for companies navigating the IPO process on NASDAQ and NYSE",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="ipo-advisor-theme"
        >
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
              <div className="container flex h-16 items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <Mountain className="h-6 w-6 text-accent" />
                  <span className="font-bold text-foreground">IPO Advisor</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                  <Link
                    href="/"
                    className="text-sm font-medium text-muted-foreground hover:text-accent hover:underline underline-offset-4"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium text-muted-foreground hover:text-accent hover:underline underline-offset-4"
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className="text-sm font-medium text-muted-foreground hover:text-accent hover:underline underline-offset-4"
                  >
                    Services
                  </Link>
                  <Link
                    href="/#contact"
                    className="text-sm font-medium text-muted-foreground hover:text-accent hover:underline underline-offset-4"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </header>
            {children}
            <footer className="w-full border-t border-border bg-background py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-sm text-muted-foreground md:text-base">
                  © {new Date().getFullYear()} IPO Advisor. All rights reserved.
                </p>
                <nav className="flex gap-4 sm:gap-6">
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-accent hover:underline underline-offset-4"
                  >
                    Privacy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-sm text-muted-foreground hover:text-accent hover:underline underline-offset-4"
                  >
                    Terms
                  </Link>
                </nav>
              </div>
            </footer>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'