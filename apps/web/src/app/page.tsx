import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/views/app/landing/hero";
import { PunchlineDiagnosis } from "@/components/views/app/landing/punchline-diagnosis";
import { PunchlineNormalization } from "@/components/views/app/landing/punchline-normalization";
import { PunchlineEvidence } from "@/components/views/app/landing/punchline-evidence";
import { ObservatoryShowcaseSection } from "@/components/views/app/landing/observatory-showcase";
import { AuditFlow } from "@/components/views/app/landing/audit-flow";

export default function Page() {
  return (
    <div className="no-scrollbar min-h-screen text-right" dir="rtl" lang="ar">
      <Header />
      <main>
        <HeroSection />
        <PunchlineDiagnosis />
        <PunchlineEvidence />
        <ObservatoryShowcaseSection />
        <AuditFlow />
        <PunchlineNormalization />
      </main>
    </div>
  )
}
