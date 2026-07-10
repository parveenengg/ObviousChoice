import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getContentBySlug, getContentSlugs } from "@/lib/mdx";
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

  return (
    <article className="container-content section animate-fade-in">
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
    </article>
  );
}
