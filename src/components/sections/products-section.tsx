import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function ProductsSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Our Suite of AI Products
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
            Designed for scalability and seamless integration, our products empower your business to reach new heights.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-12"
        >
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col group overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20">
                    <CardHeader>
                      <CardTitle>{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      {product.image && (
                         <div className="aspect-video overflow-hidden rounded-md mb-4">
                           <Image
                             src={product.image.imageUrl}
                             alt={product.image.description}
                             width={600}
                             height={400}
                             data-ai-hint={product.image.imageHint}
                             className="object-cover w-full h-full transition-transform group-hover:scale-105"
                           />
                         </div>
                      )}
                      <p className="text-foreground/80 flex-grow">{product.description}</p>
                      <Button asChild variant="link" className="p-0 h-auto mt-4 self-start">
                        <Link href={product.link} className="flex items-center gap-2">
                           Learn More <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
