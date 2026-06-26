"use client";

import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Fingerprint, Eye, ArrowRight } from "lucide-react";

export function TrustSection() {
	return (
		<section id="trust" className="mx-auto w-full max-w-5xl px-4 py-16 border-t border-border/20 scroll-mt-14">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				{/* Trust Copy and Principles */}
				<div className="space-y-6">
					<div className="space-y-2">
						<Text variant="xs" className="text-primary font-bold tracking-widest">
							CIVIC TRUST & MISSION
						</Text>
						<Text as="h2" variant="h3" className="font-semibold text-foreground">
							Securing Truth, Restoring Confidence
						</Text>
						<Text variant="muted" className="leading-relaxed">
							TAHAQAQ operates as an independent node for objective verification. By establishing a public record of verified citizen evidence, we encourage performance excellence in all Moroccan establishments.
						</Text>
					</div>

					<div className="space-y-4">
						<div className="flex gap-3">
							<div className="rounded-lg bg-primary/10 text-primary p-2 h-fit">
								<Eye className="size-5" />
							</div>
							<div>
								<Text as="h4" className="font-semibold text-foreground text-sm">
									Watchful Monitoring
								</Text>
								<Text variant="muted" className="text-xs mt-0.5 leading-relaxed">
									Continuous surveillance of facility operations, queues, and integrity reports to safeguard community access.
								</Text>
							</div>
						</div>

						<div className="flex gap-3">
							<div className="rounded-lg bg-primary/10 text-primary p-2 h-fit">
								<Fingerprint className="size-5" />
							</div>
							<div>
								<Text as="h4" className="font-semibold text-foreground text-sm">
									Cryptographic Traceability
								</Text>
								<Text variant="muted" className="text-xs mt-0.5 leading-relaxed">
									Every audit retains a secure metadata trace to verify location coordinates and prevent spoofed submissions.
								</Text>
							</div>
						</div>

						<div className="flex gap-3">
							<div className="rounded-lg bg-primary/10 text-primary p-2 h-fit">
								<ShieldAlert className="size-5" />
							</div>
							<div>
								<Text as="h4" className="font-semibold text-foreground text-sm">
									Accountability Enforcement
								</Text>
								<Text variant="muted" className="text-xs mt-0.5 leading-relaxed">
									Consistent low ratings and verified violations are compiled into quarterly civic reports for municipal reviews.
								</Text>
							</div>
						</div>
					</div>
				</div>

				{/* Watchful Mascot / Guardian Representation */}
				<div className="flex flex-col items-center justify-center p-8 bg-card border border-border/30 rounded-2xl relative overflow-hidden shadow-xs">
					{/* Watchful eye/shield graphical shape representation (watchful/trustworthy) */}
					<div className="absolute top-0 right-0 -mr-8 -mt-8 size-32 rounded-full bg-primary/5 blur-2xl" />
					
					{/* Sentinel Visual */}
					<div className="relative size-32 rounded-full border border-primary/20 bg-background flex items-center justify-center shadow-inner mb-6">
						<div className="absolute inset-2 rounded-full border border-dashed border-primary/30 animate-spin [animation-duration:60s]" />
						<div className="absolute inset-6 rounded-full bg-primary/10 flex items-center justify-center">
							{/* Eye-like geometric watchfulness icon overlaying shield */}
							<div className="size-10 rounded-full border-2 border-primary bg-background flex items-center justify-center shadow-xs">
								<div className="size-4 rounded-full bg-primary animate-pulse" />
							</div>
						</div>
					</div>

					<Text as="h3" variant="h5" className="font-bold text-foreground tracking-tight text-center">
						The Civic Guardian Node
					</Text>
					<Text variant="muted" className="text-xs text-center mt-1.5 max-w-xs leading-relaxed">
						Our decentralized verification engine continuously watches, reviews, and validates reports to protect system-wide data integrity.
					</Text>
				</div>
			</div>

			{/* Final CTA Strip */}
			<div className="mt-16 p-8 md:p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
				<div className="absolute right-0 top-0 -mr-16 -mt-16 size-48 rounded-full bg-primary/5 blur-3xl" />
				<div className="space-y-2 max-w-xl text-center md:text-left">
					<Text as="h3" variant="h3" className="font-bold text-foreground tracking-tight">
						Ready to contribute to national transparency?
					</Text>
					<Text variant="muted" className="text-sm">
						Learn how our decentralized verification engine compiles reports, verifies audits, and protects system-wide data integrity.
					</Text>
				</div>
				<div className="flex shrink-0 flex-wrap gap-3">
					<Button asChild size="lg" className="bg-primary hover:bg-primary/95 text-primary-foreground font-semibold rounded-[0.5rem] px-6 h-11">
						<a href="#observatory" className="flex items-center gap-2">
							View Observatory
							<ArrowRight className="size-4" />
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}
