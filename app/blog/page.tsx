import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Conseils web, visibilité Google et communication pour entreprises en Côte d’Ivoire.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="mt-2 text-muted-foreground">
        Conseils simples pour être visible, être contacté et mieux s’organiser.
      </p>

      <div className="mt-8 space-y-4">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-xl border p-5">
            <Link href={`/blog/${p.slug}`} className="text-xl font-medium hover:underline">
              {p.title}
            </Link>
            {p.description ? <p className="mt-2 text-muted-foreground">{p.description}</p> : null}
            {p.date ? <p className="mt-3 text-sm text-muted-foreground">{p.date}</p> : null}
          </article>
        ))}
      </div>
    </main>
  );
}