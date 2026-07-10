import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { getAllContent } from "@/lib/mdx";
import styles from "./thinking.module.css";

export const metadata = {
  title: "Thinking",
  description: "Essays and thinking on positioning, authority, systems, and B2B growth.",
};

export default function ThinkingPage() {
  const posts = getAllContent("thinking");

  return (
    <div className="container-editorial section animate-fade-in">
      <div className={styles.header}>
        <span className={styles.label}>Strategist Notebook</span>
        <h1 className={styles.title}>Thinking</h1>
        <p className={styles.subtitle}>
          Deep dives into positioning arbitrage, building operational systems, and positioning B2B founders as the obvious choice in their market.
        </p>
      </div>

      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.postCard}>
            <div className={styles.postMeta}>
              <span className={styles.postCategory}>{post.frontmatter.category}</span>
              <span className={styles.postSeparator}>•</span>
              <span className={styles.postReadTime}>{post.frontmatter.readTime}</span>
            </div>
            <h2 className={styles.postTitle}>
              <Link href={`/thinking/${post.slug}`}>{post.frontmatter.title}</Link>
            </h2>
            <p className={styles.postSummary}>{post.frontmatter.summary}</p>
            <div className={styles.postFooter}>
              <span className={styles.postDate}>
                {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <Link href={`/thinking/${post.slug}`} className={styles.ctaBtn}>
                <BookOpen size={14} />
                Read Essay
                <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
