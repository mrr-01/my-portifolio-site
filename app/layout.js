import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "600", "800"] });

export const metadata = {
  title: "Joseph Victor",
  description: "Cybersecurity student, DevSecOps and Cloud Engineer. Projects and lessons learned.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <header className="nav">
          <a href="/" className="brand"><span className="dot" aria-hidden="true" />Joseph Victor</a>
          <nav>
            <a href="/#projects">Projects</a>
            <a href="/#experience">Experience</a>
            <a href="/blog">Blog</a>
          </nav>
        </header>
        {children}
        <footer className="foot">© {new Date().getFullYear()} Joseph Victor</footer>
      </body>
    </html>
  );
}
