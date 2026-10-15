// Commits the post to GitHub as content/posts/<slug>.md; Vercel then redeploys.
export async function POST(req) {
  const { password, title, summary, tags, body } = await req.json();
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD)
    return Response.json({ error: "Wrong password." }, { status: 401 });
  if (!title || !body) return Response.json({ error: "Title and body are required." }, { status: 400 });

  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (!slug) return Response.json({ error: "Title needs letters or numbers." }, { status: 400 });
  const date = new Date().toISOString().slice(0, 10);
  const md = `---\ntitle: ${JSON.stringify(title)}\ndate: "${date}"\nsummary: ${JSON.stringify(summary || "")}\ntags: ${JSON.stringify(tags || [])}\n---\n\n${body}\n`;

  const branch = process.env.GITHUB_BRANCH || "main";
  const url = `https://api.github.com/repos/${process.env.GITHUB_REPO}/contents/content/posts/${slug}.md`;
  const headers = { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, Accept: "application/vnd.github+json" };

  const existing = await fetch(`${url}?ref=${branch}`, { headers });
  const sha = existing.ok ? (await existing.json()).sha : undefined;
  const res = await fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify({ message: `post: ${title}`, content: Buffer.from(md).toString("base64"), sha, branch }),
  });
  if (!res.ok) return Response.json({ error: "GitHub rejected the commit. Check GITHUB_TOKEN and GITHUB_REPO." }, { status: 502 });
  return Response.json({ ok: true, slug });
}
