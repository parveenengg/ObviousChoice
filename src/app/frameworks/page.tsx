import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { getAllContent } from "@/lib/mdx";
import {
  ObviousChoiceDiagram,
  AuthorityLoopDiagram,
  TrustEngineDiagram,
  AIGrowthStackDiagram,
  PositioningMatrixDiagram,
} from "@/components/Diagrams";
import styles from "./frameworks.module.css";

export const metadata = {
  title: "Frameworks",
  description: "Proprietary systems designed to help founders audit positioning, loop authority, and deploy AI operations.",
};

export default function FrameworksPage() {
  const frameworks = getAllContent("frameworks");

  const diagramMap: Record<string, React.ReactNode> = {
    "obvious-choice-framework": <ObviousChoiceDiagram />,
    "authority-loop": <AuthorityLoopDiagram />,
    "trust-engine": <TrustEngineDiagram />,
    "ai-growth-stack": <AIGrowthStackDiagram />,
    "positioning-matrix": <PositioningMatrixDiagram />,
  };

  return (
    <div className="container-editorial section animate-fade-in">
      <div className={styles.header}>
        <span className={styles.label}>Proprietary Assets</span>
        <h1 className={styles.title}>Intellectual Property</h1>
        <p className={styles.subtitle}>
          Structured frameworks to turn raw capabilities into market positioning, user trust, and scalable operations.
        </p>
      </div>

      <div className={styles.list}>
        {frameworks.map((framework) => (
          <div key={framework.slug} className={styles.row}>
            <div className={styles.left}>
              <h2 className={styles.rowTitle}>
                <Link href={`/frameworks/${framework.slug}`}>{framework.frontmatter.title}</Link>
              </h2>
              <p className={styles.rowSummary}>{framework.frontmatter.summary}</p>
              
              {framework.frontmatter.problem && (
                <div className={styles.rowProblem}>
                  <strong>The Problem:</strong> {framework.frontmatter.problem}
                </div>
              )}
              
              {framework.frontmatter.mistakes && (
                <div className={styles.rowMistakes}>
                  <strong>Common Mistakes:</strong> {framework.frontmatter.mistakes}
                </div>
              )}

              <div className={styles.linkWrapper}>
                <Link href={`/frameworks/${framework.slug}`} className={styles.ctaBtn}>
                  <Layers size={14} />
                  Explore Framework
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            
            <div className={styles.right}>
              {diagramMap[framework.slug]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
