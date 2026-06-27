"use client";

import { useState, useEffect, useRef } from "react";
import { Text } from "@/components/ui/text";
import { 
	CheckCircle2, 
	MapPin, 
	Clock, 
	ShieldCheck, 
	Users, 
	Activity, 
	GraduationCap, 
	Trash2, 
	Zap, 
	Droplet
} from "lucide-react";
import { cn } from "@/lib/utils";
import Iphone15Pro from "@/components/ui/iphone15-pro";

// --- FadeInCard Component ---
interface FadeInCardProps {
	children: React.ReactNode;
	className?: string;
}

function FadeInCard({ children, className }: FadeInCardProps) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div
			ref={ref}
			className={cn(
				"transition-all duration-1000 ease-out transform w-full flex justify-center",
				isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95",
				className
			)}
		>
			{children}
		</div>
	);
}

// --- Main AuditFlowSection Component ---
export function AuditFlowSection() {
	const [activeStep, setActiveStep] = useState(0);
	const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

	const steps = [
		{
			title: "A citizen takes a photo",
			description: "They open the app, snap a photo of a hospital wait time, a school report card, or a municipal receipt. The app captures location, time, and device metadata automatically.",
		},
		{
			title: "The system verifies it",
			description: "GPS coordinates are cross-referenced. Image metadata is checked for tampering. Peer reviewers in the same area confirm or dispute the observation.",
		},
		{
			title: "It joins thousands of others",
			description: "Validated reports are grouped by city, sector, and category. Performance and integrity indices are recalculated hourly across every monitored region.",
		},
		{
			title: "The whole country sees it",
			description: "Severe drops in ratings or verified integrity complaints trigger automatic watchlists. National dashboards update in real time.",
		},
	];

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "-40% 0px -40% 0px", // focus on the middle portion of the screen
			threshold: 0,
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = sectionRefs.current.findIndex((el) => el === entry.target);
					if (index !== -1) {
						setActiveStep(index);
					}
				}
			});
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);

		sectionRefs.current.forEach((refEl) => {
			if (refEl) observer.observe(refEl);
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	const scrollToSection = (idx: number) => {
		const element = sectionRefs.current[idx];
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	};

	const renderVisualCard = (idx: number) => {
		switch (idx) {
			case 0:
				return (
					<div className="relative w-[300px] h-[670px] mx-auto flex items-center justify-center">
						<Iphone15Pro width={300} height={670} src="/auditDone.png" />
						
						{/* Screen Overlay Container */}
						<div 
							className="absolute pointer-events-none overflow-hidden rounded-[64px] flex flex-col justify-between p-8"
							style={{ left: "4.9%", right: "5.1%", top: "2.2%", bottom: "2.2%" }}
						>
							{/* Top Header/REC Badge */}
							<div className="flex justify-between items-center text-[20px] font-mono text-white/80 drop-shadow-sm select-none z-10 w-full pt-12">
								<span>TAHAQAQ Mobile</span>
								<span className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-lg">
									<span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
									rec
								</span>
							</div>

							{/* Camera Viewfinder Box */}
							<div className="border border-white/20 rounded-2xl flex-1 my-8 flex flex-col justify-between p-4">
								<div className="flex justify-between">
									<div className="w-8 h-8 border-t-4 border-l-4 border-white/60" />
									<div className="w-8 h-8 border-t-4 border-r-4 border-white/60" />
								</div>
								
								<div className="self-center flex flex-col items-center">
									<div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center bg-white/10 backdrop-blur-xs">
										<div className="w-18 h-18 rounded-full bg-white" />
									</div>
									<span className="text-[20px] text-white/90 font-mono mt-3 drop-shadow-md bg-black/50 px-3 py-1 rounded-lg">
										{`snap photo`}
									</span>
								</div>
								
								<div className="flex justify-between">
									<div className="w-8 h-8 border-b-4 border-l-4 border-white/60" />
									<div className="w-8 h-8 border-b-4 border-r-4 border-white/60" />
								</div>
							</div>
						</div>
					</div>
				);
			case 1:
				return (
					<div className="relative w-[300px] h-[670px] mx-auto flex items-center justify-center">
						<Iphone15Pro width={300} height={670} src="/mobileHomePage.png" className="opacity-80" />
						
						{/* Green verification overlay centered over the phone */}
						<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
							<div className="bg-emerald-950/95 border border-emerald-500/40 rounded-3xl p-8 flex flex-col items-center shadow-2xl backdrop-blur-md max-w-[400px] text-center">
								<CheckCircle2 className="w-20 h-20 text-emerald-400 animate-pulse mb-4" />
								<span className="text-xl font-mono font-bold text-emerald-400 tracking-wider">
									{`evidence verified`}
								</span>
								<span className="text-[18px] font-mono text-emerald-400/80 mt-2">
									{`integrity: 99.8% pass`}
								</span>
							</div>
						</div>

						{/* Floating Badges */}
						<div className="absolute inset-0 pointer-events-none z-30">
							{/* GPS Badge */}
							<div className="absolute top-24 -left-20 bg-slate-900/95 border border-emerald-500/30 text-emerald-400 text-[18px] font-mono py-2 px-4 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-2 whitespace-nowrap">
								<MapPin className="w-6 h-6 flex-shrink-0" />
								<span>GPS: 33.5731° N, 7.5898° W</span>
							</div>

							{/* Metadata Badge */}
							<div className="absolute top-1/3 -right-24 bg-slate-900/95 border border-emerald-500/30 text-emerald-400 text-[18px] font-mono py-2 px-4 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-2 whitespace-nowrap">
								<ShieldCheck className="w-6 h-6 flex-shrink-0" />
								<span>METADATA: UNMODIFIED</span>
							</div>

							{/* Peer Review Badge */}
							<div className="absolute bottom-[35%] -left-16 bg-slate-900/95 border border-emerald-500/30 text-emerald-400 text-[18px] font-mono py-2 px-4 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-2 whitespace-nowrap">
								<Users className="w-6 h-6 flex-shrink-0" />
								<span>PEER: 12/12 APPROVED</span>
							</div>

							{/* Timestamp Badge */}
							<div className="absolute bottom-32 -right-16 bg-slate-900/95 border border-emerald-500/30 text-emerald-400 text-[18px] font-mono py-2 px-4 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-2 whitespace-nowrap">
								<Clock className="w-6 h-6 flex-shrink-0" />
								<span>TIME: 14:32:05 UTC</span>
							</div>
						</div>
					</div>
				);
			case 2:
				return (
					<div className="relative w-[300px] h-[670px] mx-auto flex items-center justify-center">
						<Iphone15Pro width={300} height={670} src="/mobileHomePage.png" />
						
						{/* Screen Overlay Container */}
						<div 
							className="absolute overflow-hidden rounded-[64px] bg-white/95 flex flex-col justify-between p-6 text-on-surface border border-outline-variant/40 shadow-lg"
							style={{ 
								left: "4.9%", 
								right: "5.1%", 
								top: "2.2%", 
								bottom: "2.2%",
								"--primary": "#006b28",
								"--on-surface": "#161d16",
								"--on-surface-variant": "#5c635c",
								"--primary-container": "#008735",
								"--outline-variant": "#bdcab9",
								"--surface-container-low": "#f4fcef",
								"--surface-container": "#eef6ea",
								"--secondary-container": "#dde5d9",
							} as React.CSSProperties}
						>
							{/* Header */}
							<div className="pt-12 pb-4 border-b border-outline-variant/30 flex flex-col items-center">
								<span className="text-[20px] font-mono font-bold tracking-widest text-primary">
									{`citizen feed`}
								</span>
								<span className="text-[16px] font-mono text-on-surface-variant">
									{`real-time updates`}
								</span>
							</div>

							{/* Feed List */}
							<div className="flex-1 my-6 flex flex-col gap-3 overflow-hidden justify-center">
								{[
									{ icon: <Activity className="w-6 h-6 text-rose-400" />, city: "Casablanca", status: "Verified", color: "text-primary" },
									{ icon: <GraduationCap className="w-6 h-6 text-blue-400" />, city: "Rabat", status: "Verified", color: "text-primary" },
									{ icon: <Droplet className="w-6 h-6 text-sky-400" />, city: "Marrakech", status: "Verified", color: "text-primary" },
									{ icon: <Trash2 className="w-6 h-6 text-primary" />, city: "Fes", status: "Verified", color: "text-primary" },
									{ icon: <Zap className="w-6 h-6 text-amber-600" />, city: "Tangier", status: "Flagged", color: "text-amber-700" },
								].map((item, idx) => (
									<div key={idx} className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-4 flex items-center justify-between">
										<div className="flex items-center gap-4">
											<div className="bg-surface-container p-2 rounded-lg">
												{item.icon}
											</div>
											<span className="text-[20px] font-mono font-medium truncate max-w-[160px] text-on-surface">
												{item.city}
											</span>
										</div>
										<span className={cn("text-[18px] font-mono font-bold px-3 py-1 rounded-lg bg-secondary-container/30 border border-secondary-container/50", item.color)}>
											{item.status}
										</span>
									</div>
								))}
							</div>

							{/* Bottom Notification Bar */}
							<div className="bg-primary-container/15 border border-primary/20 rounded-2xl p-4 flex items-center gap-4 mb-2 shadow-lg">
								<CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
								<span className="text-[18px] font-mono text-on-surface leading-tight">
									Your report joined 12,847 active audits
								</span>
							</div>
						</div>
					</div>
				);
			case 3:
				return (
					<div className="relative w-[300px] h-[670px] mx-auto flex items-center justify-center">
						<Iphone15Pro width={300} height={670} src="/mobileHomePage.png" />
						
						{/* Screen Overlay Container */}
						<div 
							className="absolute overflow-hidden rounded-[64px] bg-white/95 flex flex-col justify-between p-6 text-on-surface border border-outline-variant/40 shadow-lg"
							style={{ 
								left: "4.9%", 
								right: "5.1%", 
								top: "2.2%", 
								bottom: "2.2%",
								"--primary": "#006b28",
								"--on-surface": "#161d16",
								"--on-surface-variant": "#5c635c",
								"--primary-container": "#008735",
								"--error": "#ba1a1a",
								"--error-container": "#ffdad6",
								"--on-error": "#fff",
								"--outline-variant": "#bdcab9",
								"--surface-container-low": "#f4fcef",
								"--surface-container": "#eef6ea",
								"--secondary-container": "#dde5d9",
							} as React.CSSProperties}
						>
							{/* Top Header */}
							<div className="pt-12 pb-4 border-b border-outline-variant/30 flex flex-col items-center">
								<span className="text-[16px] font-mono text-on-surface-variant">
									{`national alerts`}
								</span>
							</div>

							{/* Alert Banner / Box */}
							<div className="flex-1 my-8 flex flex-col justify-center gap-6">
								<div className="bg-error-container/30 border border-error/20 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
									<div className="bg-error/10 border border-error/30 rounded-lg px-4 py-2 text-center flex items-center justify-center gap-3 animate-pulse">
										<span className="text-error text-[20px] font-bold font-mono">
											{`integrity watch`}
										</span>
									</div>

									<div className="space-y-3">
										<div className="text-[20px] font-bold font-mono text-on-surface leading-tight">
											{"Tangier school district — Rating dropped 12% this week"}
										</div>
										<div className="text-[18px] font-mono text-on-surface-variant flex items-center gap-2">
											<span className="w-2 h-2 rounded-full bg-error/60" />
											{"347 citizens affected"}
										</div>
										<div className="text-[18px] font-mono text-on-surface-variant flex items-center gap-2">
											<span className="w-2 h-2 rounded-full bg-error/60 animate-pulse" />
											{"Auto-flagged for review"}
										</div>
									</div>
								</div>
							</div>

							{/* VIEW DETAILS Button */}
							<button className="w-full bg-error hover:bg-error/90 text-on-error text-[20px] font-mono font-bold py-4 rounded-2xl transition-colors border border-error/30 shadow-lg mb-4">
								{`view details`}
							</button>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<section id="audit-flow" className="mx-auto w-full max-w-7xl px-4 py-24 border-t border-border/20 scroll-mt-14 overflow-visible">
			{/* Mobile Only Header */}
			<div className="max-w-xl mb-12 md:hidden">
				<Text as="h2" variant="h2" className="text-2xl font-extrabold text-foreground tracking-tight mt-1">
					The Evidence Lifecycle
				</Text>
				<Text variant="muted" className="text-sm mt-2">
					How reports transform from individual observations into audited national data points.
				</Text>
			</div>

			{/* Column Layout */}
			<div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
				{/* Left Side: Sticky Text Blocks (Desktop only) */}
				<div className="hidden md:block md:sticky md:top-[20%] space-y-8 self-start pr-8">
					<div className="space-y-3">
						<Text variant="xs" className="text-primary font-bold tracking-widest uppercase">
							VERIFICATION METHODOLOGY
						</Text>
						<Text as="h2" variant="h2" className="text-3xl font-extrabold text-foreground tracking-tight">
							The Evidence Lifecycle
						</Text>
						<Text variant="muted" className="text-sm">
							How reports transform from individual observations into audited national data points.
						</Text>
					</div>

					<div className="relative border-l-2 border-muted/20 pl-6 space-y-8">
						{/* Progress tracking line */}
						<div
							className="absolute left-[-2px] top-0 w-[2px] bg-primary transition-all duration-500 ease-out"
							style={{
								height: `${((activeStep + 1) / steps.length) * 100}%`
							}}
						/>
						
						{steps.map((step, idx) => (
							<button
								key={idx}
								onClick={() => scrollToSection(idx)}
								className={cn(
									"w-full text-left transition-all duration-300 focus:outline-none block",
									activeStep === idx ? "opacity-100" : "opacity-30 hover:opacity-60"
								)}
							>
								<div className="flex items-center gap-3 mb-1">
									<span className={cn(
										"font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border transition-colors",
										activeStep === idx 
											? "text-primary bg-primary/10 border-primary/20" 
											: "text-muted-foreground bg-muted/10 border-muted-foreground/15"
									)}>
										0{idx + 1}
									</span>
									<Text as="h3" variant="h5" className={cn(
										"font-bold text-sm transition-colors",
										activeStep === idx ? "text-foreground" : "text-muted-foreground"
									)}>
										{step.title}
									</Text>
								</div>
								<Text variant="muted" className="text-xs leading-relaxed max-w-sm">
									{step.description}
								</Text>
							</button>
						))}
					</div>
				</div>

				{/* Right Side: Visual Cards & Mobile Text Blocks */}
				<div className="space-y-24 md:space-y-0">
					{steps.map((step, idx) => (
						<div
							key={idx}
							ref={(el) => { sectionRefs.current[idx] = el; }}
							className="min-h-[50vh] md:min-h-screen flex flex-col justify-center py-12 md:py-0 scroll-mt-24"
						>
							{/* Mobile Only Step Text */}
							<div className="block md:hidden mb-6 space-y-2">
								<div className="flex items-center gap-2">
									<span className="font-mono text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
										0{idx + 1}
									</span>
									<Text as="h3" variant="h5" className="font-bold text-foreground">
										{step.title}
									</Text>
								</div>
								<Text variant="muted" className="text-sm leading-relaxed">
									{step.description}
								</Text>
							</div>

							{/* Visual Card Wrapper with Fade-in Animation */}
							<FadeInCard>
								{renderVisualCard(idx)}
							</FadeInCard>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
