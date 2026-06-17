import Link from "next/link";
import { ArrowLeftIcon, HomeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function NotFound() {
  return (
    <div className="relative min-h-svh">      <div className="relative mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center px-6 text-center">

        <BigNumerals />

        <Text as="h1" variant="h3" className="mt-10 max-w-md">
          We can't find that page.
        </Text>
        <Text variant="muted" className="mt-2 max-w-sm ">
          The link may be old, or the page may have moved. Check URL or head back to somewhere you know.
        </Text>

        <div className="mt-8 flex items-center gap-2">
          <Button asChild variant="outline" size="default">
            <Link href="/dashboard">
              <ArrowLeftIcon />
              Go back
            </Link>
          </Button>
          <Button asChild size="default">
            <Link href="/">
              <HomeIcon />
              Take me home
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
      <span className="bg-linear-to-b from-foreground to-primary bg-clip-text text-transparent text-9xl">
        404
      </span>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-2 h-1/2"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, color-mix(in srgb, var(--background) 80%, transparent) 50%, transparent 100%)",
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
          "linear-gradient(to right, color-mix(in srgb, var(--foreground) 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 8%, transparent) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
      }}
    />
  );
}
