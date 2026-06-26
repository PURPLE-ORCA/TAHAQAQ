import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/views/app/landing/hero";
import { ObservatoryShowcaseSection } from "@/components/views/app/landing/observatory-showcase";
import { MobileShowcaseSection } from "@/components/views/app/landing/mobile-showcase";
import { ProductSurfacesSection } from "@/components/views/app/landing/product-surfaces";
import { AuditFlowSection } from "@/components/views/app/landing/audit-flow";
import { TrustSection } from "@/components/views/app/landing/trust-section";

export default function Page() {
  return (
    <div className="no-scrollbar min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ObservatoryShowcaseSection />
        <MobileShowcaseSection />
        <ProductSurfacesSection />
        <AuditFlowSection />
        <TrustSection />
      </main>
    </div>
  )
}
