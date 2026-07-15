import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Work | Obvious Choice",
  description: "Evidence of the Authority Engine in practice. Strategic engagements and their outcomes.",
};

export default function WorkPage() {
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Work | Obvious Choice",
    "description": "Evidence of the Authority Engine in practice. Strategic engagements and their outcomes engineered by Parveen Kumar.",
    "url": "https://parveenkumar.co/work",
    "about": [
      { "@type": "Thing", "name": "B2B Consulting" },
      { "@type": "Thing", "name": "Strategic Repositioning" },
      { "@type": "Thing", "name": "Case Studies" }
    ]
  };

  return (
    <div className={styles.canvas}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <header className={styles.header}>
        <h1 className={styles.title}>Work.</h1>
        <p className={styles.subtitle}>
          This is not a portfolio of deliverables. It is a repository of strategic engagements and business outcomes engineered through the Authority Engine.
        </p>
      </header>

      <main className={styles.container}>
        {/* Case File 1 */}
        <article className={styles.caseFile}>
          <header className={styles.caseHeader}>
            <span className={styles.caseClient}>Enterprise SaaS</span>
            <h2 className={styles.caseTitle}>From commodity software to the default choice in FinTech.</h2>
            <p className={styles.caseSummary}>
              Repositioning a Series B financial software company to escape the feature-comparison trap and command a 40% premium.
            </p>
            
            <div className={styles.caseMetrics}>
              <div className={styles.metricBlock}>
                <span className={styles.metricValue}>$2.1M</span>
                <span className={styles.metricLabel}>New Pipeline</span>
              </div>
              <div className={styles.metricBlock}>
                <span className={styles.metricValue}>+40%</span>
                <span className={styles.metricLabel}>Price Increase</span>
              </div>
              <div className={styles.metricBlock}>
                <span className={styles.metricValue}>90 Days</span>
                <span className={styles.metricLabel}>To Market</span>
              </div>
            </div>
          </header>

          <div className={styles.caseBody}>
            <div className={styles.phase}>
              <span className={styles.phaseLabel}>01. The Challenge</span>
              <p className={styles.phaseContent}>
                The client had a technically superior product, but their sales cycles were extending to 9-12 months. Prospects were treating them as a commodity, running extensive feature comparisons against three cheaper competitors.
              </p>
            </div>

            <div className={styles.phase}>
              <span className={styles.phaseLabel}>02. The Diagnosis</span>
              <p className={styles.phaseContent}>
                They were selling software, not transformation. Their messaging led with &quot;advanced machine learning&quot; instead of the business outcome (predictable compliance). They had zero intellectual property around their methodology.
              </p>
            </div>

            <div className={styles.phase}>
              <span className={styles.phaseLabel}>03. The Strategy</span>
              <p className={styles.phaseContent}>
                We stopped selling the product entirely. Instead, we extracted their implicit knowledge into a proprietary framework: &quot;The Predictive Compliance Model.&quot; We repositioned the founders as the leading authorities on navigating regulatory complexity.
              </p>
            </div>

            <div className={styles.phase}>
              <span className={styles.phaseLabel}>04. The Execution</span>
              <p className={styles.phaseContent}>
                We overhauled their entire narrative architecture. We launched a high-signal journal for compliance officers, built a framework-driven sales deck, and redesigned their web presence to reflect a premium strategic partner rather than a vendor.
              </p>
            </div>

            <div className={styles.phase}>
              <span className={styles.phaseLabel}>05. The Outcome</span>
              <p className={styles.phaseContent}>
                Within 90 days, the new narrative was in market. Inbound demo requests shifted from junior IT staff to VP-level decision makers. They successfully raised their enterprise tier pricing by 40% with zero pushback, generating $2.1M in new pipeline.
              </p>
            </div>

            <div className={styles.phase}>
              <span className={styles.phaseLabel}>06. The Lesson</span>
              <p className={styles.phaseContent}>
                In a crowded market, the best product rarely wins. The company that can articulate the prospect&apos;s problem most clearly automatically earns the trust to solve it.
              </p>
              <blockquote className={styles.phaseQuote}>
                &quot;We used to walk into meetings and defend our features. Now we walk in, draw our framework on the whiteboard, and the prospect asks how quickly we can start.&quot;
              </blockquote>
            </div>
          </div>
        </article>

        {/* Case File 2 */}
        <article className={styles.caseFile}>
          <header className={styles.caseHeader}>
            <span className={styles.caseClient}>Boutique Consultancy</span>
            <h2 className={styles.caseTitle}>Engineering an inbound Demand Loop.</h2>
            <p className={styles.caseSummary}>
              Transitioning a specialized consulting firm from referral-dependent to predictable, high-ticket inbound acquisition.
            </p>
            
            <div className={styles.caseMetrics}>
              <div className={styles.metricBlock}>
                <span className={styles.metricValue}>3x</span>
                <span className={styles.metricLabel}>Deal Size</span>
              </div>
              <div className={styles.metricBlock}>
                <span className={styles.metricValue}>100%</span>
                <span className={styles.metricLabel}>Inbound Leads</span>
              </div>
            </div>
          </header>

          <div className={styles.caseBody}>
            <div className={styles.phase}>
              <span className={styles.phaseLabel}>01. The Challenge</span>
              <p className={styles.phaseContent}>
                The founders were brilliant strategists, but their business relied 100% on referrals and word-of-mouth. When the referral engine slowed down, their revenue became dangerously unpredictable.
              </p>
            </div>

            <div className={styles.phase}>
              <span className={styles.phaseLabel}>02. The Diagnosis</span>
              <p className={styles.phaseContent}>
                They were suffering from &quot;Expertise Invisibility.&quot; Their best thinking was locked inside client engagements. To the outside world, their website looked identical to a thousand other management consulting firms.
              </p>
            </div>

            <div className={styles.phase}>
              <span className={styles.phaseLabel}>03. The Strategy</span>
              <p className={styles.phaseContent}>
                We deployed the Demand Loop™. We needed to externalize their expertise into a daily system that would attract their ideal clients, build trust at scale, and filter out low-intent prospects.
              </p>
            </div>

            <div className={styles.phase}>
              <span className={styles.phaseLabel}>04. The Execution</span>
              <p className={styles.phaseContent}>
                We built a content architecture focused purely on their contrarian viewpoints. We stripped down their website to a single, high-converting editorial hub and launched a weekly journal designed to act as an automated nurture sequence.
              </p>
            </div>

            <div className={styles.phase}>
              <span className={styles.phaseLabel}>05. The Outcome</span>
              <p className={styles.phaseContent}>
                Within six months, they completely eliminated cold outreach. The quality of their inbound prospects allowed them to triple their minimum engagement size, as clients arrived pre-sold on their methodology.
              </p>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaDivider} />
            <h2 className={styles.ctaTitle}>Ready to engineer your Authority System?</h2>
            <p className={styles.ctaText}>
              Stop competing on price and features. Book a strategy call to explore how we can reposition you as the obvious choice in your market.
            </p>
            <Link href="/contact" className="btn btn-primary" aria-label="Book a strategy call to discuss your business">
              Book a Strategy Call
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
