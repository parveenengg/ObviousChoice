import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getContentBySlug, getContentSlugs } from "@/lib/mdx";
import {
  ObviousChoiceDiagram,
  AuthorityLoopDiagram,
  TrustEngineDiagram,
  AIGrowthStackDiagram,
  PositioningMatrixDiagram,
} from "@/components/Diagrams";
import styles from "./framework.module.css";

interface FrameworkPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getContentSlugs("frameworks");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: FrameworkPageProps) {
  const { slug } = await params;
  const framework = getContentBySlug("frameworks", slug);
  if (!framework) return {};

  return {
    title: framework.frontmatter.title,
    description: framework.frontmatter.summary,
  };
}

export default async function FrameworkPage({ params }: FrameworkPageProps) {
  const { slug } = await params;
  const framework = getContentBySlug("frameworks", slug);

  if (!framework) {
    notFound();
  }

  const diagramMap: Record<string, React.ReactNode> = {
    "obvious-choice-framework": <ObviousChoiceDiagram />,
    "authority-loop": <AuthorityLoopDiagram />,
    "trust-engine": <TrustEngineDiagram />,
    "ai-growth-stack": <AIGrowthStackDiagram />,
    "positioning-matrix": <PositioningMatrixDiagram />,
  };

  return (
    <article className="container-editorial section animate-fade-in">
      <div className={styles.backWrapper}>
        <Link href="/frameworks" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to frameworks
        </Link>
      </div>

      <div className={styles.grid}>
        <div className={styles.left}>
          <header className={styles.header}>
            <span className={styles.label}>Proprietary Model</span>
            <h1 className={styles.title}>{framework.frontmatter.title}</h1>
            <p className={styles.summary}>{framework.frontmatter.summary}</p>
          </header>

          <div className={styles.content}>
            <MDXRemote source={framework.content} />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.stickyDiagram}>
            <h4 className={styles.diagramTitle}>Visual Model Representation</h4>
            {diagramMap[slug]}
            
            {framework.frontmatter.problem && (
              <div className={styles.cardInfo}>
                <span className={styles.cardLabel}>The Bottleneck</span>
                <p className={styles.cardText}>{framework.frontmatter.problem}</p>
              </div>
            )}

            {framework.frontmatter.mistakes && (
              <div className={styles.cardInfo}>
                <span className={styles.cardLabel}>Common Mistakes</span>
                <p className={styles.cardText}>{framework.frontmatter.mistakes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
