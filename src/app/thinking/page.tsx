import Link from "next/link";
import styles from "./page.module.css";
import JournalForm from "@/components/JournalForm";

export const metadata = {
  title: "Thinking | Obvious Choice",
  description: "The knowledge hub. Essays, frameworks, and original thinking on authority, positioning, and AI systems.",
};

export default function ThinkingPage() {
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Thinking | Obvious Choice",
    "description": "Essays, frameworks, and original thinking on authority, positioning, and AI systems by Parveen Kumar.",
    "url": "https://parveenkumar.co/thinking",
    "about": [
      { "@type": "Thing", "name": "B2B Positioning" },
      { "@type": "Thing", "name": "Authority Systems" },
      { "@type": "Thing", "name": "AI Growth" }
    ]
  };

  return (
    <div className={styles.canvas}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <header className={styles.header}>
        <h1 className={styles.title}>Thinking.</h1>
        <p className={styles.subtitle}>
          Original ideas on authority, positioning, AI systems, and business growth. 
          The knowledge hub of the Obvious Choice ecosystem.
        </p>
      </header>

      <main className={styles.container}>
        {/* The Journal */}
        <section className={styles.journalSection}>
          <h2 className={styles.journalTitle}>The Journal</h2>
          <p className={styles.journalDesc}>
            One thoughtful email each week. The ideas I don&apos;t post on LinkedIn. 
            Join 200+ founders receiving insights on building compounding authority systems.
          </p>
          <JournalForm />
        </section>

        {/* Frameworks */}
        <section>
          <h2 className={styles.sectionTitle}>Frameworks</h2>
          <div className={styles.list}>
            <Link href="/work" className={styles.item}>
              <span className={styles.itemTag}>Model 01</span>
              <h3 className={styles.itemTitle}>Authority Engine™</h3>
              <p className={styles.itemDesc}>
                Extracting and documenting proprietary methodology to command premium pricing.
              </p>
            </Link>
            <Link href="/thinking" className={styles.item}>
              <span className={styles.itemTag}>Model 02</span>
              <h3 className={styles.itemTitle}>Obvious Framework™</h3>
              <p className={styles.itemDesc}>
                Reframe the buyer&apos;s perspective to become the default choice in your market.
              </p>
            </Link>
            <Link href="/work" className={styles.item}>
              <span className={styles.itemTag}>Model 03</span>
              <h3 className={styles.itemTitle}>Demand Loop™</h3>
              <p className={styles.itemDesc}>
                A compounding inbound system built on high-signal content and trust.
              </p>
            </Link>
          </div>
        </section>

        {/* Essays */}
        <section>
          <h2 className={styles.sectionTitle}>Essays</h2>
          <div className={styles.list}>
            <Link href="#" className={styles.item}>
              <span className={styles.itemTag}>Positioning</span>
              <h3 className={styles.itemTitle}>Authority is an unfair advantage.</h3>
              <p className={styles.itemDesc}>
                Why the best product rarely wins against the default choice, and how to engineer the perception of inevitability.
              </p>
            </Link>
            <Link href="#" className={styles.item}>
              <span className={styles.itemTag}>Strategy</span>
              <h3 className={styles.itemTitle}>People don&apos;t buy expertise.</h3>
              <p className={styles.itemDesc}>
                They buy the confidence that your proprietary process guarantees the outcome they are looking for.
              </p>
            </Link>
            <Link href="#" className={styles.item}>
              <span className={styles.itemTag}>Systems</span>
              <h3 className={styles.itemTitle}>Your business doesn&apos;t need more content.</h3>
              <p className={styles.itemDesc}>
                How to pivot from a high-volume publishing treadmill to a high-signal positioning engine.
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
