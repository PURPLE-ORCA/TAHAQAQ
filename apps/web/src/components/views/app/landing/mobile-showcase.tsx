import { Text } from "@/components/ui/text";
import { Clock, MapPin, MousePointerClick } from "lucide-react";
import Iphone15Pro from "@/components/ui/iphone15-pro";

export function MobileShowcaseSection() {
	return (
		<section id="mobile-showcase" className="mx-auto w-full max-w-6xl px-4 py-16 scroll-mt-14">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
				{/* Left side — Copy */}
				<div className="lg:col-span-5 flex flex-col justify-center space-y-6">
					<div className="space-y-3">
						<Text as="h2" variant="h2" className="font-semibold text-foreground leading-tight">
							Report From Anywhere. In Under 60 Seconds.
						</Text>
						<Text variant="muted" className="text-base text-muted-foreground leading-relaxed">
							Citizens snap photos, pin locations, rate service quality, and submit structured audits — all from their phone. Every report is GPS-verified and metadata-checked.
						</Text>
					</div>

					{/* 3 small stat chips in a row */}
					<div className="grid grid-cols-3 gap-3 md:gap-4 pt-2">
						{/* Chip 1 */}
						<div className="flex flex-col gap-1.5 p-3 rounded-xl border border-border/30 bg-card/50">
							<div className="flex items-center gap-1.5 text-primary">
								<Clock className="size-4 shrink-0" />
								<Text as="span" className="font-semibold text-sm sm:text-base text-foreground tracking-tight leading-none">
									60s
								</Text>
							</div>
							<Text variant="muted" className="text-[10px] sm:text-xs font-medium leading-none text-muted-foreground">
								Average Submit
							</Text>
						</div>

						{/* Chip 2 */}
						<div className="flex flex-col gap-1.5 p-3 rounded-xl border border-border/30 bg-card/50">
							<div className="flex items-center gap-1.5 text-primary">
								<MapPin className="size-4 shrink-0" />
								<Text as="span" className="font-semibold text-sm sm:text-base text-foreground tracking-tight leading-none">
									GPS
								</Text>
							</div>
							<Text variant="muted" className="text-[10px] sm:text-xs font-medium leading-none text-muted-foreground">
								Verified Location
							</Text>
						</div>

						{/* Chip 3 */}
						<div className="flex flex-col gap-1.5 p-3 rounded-xl border border-border/30 bg-card/50">
							<div className="flex items-center gap-1.5 text-primary">
								<MousePointerClick className="size-4 shrink-0" />
								<Text as="span" className="font-semibold text-sm sm:text-base text-foreground tracking-tight leading-none">
									3 taps
								</Text>
							</div>
							<Text variant="muted" className="text-[10px] sm:text-xs font-medium leading-none text-muted-foreground">
								To File
							</Text>
						</div>
					</div>
				</div>

				{/* Right side — Phone Mockup */}
				<div className="lg:col-span-7 flex justify-center items-center w-full">
					<Iphone15Pro
						width={300}
						height={670}
						videoSrc="https://ik.imagekit.io/purp1e770rca77/TAHAQAQ/mobileShowcase.mp4"
					/>
				</div>
			</div>
		</section>
	);
}
