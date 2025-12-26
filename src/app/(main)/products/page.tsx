import { products } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-secondary/30 py-20 md:py-32">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
              Our Technology Stack
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
              Explore our suite of powerful, interconnected AI products designed to solve complex business problems and drive growth.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-screen-xl">
            <div className="space-y-16">
              {products.map((product, index) => (
                <Card key={product.title} className="group grid md:grid-cols-2 overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20 items-center">
                  <div className={cn("relative aspect-video md:aspect-[4/3]", index % 2 === 1 && "md:order-2")}>
                    {product.image && (
                      <Image
                        src={product.image.imageUrl}
                        alt={product.image.description}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        data-ai-hint={product.image.imageHint}
                      />
                    )}
                  </div>
                  <div className={cn("p-8 md:p-12", index % 2 === 1 && "md:order-1")}>
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl md:text-3xl font-headline">{product.title}</CardTitle>
                      <CardDescription className="pt-4 text-base">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow mt-6">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li className="flex items-center gap-2">Feature One</li>
                        <li className="flex items-center gap-2">Feature Two</li>
                        <li className="flex items-center gap-2">Feature Three</li>
                      </ul>
                    </CardContent>
                    <div className="mt-8">
                      <Button asChild size="lg">
                        <Link href={product.link}>Learn More</Link>
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