import { Text } from "@/components/ui/text";
import { MapPin, Shield, AlertTriangle } from "lucide-react";

export function ObservatoryShowcaseSection() {
	return (
		<section id="observatory-showcase" className="mx-auto w-full max-w-6xl px-4 py-16 scroll-mt-14">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
				{/* Left side — Video Mockup */}
				<div className="lg:col-span-7 w-full">
					<div className="relative rounded-2xl border border-border/30 bg-card shadow-lg overflow-hidden flex flex-col">
						{/* Browser Chrome Header */}
						<div className="flex items-center px-4 py-3 border-b border-border/30 bg-muted/20 gap-3">
							{/* 3 fake dots */}
							<div className="flex gap-1.5 shrink-0">
								<div className="size-2.5 rounded-full bg-red-500/60" />
								<div className="size-2.5 rounded-full bg-yellow-500/60" />
								<div className="size-2.5 rounded-full bg-green-500/60" />
							</div>
							{/* fake URL bar */}
							<div className="flex-1 max-w-xs md:max-w-md mx-auto h-6 rounded-md bg-background/50 border border-border/20 flex items-center justify-center px-3">
								<Text as="span" className="text-[10px] text-muted-foreground/60 font-mono truncate select-none">
									tahaqaq.ma/observatory
								</Text>
							</div>
							<div className="w-12 shrink-0 hidden sm:block" />
						</div>
						{/* Video Container */}
						<div className="relative aspect-video w-full overflow-hidden bg-background">
							<video
								src="https://ik.imagekit.io/purp1e770rca77/TAHAQAQ/dashboardShowcase-1.2x.mp4"
								autoPlay
								loop
								muted
								playsInline
								className="w-full h-full object-cover"
							/>
							{/* Subtle gradient overlay at the bottom of the video */}
							<div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
						</div>
					</div>
				</div>

				{/* Right side — Copy */}
				<div className="lg:col-span-5 flex flex-col justify-center space-y-6">
					<div className="space-y-3">
						<Text variant="xs" className="text-primary font-bold tracking-widest uppercase">
							THE OBSERVATORY
						</Text>
						<Text as="h2" variant="h2" className="font-semibold text-foreground leading-tight">
							See Every Establishment. In Real Time.
						</Text>
						<Text variant="muted" className="text-base leading-relaxed">
							The INPPLC monitors 420+ public service establishments across 14 regions. Alerts, audit scores, and compliance status — all on one live map.
						</Text>
					</div>

					{/* 3 small stat chips in a row */}
					<div className="grid grid-cols-3 gap-3 md:gap-4 pt-2">
						{/* Chip 1 */}
						<div className="flex flex-col gap-1.5 p-3 rounded-xl border border-border/30 bg-card/50">
							<div className="flex items-center gap-1.5 text-primary">
								<MapPin className="size-4 shrink-0" />
								<Text as="span" className="font-semibold text-sm sm:text-base text-foreground tracking-tight leading-none">
									420+
								</Text>
							</div>
							<Text variant="muted" className="text-[10px] sm:text-xs font-medium leading-none">
								Establishments
							</Text>
						</div>

						{/* Chip 2 */}
						<div className="flex flex-col gap-1.5 p-3 rounded-xl border border-border/30 bg-card/50">
							<div className="flex items-center gap-1.5 text-primary">
								<Shield className="size-4 shrink-0" />
								<Text as="span" className="font-semibold text-sm sm:text-base text-foreground tracking-tight leading-none">
									87.4%
								</Text>
							</div>
							<Text variant="muted" className="text-[10px] sm:text-xs font-medium leading-none">
								Verification
							</Text>
						</div>

						{/* Chip 3 */}
						<div className="flex flex-col gap-1.5 p-3 rounded-xl border border-border/30 bg-card/50">
							<div className="flex items-center gap-1.5 text-primary">
								<AlertTriangle className="size-4 shrink-0" />
								<Text as="span" className="font-semibold text-sm sm:text-base text-foreground tracking-tight leading-none">
									Real-time
								</Text>
							</div>
							<Text variant="muted" className="text-[10px] sm:text-xs font-medium leading-none">
								Alerts
							</Text>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
