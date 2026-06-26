"use client";

import { Text } from "@/components/ui/text";
import { Building2, ShieldCheck, FileSpreadsheet, Map } from "lucide-react";

interface ProofItemProps {
	icon: React.ReactNode;
	value: string;
	label: string;
	description: string;
}

function ProofItem({ icon, value, label, description }: ProofItemProps) {
	return (
		<div className="flex flex-col items-center text-center p-6 bg-card border border-border/30 rounded-2xl shadow-xs hover:border-border/60 transition-all">
			<div className="rounded-full bg-primary/10 p-3 text-primary mb-4">
				{icon}
			</div>
			<Text as="span" className="text-3xl font-extrabold text-foreground tracking-tight font-mono">
				{value}
			</Text>
			<Text as="h3" variant="h5" className="text-foreground mt-2 font-semibold">
				{label}
			</Text>
			<Text variant="muted" className="text-xs mt-1 max-w-[200px]">
				{description}
			</Text>
		</div>
	);
}

export function ProofStrip() {
	const stats = [
		{
			icon: <Building2 className="size-6" />,
			value: "420+",
			label: "Establishments Monitored",
			description: "Active monitoring of administrative, educational, and public service centers.",
		},
		{
			icon: <FileSpreadsheet className="size-6" />,
			value: "12,800+",
			label: "Audits Registered",
			description: "Structured performance reports and document verifications filed.",
		},
		{
			icon: <ShieldCheck className="size-6" />,
			value: "87.4%",
			label: "Verification Index",
			description: "Average metadata validity and evidence score across all reports.",
		},
		{
			icon: <Map className="size-6" />,
			value: "14",
			label: "Regions Covered",
			description: "Continuous observation across every prefecture in the Kingdom.",
		},
	];

	return (
		<section className="mx-auto w-full max-w-5xl px-4 py-12 border-t border-border/20">
			<div className="text-center mb-10 max-w-xl mx-auto space-y-2">
				<Text variant="xs" className="text-primary font-bold tracking-widest">
					OBSERVATORY METRICS
				</Text>
				<Text as="h2" variant="h3" className="font-semibold text-foreground">
					Verified Civic Evidence at Scale
				</Text>
				<Text variant="muted">
					Neutral tracking built on structural documentation, not subjective opinions.
				</Text>
			</div>
			
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{stats.map((stat, i) => (
					<ProofItem
						key={i}
						icon={stat.icon}
						value={stat.value}
						label={stat.label}
						description={stat.description}
					/>
				))}
			</div>
		</section>
	);
}
