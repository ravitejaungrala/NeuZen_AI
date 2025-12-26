import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function InsightsPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <div className="container mx-auto max-w-screen-xl py-12 md:py-20">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
              AI Insights & Trends
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
              Our thoughts on the present and future of artificial intelligence, technology, and business.
            </p>
          </header>

          {/* Featured Post */}
          <section className="mb-20">
            <Link href={`/insights/${featuredPost.slug}`}>
              <Card className="grid md:grid-cols-2 overflow-hidden group transition-all hover:shadow-lg hover:shadow-primary/20">
                <div className="aspect-video overflow-hidden">
                  {featuredPost.image && (
                    <Image
                      src={featuredPost.image.imageUrl}
                      alt={featuredPost.image.description}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      data-ai-hint={featuredPost.image.imageHint}
                    />
                  )}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <p className="mb-2 text-sm font-medium text-primary">Featured Article</p>
                  <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">{featuredPost.title}</h2>
                  <p className="text-foreground/80 mb-4">{featuredPost.description}</p>
                  <p className="text-sm text-foreground/60">{featuredPost.date}</p>
                </div>
              </Card>
            </Link>
          </section>

          {/* Grid of Other Posts */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight mb-8 font-headline">More Articles</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((post) => (
                <Link key={post.slug} href={`/insights/${post.slug}`}>
                  <Card className="flex flex-col h-full group overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                    {post.image && (
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={post.image.imageUrl}
                          alt={post.image.description}
                          width={400}
                          height={250}
                          className="object-cover w-full h-full transition-transform group-hover:scale-105"
                          data-ai-hint={post.image.imageHint}
                        />
                      </div>
                    )}
                    <CardHeader className="flex-grow">
                      <CardTitle className="text-xl font-headline">{post.title}</CardTitle>
                      <p className="pt-2 text-sm text-foreground/60">{post.date}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 text-sm line-clamp-3">{post.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}