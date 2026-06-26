import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/views/app/landing/hero";
import { MobileShowcaseSection } from "@/components/views/app/landing/mobile-showcase";
import { BridgeSection } from "@/components/views/app/landing/bridge-section";
import { ObservatoryShowcaseSection } from "@/components/views/app/landing/observatory-showcase";
import { AuditFlowSection } from "@/components/views/app/landing/audit-flow";

export default function Page() {
  return (
    <div className="no-scrollbar min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MobileShowcaseSection />
        <BridgeSection />
        <ObservatoryShowcaseSection />
        <AuditFlowSection />
      </main>
    </div>
  )
}
