import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        // Note: Replace with your actual video file
        src="https://cdn.pixabay.com/video/2024/02/13/200350-911855018_large.mp4"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container relative z-10 mx-auto max-w-screen-xl text-white">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Building Intelligent AI Products for the Future
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-white/80 md:text-xl">
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
