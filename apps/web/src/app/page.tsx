import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/views/app/landing/hero";
import { LogosSection } from "@/components/views/app/landing/logos-section";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogosSection />
      </main>
    </>
  )
}
