"use client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Admin() {
  const [f, setF] = useState({ password: "", title: "", summary: "", tags: "", body: "" });
  const [preview, setPreview] = useState(false);
  const [status, setStatus] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function publish() {
    setStatus("Publishing...");
    const res = await fetch("/api/publish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...f, tags: f.tags.split(",").map((t) => t.trim()).filter(Boolean) }),
    });
    const data = await res.json();
    setStatus(res.ok ? "Published. The site redeploys in about a minute." : data.error || "Failed to publish.");
  }

  return (
    <main>
      <section>
        <h1 className="h1s">Write a post<span className="red">.</span></h1>
        <div className="form">
          <input type="password" placeholder="Admin password" value={f.password} onChange={set("password")} />
          <input placeholder="Title" value={f.title} onChange={set("title")} />
          <input placeholder="One-line summary" value={f.summary} onChange={set("summary")} />
          <input placeholder="Tags, comma separated" value={f.tags} onChange={set("tags")} />
          {preview ? (
            <div className="prose box"><ReactMarkdown>{f.body}</ReactMarkdown></div>
          ) : (
            <textarea rows={16} placeholder="Write in Markdown" value={f.body} onChange={set("body")} />
          )}
          <div className="links">
            <button className="btn" onClick={publish}>Publish</button>
            <button onClick={() => setPreview(!preview)}>{preview ? "Edit" : "Preview"}</button>
          </div>
          {status && <p role="status">{status}</p>}
        </div>
      </section>
    </main>
  );
}
