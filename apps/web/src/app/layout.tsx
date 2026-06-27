import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server"

import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { ConvexClientProvider } from "@/components/providers/convex-client-provider"
import { ToastProvider } from "@/components/ui/toast"
import { cn } from "@/lib/utils";

export const metadata = {
  title: "TAHAQAQ | Portail de Vérification Civique du Maroc",
  description: "Portail national sécurisé de vérification et d'authentification des documents officiels et des démarches administratives du Royaume du Maroc.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html
        lang="fr"
        suppressHydrationWarning
        className={cn("antialiased")}
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
