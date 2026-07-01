"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import tahaqouqLogo from "@tahaqaq/assets/logo/tahqouq.png";

import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";

export const navLinks = [
	{
		label: "لوحة التحكم",
		href: "#dashboard-showcase",
	},
	{
		label: "مسار التدقيق",
		href: "#audit-flow",
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
			dir="ltr"
		>
			<nav className="relative mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
				<div />
				<Link
					className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-secondary-foreground/10"
					href="/"
				>
					<img
						alt="شعار TAHAQAQ"
						className="size-8 object-contain"
						height={32}
						src={tahaqouqLogo.src}
						width={32}
					/>
					<span className="font-bold tracking-wide text-secondary-foreground">tahaqaq</span>
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
				</div>
			</nav>
		</header>
	);
}
