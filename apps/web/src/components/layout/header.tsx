"use client";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export const navLinks = [
	{
		label: "Features",
		href: "#features",
	},
	{
		label: "Services",
		href: "#services",
	},
	{
		label: "About",
		href: "#about",
	},
];

export function Header() {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn("sticky top-0 z-50 w-full border-b border-transparent transition-colors", {
				"border-[#006020]/20 bg-[#006020]/95 backdrop-blur-sm text-white": scrolled,
				"bg-[#006020] text-white": !scrolled,
			})}
		>
			<nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
				<a
					className="rounded-md p-2 hover:bg-white/10 flex items-center gap-2 transition-colors"
					href="/"
				>
					<Logo className="h-5 fill-current text-[#F2C94C]" />
					<span className="font-bold text-white tracking-wide">TAHAQAQ</span>
				</a>
				<div className="hidden items-center gap-2 md:flex">
					{navLinks.map((link) => {
						const isActive = link.label === "Features";
						return (
							<Button 
								asChild 
								key={link.label} 
								size="sm" 
								variant="ghost" 
								className="relative text-white/85 hover:bg-white/10 hover:text-white h-9 px-3 rounded-[0.5rem] group"
							>
								<a href={link.href} className="flex items-center">
									<span>{link.label}</span>
									<span className={cn(
										"absolute bottom-0 left-2 right-2 h-[3px] bg-[#F2C94C] transition-transform origin-bottom rounded-t-full",
										isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
									)} />
								</a>
							</Button>
						);
					})}
					<Button asChild size="sm" variant="ghost" className="text-white/85 hover:bg-white/10 hover:text-white rounded-[0.5rem]">
						<a href="/auth">Sign In</a>
					</Button>
					<Button asChild size="sm" className="bg-[#00A040] hover:bg-[#006020] text-white border-none shadow-sm rounded-[0.5rem] transition-colors">
						<a href="/auth">Citizen Portal</a>
					</Button>
				</div>
				<MobileNav />
			</nav>
		</header>
	);
}
