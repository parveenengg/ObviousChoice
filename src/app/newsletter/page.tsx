import Link from "next/link";
import { ArrowRight, Mail, BookOpen } from "lucide-react";
import { getAllContent } from "@/lib/mdx";
import NewsletterForm from "@/components/NewsletterForm";
import styles from "./newsletter.module.css";

export const metadata = {
  title: "Newsletter",
  description: "Occasional essays on positioning, authority, AI, systems, and business thinking.",
};

export default function NewsletterPage() {
  const issues = getAllContent("newsletter");

  return (
    <div className="container-editorial section animate-fade-in">
      <div className={styles.grid}>
        <div className={styles.left}>
          <span className={styles.label}>Weekly Publication</span>
          <h1 className={styles.title}>Ideas Worth Sharing<span>.</span></h1>
          <p className={styles.subtitle}>
            Written for B2B founders seeking to build authority, scale operations, and become the obvious choice through positioning and systems thinking.
          </p>
          
          <div className={styles.formBox}>
            <div className={styles.formIcon}>
              <Mail size={24} />
            </div>
            <h3 className={styles.formTitle}>Join 1,200+ Readers</h3>
            <p className={styles.formText}>Receive the next essay directly in your inbox. No spam. Unsubscribe anytime.</p>
            <NewsletterForm placeholder="Enter your business email..." />
          </div>
        </div>

        <div className={styles.right}>
          <h2 className={styles.archiveTitle}>Archive</h2>
          {issues.length === 0 ? (
            <p className={styles.emptyText}>No past issues published yet.</p>
          ) : (
            <div className={styles.archiveList}>
              {issues.map((issue) => (
                <div key={issue.slug} className={styles.issueRow}>
                  <span className={styles.issueDate}>
                    {new Date(issue.frontmatter.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <h3 className={styles.issueTitle}>
                    {issue.frontmatter.title}
                  </h3>
                  <p className={styles.issueSummary}>{issue.frontmatter.summary}</p>
                  <Link href={`/newsletter/${issue.slug}`} className={styles.ctaBtn}>
                    <BookOpen size={13} />
                    Read Issue
                    <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
