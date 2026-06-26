import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/views/app/landing/hero";
import { ProofStrip } from "@/components/views/app/landing/proof-strip";
import { ProductSurfacesSection } from "@/components/views/app/landing/product-surfaces";
import { AuditFlowSection } from "@/components/views/app/landing/audit-flow";
import { LogoCloud } from "@/components/views/app/landing/logo-cloud";
import { TrustSection } from "@/components/views/app/landing/trust-section";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f4fcef] text-[#161d16]">
      <Header />
      <main>
        <HeroSection />
        <ProofStrip />
        <ProductSurfacesSection />
        <AuditFlowSection />
        <LogoCloud />
        <TrustSection />
      </main>
    </div>
  )
}
