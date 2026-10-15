import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getPost(params.slug);
  return { title: p ? `${p.title} | Joseph Victor` : "Not found", description: p?.summary };
}

export default function Post({ params }) {
  const p = getPost(params.slug);
  if (!p) notFound();
  return (
    <main>
      <article>
        <p className="muted">{p.date}</p>
        <h1 className="h1s">{p.title}</h1>
        <div className="prose"><ReactMarkdown>{p.content}</ReactMarkdown></div>
        <p><a href="/blog">Back to all posts</a></p>
      </article>
    </main>
  );
}
