import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { teamMembers } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'about-hero') as ImagePlaceholder;

  const values = [
    "Innovation at the Core",
    "Customer-Centric Solutions",
    "Unwavering Ethical Standards",
    "Collaborative Excellence",
    "Pursuit of Knowledge",
    "Radical Transparency",
  ];

  return (
    <div>
      <section className="relative h-[50vh] w-full">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl font-headline">About AetherAI</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Pioneering the future of intelligence, one algorithm at a time.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Our Mission</h2>
          <p className="mt-6 text-lg text-foreground/80">
            To democratize artificial intelligence and empower businesses of all sizes to leverage cutting-edge technology for growth, innovation, and a more efficient future. We believe in creating AI that is not only powerful but also ethical, transparent, and accessible to everyone.
          </p>
        </div>
      </section>
      
      <section className="py-20 md:py-32 bg-secondary/30 dark:bg-card">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Our Core Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-foreground/80">The principles that guide our innovation and our team.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{value}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Meet Our Leadership</h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
            Driven by a shared passion for technology and a vision for a smarter world.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={member.image?.imageUrl} alt={member.name} data-ai-hint={member.image?.imageHint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="mt-16">
            <Link href="/careers">Join Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
