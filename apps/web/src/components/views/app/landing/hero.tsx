import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

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
						"bg-[radial-gradient(20%_80%_at_20%_0%,rgba(0,160,64,0.05),transparent)]"
					)}
				/>
			</div>
			<div className="relative z-10 flex max-w-2xl flex-col gap-5 px-4">
				<a
					className={cn(
						"group flex w-fit items-center gap-3 rounded-[0.5rem] border border-[#006020]/25 bg-white p-1 shadow-xs",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
					)}
					href="#link"
				>
					<div className="rounded-[0.25rem] border border-[#006020]/10 bg-[#f4fcef] px-1.5 py-0.5 shadow-sm text-[#006020]">
						<p className="font-mono text-xs font-semibold">OFFICIEL</p>
					</div>

					<span className="text-xs text-[#006020] font-medium">Portail National de Vérification Civique</span>
					<span className="block h-5 border-s border-[#006020]/20" />

					<div className="pe-1 text-[#006020]">
						{/* Filled right arrow icon */}
						<svg viewBox="0 0 24 24" className="size-3 -translate-x-0.5 rtl:translate-x-0.5 duration-150 ease-out group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" fill="currentColor">
							<path d="M12 2L10.59 3.41L17.17 10H2V12H17.17L10.59 18.59L12 20L20 12L12 2Z" />
						</svg>
					</div>
				</a>

				<Text
					as="h1"
					className={cn(
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-100 duration-500 ease-out text-[#006020] font-bold text-4xl sm:text-5xl leading-tight"
					)}
					variant="h1"
				>
					Garantir la Confiance et l{"'"}Intégrité des Services Publics
				</Text>

				<Text
					className={cn(
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-200 duration-500 ease-out text-[#3e4a3d] text-lg sm:text-xl"
					)}
					variant="lead"
				>
					TAHAQAQ permet aux citoyens et aux administrations de vérifier l{"'"}authenticité des documents officiels et des démarches administratives au Royaume du Maroc en toute simplicité.
				</Text>

				<div className="fade-in slide-in-from-bottom-10 flex w-fit animate-in items-center justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
					<Button asChild variant="outline" className="border-2 border-[#006020] text-[#006020] bg-[#f4fcef] hover:bg-[#dde5d9] transition-colors rounded-[0.5rem] px-5 py-2.5 h-11">
						<a href="#about" className="flex items-center gap-2">
							{/* Filled info icon */}
							<svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
							</svg>
							En savoir plus
						</a>
					</Button>
					<Button asChild className="bg-[#00A040] hover:bg-[#006020] text-white border-none shadow-sm rounded-[0.5rem] transition-colors px-5 py-2.5 h-11">
						<a href="/auth" className="flex items-center gap-2">
							Vérifier un document
							<svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
								<path d="M12 2L10.59 3.41L17.17 10H2V12H17.17L10.59 18.59L12 20L20 12L12 2Z" />
							</svg>
						</a>
					</Button>
				</div>
			</div>
			<div className="relative">
				<div
					className={cn(
						"absolute -inset-x-20 inset-y-0 -translate-y-1/3 scale-120 rounded-full",
						"bg-[radial-gradient(ellipse_at_center,rgba(0,96,32,0.08),transparent,transparent)]",
						"blur-[50px]"
					)}
				/>
				<div
					className={cn(
						"mask-b-from-60% relative mt-8 -me-56 overflow-hidden px-2 sm:mt-12 sm:me-0 md:mt-20",
						"fade-in slide-in-from-bottom-5 animate-in fill-mode-backwards delay-100 duration-1000 ease-out"
					)}
				>
					<div 
						style={{ boxShadow: '0 10px 30px -10px rgba(0, 96, 32, 0.15)' }}
						className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#006020]/15 bg-white p-2 shadow-xl ring-1 ring-[#006020]/5"
					>
						<img
							alt="app screen"
							className="z-2 aspect-video rounded-xl border border-[#dde5d9] dark:hidden"
							height="1080"
							src="https://storage.efferd.com/screen/dashboard-light.webp"
							width="1920"
						/>
						<img
							alt="app screen"
							className="hidden aspect-video rounded-xl bg-background border border-neutral-800 dark:block"
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
