import { blogPosts } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1">
      <article className="py-20 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <header className="mb-12 text-center p-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">
                {post.title}
              </h1>
              <div className="flex justify-center items-center space-x-4 text-foreground/80">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://picsum.photos/seed/author/40/40" />
                    <AvatarFallback>NT</AvatarFallback>
                  </Avatar>
                  <span>NeuZenAI Team</span>
                </div>
                <span>&bull;</span>
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </header>
            {post.image && (
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg mb-12">
                <Image
                  src={post.image.imageUrl}
                  alt={post.image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={post.image.imageHint}
                  priority
                />
              </div>
            )}
            <div className="prose prose-lg dark:prose-invert mx-auto p-6">
              <p>{post.description}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
              </p>
              <h2>Subheading for the article</h2>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
              </p>
              <ul>
                <li>First list item.</li>
                <li>Second list item.</li>
                <li>Third list item.</li>
              </ul>
              <p>
                Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam.
              </p>
            </div>
          </Card>
        </div>
      </article>
    </main>
  );
}