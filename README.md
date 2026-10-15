# Joseph Victor portfolio

Next.js 14 site, black and red theme. Edit `lib/data.js` for CV content.

## Deploy
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com/new.
3. Add the variables from `.env.example` under Settings > Environment Variables.
4. Deploy. Write posts at `/admin`; each one commits to `content/posts/` and Vercel redeploys.

You can also add posts by hand: create `content/posts/my-post.md` with `title`, `date`, `summary`, `tags` front matter.

## Local
`npm install && npm run dev`
