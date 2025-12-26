import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-orange-600 to-amber-500 opacity-20 dark:opacity-30"></div>
      <div className="container relative mx-auto max-w-screen-xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Building Intelligent AI Products for the Future
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
          We craft state-of-the-art AI solutions that drive growth, efficiency, and innovation for businesses of all sizes.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/products">Explore Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
