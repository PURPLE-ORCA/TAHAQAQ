"use client";

import { Text } from "@/components/ui/text";
import { ClipboardList, CheckCircle2, Combine, AlertOctagon, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowStepProps {
	icon: React.ReactNode;
	stepNum: string;
	title: string;
	description: string;
}

function FlowStep({ icon, stepNum, title, description }: FlowStepProps) {
	return (
		<div className="flex gap-4 items-start">
			<div className="flex flex-col items-center">
				<div className="rounded-full bg-primary/10 border border-primary/20 text-primary p-3 shadow-xs">
					{icon}
				</div>
				<div className="h-full w-px bg-border/40 mt-3 min-h-[40px] group-last:hidden" />
			</div>
			<div className="space-y-1.5 pb-6">
				<div className="flex items-center gap-2">
					<span className="font-mono text-xs font-bold text-primary/80 bg-primary/5 border border-primary/10 rounded px-1.5 py-0.5">
						STEP {stepNum}
					</span>
					<Text as="h3" variant="h5" className="font-semibold text-foreground">
						{title}
					</Text>
				</div>
				<Text variant="muted" className="text-sm leading-relaxed max-w-md">
					{description}
				</Text>
			</div>
		</div>
	);
}

export function AuditFlowSection() {
	const steps = [
		{
			icon: <ClipboardList className="size-5" />,
			stepNum: "01",
			title: "Citizen Audit Submission",
			description: "Citizens compile structured observations of public establishments, attaching geotagged media, receipt copies, and standardized metrics.",
		},
		{
			icon: <CheckCircle2 className="size-5" />,
			stepNum: "02",
			title: "Evidence Verification",
			description: "Reports are processed through automatic metadata verification and peer review to filter noise and validate factual consistency.",
		},
		{
			icon: <Combine className="size-5" />,
			stepNum: "03",
			title: "Regional Aggregation",
			description: "Validated audits are grouped by city, sector, and category. Performance and integrity indices are recalculated hourly.",
		},
		{
			icon: <AlertOctagon className="size-5" />,
			stepNum: "04",
			title: "System Alerts",
			description: "Severe rating drops or verified integrity complaints trigger automatic watchlists and national reporting escalations.",
		},
	];

	return (
		<section id="audit-flow" className="mx-auto w-full max-w-5xl px-4 py-16 border-t border-border/20 scroll-mt-14">
			<div className="text-center mb-12 max-w-xl mx-auto space-y-2">
				<Text variant="xs" className="text-primary font-bold tracking-widest">
					VERIFICATION METHODOLOGY
				</Text>
				<Text as="h2" variant="h3" className="font-semibold text-foreground">
					The Evidence Lifecycle
				</Text>
				<Text variant="muted">
					How reports transform from individual observations into audited national data points.
				</Text>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				{/* Step Timeline */}
				<div className="flex flex-col">
					{steps.map((step, idx) => (
						<div key={idx} className={cn("group", idx === steps.length - 1 && "last-step")}>
							<FlowStep
								icon={step.icon}
								stepNum={step.stepNum}
								title={step.title}
								description={step.description}
							/>
						</div>
					))}
				</div>

				{/* Video Placeholder Panel */}
				<div className="relative group">
					<div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity" />
					<div className="relative aspect-video w-full rounded-2xl border border-border bg-card shadow-lg overflow-hidden flex flex-col items-center justify-center p-6 text-center transition-all hover:border-border/80">
						{/* Mock interface overlays */}
						<div className="absolute top-3 left-4 flex gap-1.5 items-center select-none pointer-events-none">
							<div className="size-2 bg-red-500/60 rounded-full animate-pulse" />
							<span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
								Methodology Video
							</span>
						</div>
						
						{/* Play Button Icon */}
						<button 
							aria-label="Play methodology walkthrough video"
							className="rounded-full bg-primary text-primary-foreground p-4 shadow-md hover:scale-105 hover:bg-primary/95 transition-all mb-4"
						>
							<Play className="size-6 fill-current ml-0.5" />
						</button>
						
						<div className="space-y-1">
							<Text as="span" className="font-semibold text-foreground text-sm">
								Video Walkthrough Placeholder
							</Text>
							<Text variant="muted" className="text-xs max-w-xs mx-auto">
								A 2-minute overview detailing evidence guidelines, validation thresholds, and audit standards.
							</Text>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
