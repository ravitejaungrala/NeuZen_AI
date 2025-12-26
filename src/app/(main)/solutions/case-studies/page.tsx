import { caseStudies } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                 <Card key={study.company} className="group grid md:grid-cols-2 overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20 items-center">
                  <div className={cn("relative aspect-video md:aspect-[4/3]", index % 2 === 1 && "md:order-2")}>
                    {study.image && (
                      <Image
                        src={study.image.imageUrl}
                        alt={study.image.description}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        data-ai-hint={study.image.imageHint}
                      />
                    )}
                  </div>
                  <div className={cn("p-8 md:p-12", index % 2 === 1 && "md:order-1")}>
                    <CardHeader className="p-0">
                      <p className="text-sm font-semibold text-primary">{study.company}</p>
                      <CardTitle className="text-2xl md:text-3xl font-headline mt-1">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow mt-6 space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Challenge</h4>
                        <p className="text-foreground/80">{study.challenge}</p>
                      </div>
                       <div>
                        <h4 className="font-semibold text-lg mb-2">Solution</h4>
                        <p className="text-foreground/80">{study.solution}</p>
                      </div>
                       <div>
                        <h4 className="font-semibold text-lg mb-2">Results</h4>
                        <p className="text-foreground/80">{study.results}</p>
                      </div>
                    </CardContent>
                    <div className="mt-8">
                      <Button asChild variant="link" className="p-0 h-auto font-semibold text-base">
                        <Link href={study.link}>
                           Read Full Story <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
