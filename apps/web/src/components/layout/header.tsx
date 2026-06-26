"use client";

import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/ui/logo";
import Link from "next/link";

import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export const navLinks = [
	{
		label: "Audit Flow",
		href: "#audit-flow",
	},
	{
		label: "Observatory",
		href: "#observatory",
	},
	{
		label: "Civic Trust",
		href: "#trust",
	},
];

export function Header() {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn("sticky top-0 z-50 w-full border-b border-transparent transition-colors", {
				"border-secondary-foreground/10 bg-secondary/95 backdrop-blur-md text-secondary-foreground": scrolled,
				"bg-secondary/90 backdrop-blur-xs text-secondary-foreground": !scrolled,
			})}
		>
			<nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
				<Link
					className="rounded-md p-2 hover:bg-secondary-foreground/10 flex items-center gap-2 transition-colors"
					href="/"
				>
					<LogoIcon className="h-5 w-5 text-tertiary" />
					<span className="font-bold text-secondary-foreground tracking-wide">TAHAQAQ</span>
				</Link>
				<div className="hidden items-center gap-2 md:flex">
					{navLinks.map((link) => {
						return (
							<Button 
								asChild 
								key={link.label} 
								size="sm" 
								variant="ghost" 
								className="relative text-secondary-foreground/85 hover:bg-secondary-foreground/10 hover:text-secondary-foreground h-9 px-3 rounded-[0.5rem] group"
							>
								<a href={link.href} className="flex items-center">
									<span>{link.label}</span>
									<span className="absolute bottom-0 left-2 right-2 h-[3px] rounded-full bg-tertiary scale-x-0 transition-transform origin-bottom group-hover:scale-x-100" />
								</a>
							</Button>
						);
					})}
					<Button asChild size="sm" variant="ghost" className="text-secondary-foreground/85 hover:bg-secondary-foreground/10 hover:text-secondary-foreground rounded-[0.5rem]">
						<a href="/auth">Sign In</a>
					</Button>
					<Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground border-none shadow-sm rounded-[0.5rem] transition-colors">
						<a href="/auth">Citizen Portal</a>
					</Button>
				</div>
				<MobileNav />
			</nav>
		</header>
	);
}

