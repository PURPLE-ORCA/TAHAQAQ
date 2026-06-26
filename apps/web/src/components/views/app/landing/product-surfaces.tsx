"use client";

import { Text } from "@/components/ui/text";
import { LayoutDashboard, Map, Edit3 } from "lucide-react";

interface SurfaceCardProps {
	icon: React.ReactNode;
	title: string;
	subtitle: string;
	description: string;
	placeholderLabel: string;
}

function SurfaceCard({ icon, title, subtitle, description, placeholderLabel }: SurfaceCardProps) {
	return (
		<div className="flex flex-col bg-card border border-border/30 rounded-2xl overflow-hidden shadow-xs hover:border-border/60 hover:shadow-md transition-all">
			{/* Content */}
			<div className="p-6 flex-1 flex flex-col gap-2">
				<div className="flex items-center gap-2">
					<div className="rounded-lg bg-primary/10 text-primary p-2">
						{icon}
					</div>
					<div>
						<Text as="h3" variant="h5" className="font-semibold text-foreground leading-none">
							{title}
						</Text>
						<span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mt-1 block">
							{subtitle}
						</span>
					</div>
				</div>
				<Text variant="muted" className="text-sm mt-2 leading-relaxed">
					{description}
				</Text>
			</div>

			{/* Neutral Screenshot Placeholder */}
			<div className="px-6 pb-6 mt-auto">
				<div className="aspect-video w-full rounded-xl border border-border bg-background/50 flex flex-col items-center justify-center p-4 relative overflow-hidden select-none">
					{/* Browser Chrome Header */}
					<div className="absolute top-0 inset-x-0 h-6 border-b border-border/40 bg-muted/30 px-3 flex items-center justify-between">
						<div className="flex gap-1">
							<div className="size-1.5 rounded-full bg-muted-foreground/35" />
							<div className="size-1.5 rounded-full bg-muted-foreground/35" />
							<div className="size-1.5 rounded-full bg-muted-foreground/35" />
						</div>
						<div className="h-3 w-32 rounded bg-muted/40" />
						<div className="size-2" />
					</div>
					
					{/* Empty abstract mock lines representing a layout */}
					<div className="w-full flex flex-col gap-2.5 pt-4">
						<div className="h-3 w-1/3 rounded bg-muted/50" />
						<div className="grid grid-cols-3 gap-2">
							<div className="h-8 rounded bg-muted/30 border border-border/20" />
							<div className="h-8 rounded bg-muted/30 border border-border/20" />
							<div className="h-8 rounded bg-muted/30 border border-border/20" />
						</div>
						<div className="h-10 rounded bg-muted/20 border border-border/20" />
					</div>

					<div className="absolute inset-0 bg-background/60 backdrop-blur-xs flex items-center justify-center">
						<div className="text-center px-4">
							<Text as="span" className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
								{placeholderLabel}
							</Text>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export function ProductSurfacesSection() {
	const surfaces = [
		{
			icon: <LayoutDashboard className="size-5" />,
			title: "Civic Dashboard",
			subtitle: "PERFORMANCE OVERVIEW",
			description: "Track performance indices, regional averages, compliance rates, and active alert frequencies across all public sectors on a national map grid.",
			placeholderLabel: "Dashboard Screenshot Placeholder",
		},
		{
			icon: <Map className="size-5" />,
			title: "Interactive Heatmap",
			subtitle: "GEOSPATIAL WATCHLIST",
			description: "Investigate localized service issues with a live heatmap. Filter by verification status, complaints count, or category criteria in real time.",
			placeholderLabel: "Map Interface Screenshot Placeholder",
		},
		{
			icon: <Edit3 className="size-5" />,
			title: "Audit Submission Flow",
			subtitle: "EVIDENCE COLLECTION",
			description: "Step-by-step reporting wizard requiring specific document scans, rating breakdowns, and geotag proof to validate integrity claims.",
			placeholderLabel: "Audit Wizard Screenshot Placeholder",
		},
	];

	return (
		<section id="observatory" className="mx-auto w-full max-w-5xl px-4 py-16 border-t border-border/20 scroll-mt-14">
			<div className="text-center mb-12 max-w-xl mx-auto space-y-2">
				<Text variant="xs" className="text-primary font-bold tracking-widest">
					OBSERVATORY SURFACES
				</Text>
				<Text as="h2" variant="h3" className="font-semibold text-foreground">
					Three Interfaces for Civic Oversight
				</Text>
				<Text variant="muted">
					Explore live data, search public establishments, or submit structured evidence directly.
				</Text>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{surfaces.map((surface, idx) => (
					<SurfaceCard
						key={idx}
						icon={surface.icon}
						title={surface.title}
						subtitle={surface.subtitle}
						description={surface.description}
						placeholderLabel={surface.placeholderLabel}
					/>
				))}
			</div>
		</section>
	);
}
