"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import { 
	CheckCircle2, 
	MapPin, 
	Clock, 
	ShieldCheck, 
	Users, 
	Activity, 
	GraduationCap, 
	FileText, 
	Trash2, 
	Zap, 
	Droplet, 
	Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

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

	const reportCards = [
		{ icon: <Activity className="w-4 h-4 text-rose-400" />, title: "Health", val: "45m wait", bg: "bg-rose-950/20 border-rose-500/20" },
		{ icon: <GraduationCap className="w-4 h-4 text-blue-400" />, title: "School", val: "Delivered", bg: "bg-blue-950/20 border-blue-500/20" },
		{ icon: <FileText className="w-4 h-4 text-amber-400" />, title: "Receipt", val: "Audited", bg: "bg-amber-950/20 border-amber-500/20" },
		{ icon: <MapPin className="w-4 h-4 text-red-400" />, title: "Transit", val: "On Time", bg: "bg-red-950/20 border-red-500/20" },
		{ icon: <Trash2 className="w-4 h-4 text-emerald-400" />, title: "Waste", val: "Cleared", bg: "bg-emerald-950/20 border-emerald-500/20" },
		{ icon: <Zap className="w-4 h-4 text-yellow-400" />, title: "Power", val: "Stable", bg: "bg-yellow-950/20 border-yellow-500/20" },
		{ icon: <Users className="w-4 h-4 text-indigo-400" />, title: "Admin", val: "Normal", bg: "bg-indigo-950/20 border-indigo-500/20" },
		{ icon: <Droplet className="w-4 h-4 text-sky-400" />, title: "Water", val: "Fixed", bg: "bg-sky-950/20 border-sky-500/20" },
		{ icon: <Shield className="w-4 h-4 text-green-400" />, title: "Safety", val: "Secure", bg: "bg-green-950/20 border-green-500/20" },
	];

	const renderVisualCard = (idx: number) => {
		switch (idx) {
			case 0:
				return (
					<div className="relative mx-auto w-[260px] aspect-[9/18.5] rounded-[2.5rem] border-[6px] border-slate-800 bg-slate-950 shadow-2xl overflow-hidden flex flex-col">
						{/* Notch */}
						<div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-full z-30 flex items-center justify-center">
							<div className="w-2.5 h-2.5 rounded-full bg-slate-800/80 mr-4" />
							<div className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
						</div>

						{/* Screen Content */}
						<div className="relative w-full h-full flex-1 overflow-hidden">
							<Image 
								src="/mobileHomePage.png" 
								className="w-full h-full object-cover select-none pointer-events-none" 
								alt="Tahaqaq mobile app home screen" 
								width={260}
								height={534}
								priority
							/>
							
							{/* Camera Viewfinder Overlay */}
							<div className="absolute inset-4 border border-white/20 pointer-events-none rounded-xl flex flex-col justify-between p-2">
								<div className="flex justify-between">
									<div className="w-4 h-4 border-t-2 border-l-2 border-white/60" />
									<div className="w-4 h-4 border-t-2 border-r-2 border-white/60" />
								</div>
								
								<div className="self-center mb-2 flex flex-col items-center">
									<div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-xs">
										<div className="w-9 h-9 rounded-full bg-white" />
									</div>
									<span className="text-[10px] text-white/90 font-mono mt-1 drop-shadow-md bg-black/40 px-1.5 py-0.5 rounded">
										SNAP PHOTO
									</span>
								</div>
								
								<div className="flex justify-between">
									<div className="w-4 h-4 border-b-2 border-l-2 border-white/60" />
									<div className="w-4 h-4 border-b-2 border-r-2 border-white/60" />
								</div>
							</div>

							<div className="absolute top-8 left-4 right-4 flex justify-between items-center text-[10px] font-mono text-white/80 drop-shadow-sm select-none pointer-events-none z-10">
								<span>TAHAQAQ Mobile</span>
								<span className="flex items-center gap-1">
									<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
									REC
								</span>
							</div>
						</div>
					</div>
				);
			case 1:
				return (
					<div className="relative w-full max-w-[340px] h-[400px] flex items-center justify-center">
						{/* Main Phone Mockup */}
						<div className="relative w-[220px] aspect-[9/18.5] rounded-[2.5rem] border-[6px] border-slate-800 bg-slate-950 shadow-2xl overflow-hidden opacity-85 blur-[0.5px]">
							<div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-30" />
							<div className="relative w-full h-full animate-pulse">
								<Image 
									src="/mobileHomePage.png" 
									className="w-full h-full object-cover select-none pointer-events-none" 
									alt="Tahaqaq mobile app verification" 
									width={220}
									height={452}
								/>
								<div className="absolute inset-0 bg-slate-950/40" />
							</div>
						</div>

						{/* Verification Overlay & Floating Badges */}
						<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
							<div className="bg-emerald-950/90 border border-emerald-500/40 rounded-2xl p-4 flex flex-col items-center shadow-2xl backdrop-blur-md z-20 mb-4">
								<CheckCircle2 className="w-12 h-12 text-emerald-400 animate-pulse" />
								<span className="text-xs font-mono font-bold text-emerald-400 mt-2 tracking-widest">
									EVIDENCE VERIFIED
								</span>
								<span className="text-[9px] font-mono text-emerald-500/80">
									INTEGRITY: 99.8% PASS
								</span>
							</div>

							{/* Badges */}
							<div className="absolute top-6 left-2 bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono py-1 px-2.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5 z-10">
								<MapPin className="w-3 h-3" />
								<span>GPS: 33.5731° N, 7.5898° W</span>
							</div>

							<div className="absolute bottom-12 right-2 bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono py-1 px-2.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5 z-10">
								<Clock className="w-3 h-3" />
								<span>TIME: 14:32:05 UTC</span>
							</div>

							<div className="absolute top-[45%] right-0 bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono py-1 px-2.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5 z-10">
								<ShieldCheck className="w-3 h-3" />
								<span>METADATA: UNMODIFIED</span>
							</div>

							<div className="absolute bottom-28 left-0 bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono py-1 px-2.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5 z-10">
								<Users className="w-3 h-3" />
								<span>PEER: 12/12 APPROVED</span>
							</div>
						</div>
					</div>
				);
			case 2:
				return (
					<div className="grid grid-cols-3 gap-3 w-full max-w-[340px] aspect-square p-4 bg-slate-950/40 rounded-3xl border border-slate-800 backdrop-blur-xs">
						{reportCards.map((card, i) => (
							<div 
								key={i} 
								className={cn(
									"border rounded-xl p-2 flex flex-col justify-between backdrop-blur-md hover:scale-105 transition-all duration-300",
									card.bg
								)}
							>
								<div className="flex justify-between items-center w-full">
									{card.icon}
									<span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
								</div>
								<div className="space-y-0.5 mt-2">
									<div className="text-[9px] font-mono text-muted-foreground uppercase leading-none">
										{card.title}
									</div>
									<div className="text-[10px] font-bold text-foreground truncate font-mono">
										{card.val}
									</div>
								</div>
							</div>
						))}
					</div>
				);
			case 3:
				return (
					<div className="w-full max-w-[340px] aspect-[10/11] p-6 bg-slate-950/40 rounded-3xl border border-slate-800 backdrop-blur-xs flex flex-col items-center justify-center relative overflow-hidden">
						{/* Grid Lines in background */}
						<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
							<line x1="0" y1="50" x2="340" y2="50" stroke="currentColor" strokeDasharray="2 4" className="text-slate-500" />
							<line x1="0" y1="100" x2="340" y2="100" stroke="currentColor" strokeDasharray="2 4" className="text-slate-500" />
							<line x1="0" y1="150" x2="340" y2="150" stroke="currentColor" strokeDasharray="2 4" className="text-slate-500" />
							<line x1="0" y1="200" x2="340" y2="200" stroke="currentColor" strokeDasharray="2 4" className="text-slate-500" />
							<line x1="0" y1="250" x2="340" y2="250" stroke="currentColor" strokeDasharray="2 4" className="text-slate-500" />
							<line x1="0" y1="300" x2="340" y2="300" stroke="currentColor" strokeDasharray="2 4" className="text-slate-500" />
							<line x1="50" y1="0" x2="50" y2="374" stroke="currentColor" strokeDasharray="2 4" className="text-slate-500" />
							<line x1="100" y1="0" x2="100" y2="374" stroke="currentColor" strokeDasharray="2 4" className="text-slate-500" />
							<line x1="150" y1="0" x2="150" y2="374" stroke="currentColor" strokeDasharray="2 4" className="text-slate-500" />
							<line x1="200" y1="0" x2="200" y2="374" stroke="currentColor" strokeDasharray="2 4" className="text-slate-500" />
							<line x1="250" y1="0" x2="250" y2="374" stroke="currentColor" strokeDasharray="2 4" className="text-slate-500" />
							<line x1="300" y1="0" x2="300" y2="374" stroke="currentColor" strokeDasharray="2 4" className="text-slate-500" />
						</svg>

						{/* Morocco SVG Shape */}
						<svg 
							viewBox="0 0 200 220" 
							className="w-full h-full max-h-[260px] text-primary/40 drop-shadow-[0_0_15px_rgba(var(--primary),0.1)]"
							fill="none" 
							xmlns="http://www.w3.org/2000/svg"
						>
							{/* Connection lines */}
							<path 
								d="M 135,10 L 115,42 L 145,45 M 115,42 L 98,80 L 80,95 L 40,145 L 15,185" 
								fill="none" 
								stroke="rgba(16, 185, 129, 0.4)" 
								strokeWidth="1" 
								strokeDasharray="3 3" 
							/>

							{/* Map Outline */}
							<path 
								d="M 135,10 L 145,12 L 160,15 L 175,20 L 180,25 L 175,45 L 180,50 L 160,80 L 140,90 L 110,110 L 80,145 L 50,145 L 50,210 L 5,210 L 15,185 L 40,145 L 50,130 L 80,95 L 90,75 L 110,50 L 120,35 Z" 
								fill="rgba(30, 41, 59, 0.4)" 
								stroke="currentColor" 
								strokeWidth="1.5" 
								className="text-slate-700/80"
							/>

							{/* City Dots */}
							<circle cx="135" cy="10" r="2.5" fill="#10b981" /> {/* Tanger */}
							<circle cx="145" cy="45" r="2.5" fill="#10b981" /> {/* Fes */}
							<circle cx="98" cy="80" r="2.5" fill="#10b981" /> {/* Marrakesh */}
							<circle cx="80" cy="95" r="2.5" fill="#10b981" /> {/* Agadir */}
							<circle cx="40" cy="145" r="2.5" fill="#10b981" /> {/* Laayoune */}
							<circle cx="15" cy="185" r="2.5" fill="#10b981" /> {/* Dakhla */}

							{/* Active/Pulsing Center (Rabat/Casablanca) */}
							<circle cx="115" cy="42" r="8" fill="rgba(16, 185, 129, 0.4)" className="animate-ping" />
							<circle cx="115" cy="42" r="3.5" fill="#10b981" />
						</svg>

						{/* Footer HUD */}
						<div className="absolute bottom-3 left-3 right-3 bg-slate-900/95 border border-emerald-500/30 rounded-xl p-2 flex items-center justify-between text-[9px] font-mono text-emerald-400 backdrop-blur-md">
							<div className="flex items-center gap-1.5">
								<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
								<span>LIVE SYNC: NATIONWIDE</span>
							</div>
							<span>LAG: ~84ms</span>
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
