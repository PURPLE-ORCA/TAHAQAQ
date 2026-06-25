import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/views/app/landing/hero";
import { LogosSection } from "@/components/views/app/landing/logos-section";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f4fcef] text-[#161d16]">
      <Header />
      <main>
        <HeroSection />
        <LogosSection />
      </main>
    </div>
  )
}
