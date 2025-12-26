import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto max-w-screen-xl text-center">
                <div className="relative rounded-lg bg-gradient-to-br from-primary via-purple-600 to-blue-500 p-10 md:p-20">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground font-headline">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="mx-auto mt-4 max-w-[600px] text-lg text-primary-foreground/80">
                            Let's build something amazing together. Schedule a free consultation with our AI experts and discover how AetherAI can unlock your business's full potential.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <Button asChild size="lg" variant="secondary">
                                <Link href="#">Request a Demo</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
