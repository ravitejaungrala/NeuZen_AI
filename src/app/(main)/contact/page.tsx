import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-secondary/30 py-20 md:py-32">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
              Get in Touch
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
              We're here to help. Whether you have a question about our products, need a custom solution, or want to explore partnership opportunities, our team is ready to assist you.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold font-headline mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email Us</h3>
                      <p className="text-foreground/80">
                        For general inquiries, reach out to us at:
                      </p>
                      <a href="mailto:hello@neuzenai.com" className="text-primary hover:underline">
                        hello@neuzenai.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Call Us</h3>
                      <p className="text-foreground/80">
                        Our team is available from 9 AM to 5 PM, EST.
                      </p>
                      <a href="tel:+1-800-555-0199" className="text-primary hover:underline">
                        +1 (800) 555-0199
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Our Headquarters</h3>
                      <p className="text-foreground/80">
                        123 Innovation Drive<br />
                        Tech Valley, CA 94002, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-headline">Send us a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name">First Name</label>
                                    <Input id="first-name" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name">Last Name</label>
                                    <Input id="last-name" placeholder="Doe" />
                                </div>
                            </div>
                             <div className="space-y-2">
                                <label htmlFor="email">Email</label>
                                <Input id="email" type="email" placeholder="john.doe@example.com" />
                            </div>
                             <div className="space-y-2">
                                <label htmlFor="subject">Subject</label>
                                <Input id="subject" placeholder="Inquiry about Nexus Intelligence" />
                            </div>
                             <div className="space-y-2">
                                <label htmlFor="message">Message</label>
                                <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
                            </div>
                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </CardContent>
                 </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
