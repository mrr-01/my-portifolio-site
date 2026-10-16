import { getPosts } from "@/lib/posts";

export const metadata = { title: "Blog | Joseph Victor" };

export default function Blog() {
  const posts = getPosts();
  return (
    <main>
      <section>
        <h1 className="h1s">Tutorials and Guides<span className="red">.</span></h1>
        <p className="lead">Notes from building and breaking things in cybersecurity, DevOps and Linux.</p>
        {posts.length === 0 && <p className="muted">No posts yet. Publish your first one from /admin.</p>}
        {posts.map((p) => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="row post">
            <strong>{p.title}</strong>
            <p>{p.summary}</p>
            <span className="muted">{p.date}{p.tags.length ? ` · ${p.tags.join(", ")}` : ""}</span>
          </a>
        ))}
      </section>
    </main>
  );
}
