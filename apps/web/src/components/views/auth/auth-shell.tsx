"use client";

import { createContext, useContext, useRef } from "react";
import type { ReactNode, RefObject } from "react";
import { ParticleField, bumpParticleTypingImpulse, pulseParticleSubmitImpulse } from "@/components/ui/particle-field";
import { Text } from "@/components/ui/text";

type ImpulseRef = RefObject<number>;
const TypingImpulseContext = createContext<ImpulseRef | null>(null);

export function useAuthTypingImpulse(): ImpulseRef {
  const ctx = useContext(TypingImpulseContext);
  if (!ctx) throw new Error("useAuthTypingImpulse outside <AuthShell>");
  return ctx;
}

export function AuthShell({ children }: { children: ReactNode }) {
  const typingImpulseRef = useRef(0);
  
  return (
    <TypingImpulseContext.Provider value={typingImpulseRef}>
      <div className="flex min-h-svh w-full gap-6">
        {/* Left side - Particle Field */}
        <div className="relative hidden w-1/2 overflow-hidden bg-background lg:block">
          <ParticleField
            src="/orca-logs.png"
            sampleStep={3}
            threshold={34}
            dotSize={1.2}
            renderScale={1}
            align="center"
            typingImpulseRef={typingImpulseRef}
            adaptToTheme={false}
            color="oklch(0.496 0.265 301.924 / 0.92)"
            className="absolute inset-0"
          />
          
          {/* Vignette overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 600px at 50% 50%, transparent 45%, color-mix(in srgb, var(--background) 88%, transparent) 92%)",
            }}
          />
          
          {/* Content overlay */}
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-12">
            <div className="pointer-events-auto flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
              <Text className="font-mono tracking-[0.2em]" variant="small">
                Purple Orca
              </Text>
            </div>

            <div className="max-w-md space-y-4">
              <Text className="font-mono uppercase tracking-[0.3em]" variant="xs">
                Sign-in design
              </Text>
              <Text as="h2" variant="h3">
                Split layout with a particle field on the left and a single centered form on the right.
              </Text>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex w-full items-center justify-center bg-background p-6 lg:w-1/2">
          {children}
        </div>
      </div>
    </TypingImpulseContext.Provider>
  );
}

export { bumpParticleTypingImpulse, pulseParticleSubmitImpulse };
