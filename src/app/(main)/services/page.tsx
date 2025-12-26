import { services, industries } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-secondary/30 py-20 md:py-32">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
              AI-Powered Solutions
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
              From custom development to strategic implementation, we provide end-to-end services to integrate artificial intelligence into your business.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-screen-lg">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-16 font-headline">Our Core Services</h2>
            <div className="grid gap-12 md:grid-cols-1">
              {services.map((service) => (
                <Card key={service.title} className="grid md:grid-cols-5 items-center overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20">
                    <div className="md:col-span-2 flex items-center justify-center bg-primary/10 h-full p-8 md:p-0">
                       <service.icon className="h-24 w-24 text-primary" />
                    </div>
                    <div className="md:col-span-3 p-8">
                        <CardHeader className="p-0">
                            <CardTitle className="font-headline text-2xl mb-2">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="text-foreground/80 text-base">{service.description}</p>
                        </CardContent>
                    </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto max-w-screen-xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Solutions by Industry
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
                We apply our AI expertise to solve unique challenges across a wide range of sectors.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {industries.map((industry) => (
                <Link href="#" key={industry.name}>
                  <Card className="group relative overflow-hidden rounded-lg bg-background/50 shadow-sm transition-all duration-300 hover:bg-background hover:shadow-lg hover:-translate-y-2">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <industry.icon className="h-10 w-10 mb-4 text-primary transition-colors" />
                      <h3 className="text-lg font-semibold text-center">{industry.name}</h3>
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
