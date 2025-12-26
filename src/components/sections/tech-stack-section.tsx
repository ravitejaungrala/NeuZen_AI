import { techStack } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export default function TechStackSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Our Technology Stack
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
            We use the best and latest technologies to build powerful, scalable, and reliable AI solutions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center justify-center p-4 text-center">
              <tech.icon className="h-12 w-12 mb-3 text-primary" />
              <h3 className="text-md font-semibold">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
