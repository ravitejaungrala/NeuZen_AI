import { industries } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function IndustriesSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30 dark:bg-card">
      <div className="container mx-auto max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            AI Solutions Across Industries
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
            We empower a diverse range of sectors with tailored artificial intelligence solutions that solve core challenges.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <Link href="#" key={industry.name}>
              <Card className="group relative overflow-hidden rounded-lg bg-background/50 shadow-sm transition-all duration-300 hover:bg-background hover:shadow-lg hover:-translate-y-2">
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <div className="mb-4 rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                     <industry.icon className="h-10 w-10 text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-center">{industry.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
