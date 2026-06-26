import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/views/app/landing/hero";
import { PunchlineDiagnosis } from "@/components/views/app/landing/punchline-diagnosis";
import { PunchlineNormalization } from "@/components/views/app/landing/punchline-normalization";
import { PunchlineEvidence } from "@/components/views/app/landing/punchline-evidence";
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
        <PunchlineDiagnosis />
        <MobileShowcaseSection />
        <BridgeSection />
        <ObservatoryShowcaseSection />
        <AuditFlowSection />
        <PunchlineNormalization />
        <PunchlineEvidence />
      </main>
    </div>
  )
}
