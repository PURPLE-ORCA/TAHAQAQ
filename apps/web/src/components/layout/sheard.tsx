import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";
import type React from "react";

export type LinkItemType = {
	label: string;
	href: string;
	icon: React.ReactNode;
	description?: string;
};

export function LinkItem({
	label,
	description,
	icon,
	className,
	href,
	...props
}: React.ComponentProps<"a"> & LinkItemType) {
	return (
		<a
			className={cn("flex items-center gap-x-2", className)}
			href={href}
			{...props}
		>
			<div
				className={cn(
					"flex aspect-square size-12 items-center justify-center rounded-md border bg-card text-sm shadow-sm",
					"[&_svg:not([class*='size-'])]:size-5 [&_svg:not([class*='size-'])]:text-foreground"
				)}
			>
				{icon}
			</div>
			<div className="flex flex-col items-start justify-center">
				<Text variant="accent">{label}</Text>
				<Text className="line-clamp-2" variant="muted">
					{description}
				</Text>
			</div>
		</a>
	);
}
