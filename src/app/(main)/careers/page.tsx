import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { jobOpenings } from "@/lib/data";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  return (
    <div>
      <section className="bg-secondary/30 dark:bg-card py-20 md:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
            Build the Future With Us
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            We are a team of thinkers, builders, and innovators on a mission to redefine what's possible with AI. If you're passionate about solving complex problems, we'd love to have you.
          </p>
          <Button size="lg" className="mt-8">
            See All Openings
          </Button>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-16">
            {jobOpenings.map((department) => (
              <div key={department.department}>
                <h2 className="text-2xl md:text-3xl font-bold font-headline">{department.department}</h2>
                <div className="mt-6 space-y-4">
                  {department.roles.map((role) => (
                    <Link href="#" key={role.title}>
                      <Card className="transition-all hover:bg-secondary/50 dark:hover:bg-card/80 hover:shadow-md">
                        <CardHeader className="grid items-start gap-4 space-y-0 md:grid-cols-3 md:space-x-4">
                           <div className="md:col-span-2">
                             <CardTitle>{role.title}</CardTitle>
                             <CardDescription className="flex items-center gap-2 mt-2">
                                <MapPin className="h-4 w-4" />
                                {role.location} &bull; {role.type}
                              </CardDescription>
                           </div>
                           <div className="flex items-center justify-start md:justify-end">
                              <Button variant="ghost" className="flex items-center gap-2">
                                Apply Now <ArrowRight className="h-4 w-4"/>
                              </Button>
                           </div>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
           <div className="mt-16 text-center">
            <p className="text-lg text-foreground/80">Don't see a role that fits? We're always looking for talent.</p>
            <Button variant="link" asChild className="mt-2 text-lg">
                <Link href="#">Get in touch &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
