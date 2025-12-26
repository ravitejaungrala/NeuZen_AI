import { caseStudies } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Real-World Success Stories
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
            See how leading companies are leveraging NeuZenAI to achieve their goals and drive innovation.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0,3).map((study) => (
            <Card key={study.company} className="flex flex-col group overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2">
              {study.image && (
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={study.image.imageUrl}
                    alt={study.image.description}
                    width={500}
                    height={350}
                    data-ai-hint={study.image.imageHint}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <p className="text-sm font-medium text-primary">{study.company}</p>
                <CardTitle>{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80 line-clamp-3">{study.description}</p>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="p-0 h-auto">
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
  );
}
