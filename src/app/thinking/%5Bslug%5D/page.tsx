import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getContentBySlug, getContentSlugs } from "@/lib/mdx";
import JournalForm from "@/components/JournalForm";
import styles from "./post.module.css";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getContentSlugs("thinking");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getContentBySlug("thinking", slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getContentBySlug("thinking", slug);

  if (!post) {
    notFound();
  }

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.frontmatter.title,
    "abstract": post.frontmatter.summary,
    "datePublished": new Date(post.frontmatter.date).toISOString(),
    "dateModified": new Date(post.frontmatter.date).toISOString(),
    "timeRequired": `PT${(post.frontmatter.readTime || "5 min").split(' ')[0]}M`,
    "author": {
      "@id": "https://parveenkumar.co/#person"
    },
    "publisher": {
      "@id": "https://parveenkumar.co/#organization"
    },
    "about": [
      { "@type": "Thing", "name": post.frontmatter.category }
    ],
    "url": `https://parveenkumar.co/thinking/${slug}`
  };

  return (
    <article className="container-content section animate-fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <div className={styles.backWrapper}>
        <Link href="/thinking" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to thinking
        </Link>
      </div>

      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.category}>{post.frontmatter.category}</span>
          <span className={styles.separator}>•</span>
          <span className={styles.date}>
            {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className={styles.separator}>•</span>
          <span className={styles.readTime}>{post.frontmatter.readTime}</span>
        </div>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
      </header>

      <div className={styles.content}>
        <MDXRemote source={post.content} />
      </div>

      <div className={styles.journalSection}>
        <div className={styles.journalHeader}>
          <h3>The Journal</h3>
          <p>Join founders and partners receiving one strategic essay every week.</p>
        </div>
        <JournalForm />
      </div>
    </article>
  );
}
