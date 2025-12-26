import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";

export default function CareersCtaSection() {
  const careersImage = PlaceHolderImages.find(img => img.id === 'careers-illustration');

  return (
    <section className="py-20 md:py-32 bg-secondary/30 dark:bg-card">
      <div className="container mx-auto max-w-screen-xl">
        <Card className="bg-gradient-to-br from-primary/10 to-transparent">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                  Join Our Team of Innovators
                </h2>
                <p className="mt-4 text-foreground/80 text-lg">
                  We're looking for passionate, creative minds to help us build the future of artificial intelligence. If you're driven by challenge and inspired by technology, we want to hear from you.
                </p>
                <Button asChild size="lg" className="mt-6">
                  <Link href="/careers">View Open Positions</Link>
                </Button>
              </div>
              <div className="h-full w-full">
                {careersImage && (
                  <Image
                    src={careersImage.imageUrl}
                    alt={careersImage.description}
                    width={600}
                    height={500}
                    data-ai-hint={careersImage.imageHint}
                    className="object-cover h-full w-full rounded-r-lg"
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
