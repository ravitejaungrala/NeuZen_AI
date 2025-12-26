import { industries } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-secondary/30 py-20 md:py-32">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
              Industries We Serve
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
              We apply our deep expertise in artificial intelligence to solve unique challenges across a wide range of sectors, driving innovation and growth.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-screen-xl">
            <div className="space-y-16">
              {industries.map((industry, index) => (
                 <Card key={industry.name} className="group grid md:grid-cols-2 overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20 items-center">
                  <div className={cn("relative aspect-video md:aspect-[4/3]", index % 2 === 1 && "md:order-2")}>
                    {industry.image && (
                      <Image
                        src={industry.image.imageUrl}
                        alt={industry.image.description}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        data-ai-hint={industry.image.imageHint}
                      />
                    )}
                  </div>
                  <div className={cn("p-8 md:p-12", index % 2 === 1 && "md:order-1")}>
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl md:text-3xl font-headline flex items-center gap-4">
                        <industry.icon className="h-10 w-10 text-primary flex-shrink-0" />
                        {industry.name}
                      </CardTitle>
                      <CardDescription className="pt-4 text-base">{industry.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow mt-6">
                      <h4 className="font-semibold mb-2">Use Cases:</h4>
                      <ul className="space-y-2 text-sm text-foreground/80 list-disc pl-5">
                        <li>Fraud detection and risk assessment</li>
                        <li>Algorithmic trading and portfolio management</li>
                        <li>Personalized banking and customer service</li>
                      </ul>
                    </CardContent>
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
