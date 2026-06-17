import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { ArrowRightIcon, PhoneCallIcon } from "lucide-react";

export function HeroSection() {
	return (
		<section className="mx-auto w-full max-w-5xl overflow-hidden pt-16">
			{/* Shades */}
			<div
				aria-hidden="true"
				className="absolute inset-0 size-full overflow-hidden"
			>
				<div
					className={cn(
						"absolute inset-0 isolate -z-10",
						"bg-[radial-gradient(20%_80%_at_20%_0%,--theme(--color-foreground/.1),transparent)]"
					)}
				/>
			</div>
			<div className="relative z-10 flex max-w-2xl flex-col gap-5 px-4">
				<a
					className={cn(
						"group flex w-fit items-center gap-3 rounded-sm border bg-card p-1 shadow-xs",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
					)}
					href="#link"
				>
					<div className="rounded-xs border bg-card px-1.5 py-0.5 shadow-sm">
						<p className="font-mono text-xs">NOW</p>
					</div>

					<span className="text-xs">accepting new client projects</span>
					<span className="block h-5 border-s" />

					<div className="pe-1">
						<ArrowRightIcon className="size-3 -translate-x-0.5 rtl:translate-x-0.5 duration-150 ease-out group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
					</div>
				</a>

				<Text
					as="h1"
					className={cn(
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-100 duration-500 ease-out"
					)}
					variant="h1"
				>
					Building Digital Experiences That Drive Growth
				</Text>

				<Text
					className={cn(
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-200 duration-500 ease-out"
					)}
					variant="lead"
				>
					We help brands scale faster through design, development <br /> and
					strategic execution.
				</Text>

				<div className="fade-in slide-in-from-bottom-10 flex w-fit animate-in items-center justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
					<Button asChild variant="outline">
						<a href="#contact">
							<PhoneCallIcon data-icon="inline-start" />{" "}
							Book a Call
						</a>
					</Button>
					<Button asChild>
						<a href="/auth">
							Get started{" "}
							<ArrowRightIcon data-icon="inline-end" />
						</a>
					</Button>
				</div>
			</div>
			<div className="relative">
				<div
					className={cn(
						"absolute -inset-x-20 inset-y-0 -translate-y-1/3 scale-120 rounded-full",
						"bg-[radial-gradient(ellipse_at_center,theme(--color-foreground/.1),transparent,transparent)]",
						"blur-[50px]"
					)}
				/>
				<div
					className={cn(
						"mask-b-from-60% relative mt-8 -me-56 overflow-hidden px-2 sm:mt-12 sm:me-0 md:mt-20",
						"fade-in slide-in-from-bottom-5 animate-in fill-mode-backwards delay-100 duration-1000 ease-out"
					)}
				>
					<div className="relative inset-shadow-2xs inset-shadow-foreground/10 mx-auto max-w-5xl overflow-hidden rounded-lg border bg-background p-2 shadow-xl ring-1 ring-card dark:inset-shadow-foreground/20 dark:inset-shadow-xs">
						<img
							alt="app screen"
							className="z-2 aspect-video rounded-lg border dark:hidden"
							height="1080"
							src="https://storage.efferd.com/screen/dashboard-light.webp"
							width="1920"
						/>
						<img
							alt="app screen"
							className="hidden aspect-video rounded-lg bg-background dark:block"
							height="1080"
							src="https://storage.efferd.com/screen/dashboard-dark.webp"
							width="1920"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
