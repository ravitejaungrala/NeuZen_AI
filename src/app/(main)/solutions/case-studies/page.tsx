import { caseStudies } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-secondary/30 py-20 md:py-32">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
              Customer Success Stories
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
              Discover how businesses like yours have transformed their operations and achieved remarkable results with NeuZenAI.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-screen-xl">
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
              {caseStudies.map((study) => (
                <Card key={study.company} className="flex flex-col group overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/20">
                  {study.image && (
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={study.image.imageUrl}
                        alt={study.image.description}
                        width={600}
                        height={400}
                        data-ai-hint={study.image.imageHint}
                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <p className="text-sm font-medium text-primary">{study.company}</p>
                    <CardTitle className="text-2xl font-headline">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-foreground/80">{study.description}</p>
                  </CardContent>
                  <CardFooter>
                     <Button asChild variant="link" className="p-0 h-auto font-semibold">
                        <Link href={study.link} className="flex items-center gap-2">
                           Read Case Study <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}