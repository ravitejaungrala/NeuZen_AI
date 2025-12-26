import { products } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  return (
    <div>
      <section className="bg-secondary/30 dark:bg-card py-20 md:py-32">
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
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {products.map((product) => (
              <Card key={product.title} className="group grid md:grid-cols-2 overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20">
                <div className="relative aspect-video md:aspect-auto">
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
                <div className="flex flex-col p-6">
                  <CardHeader className="p-0">
                    <CardTitle className="text-2xl font-headline">{product.title}</CardTitle>
                    <CardDescription className="pt-2">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow mt-4">
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex items-center gap-2">Feature One</li>
                      <li className="flex items-center gap-2">Feature Two</li>
                      <li className="flex items-center gap-2">Feature Three</li>
                    </ul>
                  </CardContent>
                  <div className="mt-6">
                    <Button asChild>
                      <Link href={product.link}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
