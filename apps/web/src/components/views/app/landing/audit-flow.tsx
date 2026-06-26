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
					<div className="relative w-[260px] h-[530px] mx-auto flex items-center justify-center">
						<Iphone15Pro width={260} height={530} src="/mobileHomePage.png" />
						
						{/* Screen Overlay Container */}
						<div 
							className="absolute pointer-events-none overflow-hidden rounded-[32px] flex flex-col justify-between p-4"
							style={{ left: "4.9%", right: "5.1%", top: "2.2%", bottom: "2.2%" }}
						>
							{/* Top Header/REC Badge */}
							<div className="flex justify-between items-center text-[10px] font-mono text-white/80 drop-shadow-sm select-none z-10 w-full pt-6">
								<span>TAHAQAQ Mobile</span>
								<span className="flex items-center gap-1 bg-black/40 px-1.5 py-0.5 rounded">
									<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
									REC
								</span>
							</div>

							{/* Camera Viewfinder Box */}
							<div className="border border-white/20 rounded-xl flex-1 my-4 flex flex-col justify-between p-2">
								<div className="flex justify-between">
									<div className="w-4 h-4 border-t-2 border-l-2 border-white/60" />
									<div className="w-4 h-4 border-t-2 border-r-2 border-white/60" />
								</div>
								
								<div className="self-center flex flex-col items-center">
									<div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-xs">
										<div className="w-9 h-9 rounded-full bg-white" />
									</div>
									<span className="text-[10px] text-white/90 font-mono mt-1.5 drop-shadow-md bg-black/50 px-1.5 py-0.5 rounded">
										SNAP PHOTO
									</span>
								</div>
								
								<div className="flex justify-between">
									<div className="w-4 h-4 border-b-2 border-l-2 border-white/60" />
									<div className="w-4 h-4 border-b-2 border-r-2 border-white/60" />
								</div>
							</div>
						</div>
					</div>
				);
			case 1:
				return (
					<div className="relative w-[260px] h-[530px] mx-auto flex items-center justify-center">
						<Iphone15Pro width={260} height={530} src="/mobileHomePage.png" className="opacity-80" />
						
						{/* Green verification overlay centered over the phone */}
						<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
							<div className="bg-emerald-950/95 border border-emerald-500/40 rounded-2xl p-4 flex flex-col items-center shadow-2xl backdrop-blur-md max-w-[200px] text-center">
								<CheckCircle2 className="w-10 h-10 text-emerald-400 animate-pulse mb-2" />
								<span className="text-xs font-mono font-bold text-emerald-400 tracking-wider">
									EVIDENCE VERIFIED
								</span>
								<span className="text-[9px] font-mono text-emerald-400/80 mt-1">
									INTEGRITY: 99.8% PASS
								</span>
							</div>
						</div>

						{/* Floating Badges */}
						<div className="absolute inset-0 pointer-events-none z-30">
							{/* GPS Badge */}
							<div className="absolute top-12 -left-10 bg-slate-900/95 border border-emerald-500/30 text-emerald-400 text-[9px] font-mono py-1 px-2 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-1 whitespace-nowrap">
								<MapPin className="w-3 h-3 flex-shrink-0" />
								<span>GPS: 33.5731° N, 7.5898° W</span>
							</div>

							{/* Metadata Badge */}
							<div className="absolute top-1/3 -right-12 bg-slate-900/95 border border-emerald-500/30 text-emerald-400 text-[9px] font-mono py-1 px-2 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-1 whitespace-nowrap">
								<ShieldCheck className="w-3 h-3 flex-shrink-0" />
								<span>METADATA: UNMODIFIED</span>
							</div>

							{/* Peer Review Badge */}
							<div className="absolute bottom-[35%] -left-8 bg-slate-900/95 border border-emerald-500/30 text-emerald-400 text-[9px] font-mono py-1 px-2 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-1 whitespace-nowrap">
								<Users className="w-3 h-3 flex-shrink-0" />
								<span>PEER: 12/12 APPROVED</span>
							</div>

							{/* Timestamp Badge */}
							<div className="absolute bottom-16 -right-8 bg-slate-900/95 border border-emerald-500/30 text-emerald-400 text-[9px] font-mono py-1 px-2 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-1 whitespace-nowrap">
								<Clock className="w-3 h-3 flex-shrink-0" />
								<span>TIME: 14:32:05 UTC</span>
							</div>
						</div>
					</div>
				);
			case 2:
				return (
					<div className="relative w-[260px] h-[530px] mx-auto flex items-center justify-center">
						<Iphone15Pro width={260} height={530} src="/mobileHomePage.png" />
						
						{/* Screen Overlay Container */}
						<div 
							className="absolute overflow-hidden rounded-[32px] bg-slate-950/85 backdrop-blur-xs flex flex-col justify-between p-3 text-white border border-white/10"
							style={{ left: "4.9%", right: "5.1%", top: "2.2%", bottom: "2.2%" }}
						>
							{/* Header */}
							<div className="pt-6 pb-2 border-b border-white/10 flex flex-col items-center">
								<span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400">
									CITIZEN FEED
								</span>
								<span className="text-[8px] font-mono text-slate-400">
									REAL-TIME UPDATES
								</span>
							</div>

							{/* Feed List */}
							<div className="flex-1 my-3 flex flex-col gap-1.5 overflow-hidden justify-center">
								{[
									{ icon: <Activity className="w-3 h-3 text-rose-400" />, city: "Casablanca", status: "Verified", color: "text-emerald-400" },
									{ icon: <GraduationCap className="w-3 h-3 text-blue-400" />, city: "Rabat", status: "Verified", color: "text-emerald-400" },
									{ icon: <Droplet className="w-3 h-3 text-sky-400" />, city: "Marrakech", status: "Verified", color: "text-emerald-400" },
									{ icon: <Trash2 className="w-3 h-3 text-emerald-400" />, city: "Fes", status: "Verified", color: "text-emerald-400" },
									{ icon: <Zap className="w-3 h-3 text-yellow-400" />, city: "Tangier", status: "Flagged", color: "text-amber-400" },
								].map((item, idx) => (
									<div key={idx} className="bg-slate-900/60 border border-white/5 rounded-lg p-2 flex items-center justify-between">
										<div className="flex items-center gap-2">
											<div className="bg-white/5 p-1 rounded">
												{item.icon}
											</div>
											<span className="text-[10px] font-mono font-medium truncate max-w-[80px]">
												{item.city}
											</span>
										</div>
										<span className={cn("text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/5 border border-white/5", item.color)}>
											{item.status}
										</span>
									</div>
								))}
							</div>

							{/* Bottom Notification Bar */}
							<div className="bg-emerald-950/90 border border-emerald-500/30 rounded-xl p-2 flex items-center gap-2 mb-1 shadow-lg">
								<CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
								<span className="text-[9px] font-mono text-emerald-300 leading-tight">
									Your report joined 12,847 active audits
								</span>
							</div>
						</div>
					</div>
				);
			case 3:
				return (
					<div className="relative w-[260px] h-[530px] mx-auto flex items-center justify-center">
						<Iphone15Pro width={260} height={530} src="/mobileHomePage.png" />
						
						{/* Screen Overlay Container */}
						<div 
							className="absolute overflow-hidden rounded-[32px] bg-slate-950/80 backdrop-blur-xs flex flex-col justify-between p-3 text-white border border-white/10"
							style={{ left: "4.9%", right: "5.1%", top: "2.2%", bottom: "2.2%" }}
						>
							{/* Top Header */}
							<div className="pt-6 pb-2 border-b border-white/10 flex flex-col items-center">
								<span className="text-[8px] font-mono text-slate-400">
									NATIONAL ALERTS
								</span>
							</div>

							{/* Alert Banner / Box */}
							<div className="flex-1 my-4 flex flex-col justify-center gap-3">
								<div className="bg-red-950/90 border border-red-500/40 rounded-xl p-3 flex flex-col gap-2 shadow-2xl">
									<div className="bg-red-500/20 border border-red-500/30 rounded px-2 py-1 text-center flex items-center justify-center gap-1.5 animate-pulse">
										<span className="text-red-400 text-[10px] font-bold font-mono">
											{"⚠ INTEGRITY WATCH"}
										</span>
									</div>

									<div className="space-y-1.5">
										<div className="text-[10px] font-bold font-mono text-red-200 leading-tight">
											{"Tangier school district — Rating dropped 12% this week"}
										</div>
										<div className="text-[9px] font-mono text-red-300/80 flex items-center gap-1">
											<span className="w-1 h-1 rounded-full bg-red-400" />
											{"347 citizens affected"}
										</div>
										<div className="text-[9px] font-mono text-red-300/80 flex items-center gap-1">
											<span className="w-1 h-1 rounded-full bg-red-400 animate-pulse" />
											{"Auto-flagged for review"}
										</div>
									</div>
								</div>
							</div>

							{/* VIEW DETAILS Button */}
							<button className="w-full bg-red-600 hover:bg-red-700 text-white text-[10px] font-mono font-bold py-2 rounded-xl transition-colors border border-red-500/30 shadow-lg mb-2">
								VIEW DETAILS
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
				<Text variant="xs" className="text-primary font-bold tracking-widest uppercase">
					VERIFICATION METHODOLOGY
				</Text>
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
