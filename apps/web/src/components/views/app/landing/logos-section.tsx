import { LogoCloud } from "@/components/views/app/landing/logo-cloud";
import { Text } from "@/components/ui/text";

export function LogosSection() {
	return (
		<section className="mx-auto h-full max-w-3xl space-y-4 px-4 py-10 md:px-8">
			<Text
				as="h2"
				className="text-center text-muted-foreground"
				variant="h5"
			>
				Trusted by <span className="text-foreground">experts</span>
			</Text>
			<LogoCloud />
		</section>
	);
}
