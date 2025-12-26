'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, BrainCircuit } from 'lucide-react';
import { navLinks, industries, caseStudies } from '@/lib/data';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const ListItem = ({ href, title, children }: { href: string; title: string; children: React.ReactNode }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};


export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">NeuZenAI</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/services" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/solutions/industries"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Industries
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Tailored AI solutions for a diverse range of sectors.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {industries.slice(0, 3).map((industry) => (
                       <ListItem
                        key={industry.name}
                        title={industry.name}
                        href="#"
                      >
                        AI solutions for the {industry.name.toLowerCase()} sector.
                      </ListItem>
                    ))}
                     <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/solutions/case-studies"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Case Studies
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Real-world success stories of our AI implementations.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                     {caseStudies.slice(0, 3).map((study) => (
                       <ListItem
                        key={study.company}
                        title={study.company}
                        href="#"
                      >
                       {study.title}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/products" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Products
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
               <NavigationMenuItem>
                <Link href="/insights" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Insights
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/careers" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Careers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex-1 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className=""
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="flex items-center space-x-2">
                <BrainCircuit className="h-6 w-6 text-primary" />
                <span className="font-bold">NeuZenAI</span>
              </Link>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
