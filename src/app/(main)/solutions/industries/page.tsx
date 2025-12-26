import { industries } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {industries.map((industry) => (
                <Link href="#" key={industry.name}>
                  <Card className="group relative overflow-hidden rounded-lg bg-background/50 shadow-sm transition-all duration-300 hover:bg-background hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 h-full">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center h-full">
                      <div className="mb-4 rounded-full bg-primary/10 p-5 transition-colors group-hover:bg-primary/20">
                         <industry.icon className="h-12 w-12 text-primary transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold">{industry.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}