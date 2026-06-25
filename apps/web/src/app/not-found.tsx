import Link from "next/link";
import { ArrowLeftIcon, HomeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function NotFound() {
  return (
    <div className="relative min-h-svh bg-[#f4fcef] text-[#161d16]">
      <Grid />
      <div className="relative mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center px-6 text-center">

        <BigNumerals />

        <Text as="h1" variant="h3" className="mt-10 max-w-md text-[#006020] font-bold text-2xl">
          Page introuvable
        </Text>
        <Text variant="muted" className="mt-2 max-w-sm text-[#3e4a3d]">
          Le lien que vous avez suivi est peut-être obsolète ou la page a été déplacée. Veuillez vérifier l'adresse URL ou retourner à l'accueil.
        </Text>

        <div className="mt-8 flex items-center gap-3">
          <Button asChild variant="outline" className="border-2 border-[#006020] text-[#006020] bg-[#f4fcef] hover:bg-[#dde5d9] transition-colors rounded-[0.5rem] h-10 px-4">
            <Link href="/dashboard">
              <ArrowLeftIcon className="size-4" />
              Retourner
            </Link>
          </Button>
          <Button asChild className="bg-[#00A040] hover:bg-[#006020] text-white border-none shadow-sm rounded-[0.5rem] transition-colors h-10 px-4">
            <Link href="/">
              <HomeIcon className="size-4 fill-current" />
              Accueil TAHAQAQ
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function BigNumerals() {
  return (
    <Text
      as="div"
      variant="h1"
      className="relative font-bold text-[clamp(8rem,22vw,16rem)] leading-none tracking-tighter"
    >
      <span className="bg-linear-to-b from-[#006020] to-[#00A040] bg-clip-text text-transparent text-9xl">
        404
      </span>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-2 h-1/2"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, color-mix(in srgb, #f4fcef 80%, transparent) 50%, transparent 100%)",
        }}
      />
    </Text>
  );
}

function Grid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage:
          "linear-gradient(to right, color-mix(in srgb, #006020 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, #006020 8%, transparent) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
      }}
    />
  );
}
