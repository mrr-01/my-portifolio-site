import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content/posts");

export function getPosts() {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return {
        slug: f.replace(/\.md$/, ""),
        title: data.title || f,
        date: data.date ? new Date(data.date).toISOString().slice(0, 10) : "",
        summary: data.summary || "",
        tags: data.tags || [],
        content,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const getPost = (slug) => getPosts().find((p) => p.slug === slug);
