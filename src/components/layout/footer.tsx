import Link from 'next/link';
import { BrainCircuit, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  const footerLinks = {
    'Products': [
      { name: 'Nexus Intelligence', href: '#' },
      { name: 'Aura Automations', href: '#' },
      { name: 'Synapse Cloud', href: '#' },
      { name: 'Quantum Predict', href: '#' },
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Insights', href: '/insights' },
      { name: 'Contact', href: '#' },
    ],
    'Resources': [
      { name: 'Documentation', href: '#' },
      { name: 'API Status', href: '#' },
      { name: 'Security', href: '#' },
    ],
  };

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto max-w-screen-2xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <BrainCircuit className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">AetherAI</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-foreground/60">
              Building the intelligent, automated, and interconnected future with artificial intelligence.
            </p>
            <div className="mt-6 flex space-x-6">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-foreground/60 hover:text-foreground">
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="font-medium text-foreground">{title}</p>
                <nav className="mt-4 flex flex-col space-y-2">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-6">
          <p className="text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} AetherAI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
