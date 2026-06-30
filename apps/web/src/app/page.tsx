import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/views/app/landing/hero";
import { PunchlineDiagnosis } from "@/components/views/app/landing/punchline-diagnosis";
import { PunchlineNormalization } from "@/components/views/app/landing/punchline-normalization";
import { PunchlineEvidence } from "@/components/views/app/landing/punchline-evidence";
import { ObservatoryShowcaseSection } from "@/components/views/app/landing/observatory-showcase";

export default function Page() {
  return (
    <div className="no-scrollbar min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PunchlineDiagnosis />
        <ObservatoryShowcaseSection />
        <PunchlineNormalization />
        <PunchlineEvidence />
      </main>
    </div>
  )
}
