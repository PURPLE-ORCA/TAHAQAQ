import { cn } from "@/lib/utils";
import React from "react";
import { Portal, PortalBackdrop } from "@/components/ui/portal";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/components/layout/header";
import { XIcon, MenuIcon } from "lucide-react";

export function MobileNav() {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="md:hidden">
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="md:hidden border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
				onClick={() => setOpen(!open)}
				size="icon"
				variant="outline"
			>
				{open ? (
					<XIcon className="size-4.5" />
				) : (
					<MenuIcon className="size-4.5" />
				)}
			</Button>
			{open && (
				<Portal className="top-14" id="mobile-menu">
					<PortalBackdrop />
					<div
						className={cn(
							"data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
							"size-full p-4 bg-background text-foreground border-t border-border/40"
						)}
						data-slot={open ? "open" : "closed"}
					>
						<div className="grid gap-y-2">
							{navLinks.map((link) => (
								<Button
									asChild
									className="justify-start text-foreground/80 hover:bg-muted hover:text-foreground"
									key={link.label}
									variant="ghost"
									onClick={() => setOpen(false)}
								>
									<a href={link.href}>{link.label}</a>
								</Button>
							))}
						</div>
						<div className="mt-12 flex flex-col gap-2">
							<Button asChild className="w-full" variant="outline" onClick={() => setOpen(false)}>
								<a href="/auth">Sign In</a>
							</Button>
							<Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-none" onClick={() => setOpen(false)}>
								<a href="/auth">Citizen Portal</a>
							</Button>
						</div>
					</div>
				</Portal>
			)}
		</div>
	);
}

