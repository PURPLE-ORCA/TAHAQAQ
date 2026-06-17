import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server"
import { Geist, Geist_Mono, Figtree } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { ConvexClientProvider } from "@/components/providers/convex-client-provider"
import { ToastProvider } from "@/components/ui/toast"
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={cn("antialiased", fontMono.variable, "font-sans", figtree.variable)}
        >
        <body>
          <ConvexClientProvider>
            <ThemeProvider>
              <ToastProvider>{children}</ToastProvider>
            </ThemeProvider>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  )
}
