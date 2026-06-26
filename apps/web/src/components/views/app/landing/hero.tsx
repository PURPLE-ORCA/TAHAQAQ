import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";
import Iphone15Pro from "@/components/ui/iphone15-pro";

export function HeroSection() {
	return (
		<section className="mx-auto w-full max-w-6xl overflow-hidden pt-16">
			{/* Background shade */}
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

			<div className="relative z-10 flex flex-col items-center gap-10 px-4 md:flex-row md:items-center md:gap-12 lg:gap-16">
				{/* Left — Text */}
				<div className="flex flex-1 flex-col gap-5">
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
							"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-200 duration-500 ease-out text-[#3e4a3d] text-lg sm:text-xl max-w-lg"
						)}
						variant="lead"
					>
						TAHAQAQ permet aux citoyens et aux administrations de vérifier l{"'"}authenticité des documents officiels et des démarches administratives au Royaume du Maroc en toute simplicité.
					</Text>
				</div>

				{/* Right — iPhone frames */}
				<div className="fade-in slide-in-from-bottom-5 animate-in fill-mode-backwards delay-300 duration-1000 ease-out relative flex flex-1 items-center justify-center">
					{/* Background glow */}
					<div
						aria-hidden="true"
						className={cn(
							"absolute inset-0 -translate-y-4 scale-110 rounded-full",
							"bg-[radial-gradient(ellipse_at_center,rgba(0,96,32,0.08),transparent,transparent)]",
							"blur-[40px]"
						)}
					/>

					{/* Phone 1 — back */}
					<div className="relative -me-8 -rotate-3 scale-90 opacity-80 sm:scale-95">
						<Iphone15Pro
							width={220}
							height={450}
							src="/mobileMap.png"
						/>
					</div>

					{/* Phone 2 — front */}
					<div className="relative z-10 rotate-2">
						<Iphone15Pro
							width={240}
							height={490}
							src="/mobileHomePage.png"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
