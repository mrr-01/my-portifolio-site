import { me, projects, experience, skills, certs, education } from "@/lib/data";
import { getPosts } from "@/lib/posts";

export default function Home() {
  const posts = getPosts().slice(0, 3);
  return (
    <main>
      <section className="hero">
        <div className="bigdot" aria-hidden="true" />
        <h1>{me.name}<span className="red">.</span></h1>
        <p className="role">{me.role}</p>
        <p className="lead">{me.intro}</p>
        <div className="links">
          <a className="btn" href={`mailto:${me.email}`}>Email me</a>
          <a href={me.github}>GitHub</a>
          <a href={me.linkedin}>LinkedIn</a>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {projects.map((g) => (
          <div key={g.group} className="group">
            <h3>{g.group}</h3>
            {g.items.map((p) => (
              <div key={p.name} className="row">
                <strong>
                  {p.post ? <a href={`/blog/${p.post}`}>{p.name}</a> : p.name}
                </strong>
                <p>{p.text}</p>
                {p.url && (
                  <p><a className="muted" href={p.url} target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
                )}
              </div>
            ))}
          </div>
        ))}
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <div className="row">
          <strong>{experience.title}, {experience.org}</strong>
          <ul>{experience.points.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="tags">{skills.map((s) => <li key={s}>{s}</li>)}</ul>
      </section>

      <section>
        <h2>Certifications</h2>
        {certs.map(([n, d]) => (
          <div key={n} className="row split"><span>{n}</span><span className="muted">{d}</span></div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        <div className="row">
          <strong>{education.degree}, {education.school}</strong>
          <p className="muted">{education.years}</p>
          <p>{education.extra}</p>
        </div>
      </section>

      <section>
        <h2>Latest from the blog</h2>
        {posts.length === 0 && <p className="muted">No posts yet.</p>}
        {posts.map((p) => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="row post">
            <strong>{p.title}</strong>
            <p>{p.summary}</p>
            <span className="muted">{p.date}</span>
          </a>
        ))}
        <p><a href="/blog">All posts</a></p>
      </section>
    </main>
  );
}
