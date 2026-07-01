import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";
import mascotStanding from "@tahaqaq/assets/mascot/mascotstanding.png";

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
من قنوات متفرقة إلى معالجة أوضح.
					</Text>

					<Text
						className={cn(
							"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-200 duration-500 ease-out text-[#3e4a3d] text-lg sm:text-xl max-w-lg"
						)}
						variant="lead"
					>
						TAHAQAQ هي منصة يقدم فيها المواطنون مراجعة أو بلاغاً مرة واحدة، ليتم بعد ذلك التحقق من الحالة، تفويضها، وتوجيهها إلى مؤسسة الخدمات العامة الصحيحة.
					</Text>
				</div>

				{/* Right — mascot */}
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

					<div className="relative z-10 flex w-full max-w-[480px] items-center justify-center">
						<img
							alt="كائن ورقي يعرض بلاغاً موثقاً لخدمة عامة"
							className="h-auto w-full max-w-[460px] object-contain drop-shadow-[0_24px_60px_rgba(0,96,32,0.18)]"
							height={512}
							src={mascotStanding.src}
							width={512}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
