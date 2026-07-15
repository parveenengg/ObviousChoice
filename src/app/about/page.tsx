import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "About | Obvious Choice",
  description: "The philosophy and methodology behind the Authority Engine.",
};

export default function AboutPage() {
  const profileLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "About | Obvious Choice",
    "description": "The philosophy and methodology behind the Authority Engine by Parveen Kumar.",
    "url": "https://parveenkumar.co/about",
    "mainEntity": {
      "@id": "https://parveenkumar.co/#person"
    }
  };

  return (
    <div className={styles.canvas}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileLd) }}
      />
      <header className={styles.header}>
        <h1 className={styles.title}>About.</h1>
        <p className={styles.subtitle}>
          I believe that in a crowded market, the best product rarely wins. 
          The market defaults to the most obvious choice.
        </p>
      </header>

      <main className={styles.container}>
        <article className={styles.prose}>
          <p>
            Most B2B companies are trapped in a race to the bottom. They compete on features, 
            they compete on pricing, and they rely on their sales teams to brute-force 
            deals across the finish line. 
          </p>
          <p>
            They are playing a game they cannot win, because they are letting their prospects 
            define the rules of engagement. They are allowing themselves to be commoditized.
          </p>

          <h2>The Paradigm Shift</h2>
          <p>
            Authority isn&apos;t claimed; it is engineered. It is the result of a deliberate, 
            systematic process of extracting your proprietary methodology, packaging it into 
            a distinct framework, and deploying it into the market.
          </p>
          <p>
            When you stop selling a product and start selling a transformation anchored by 
            a unique methodology, the entire dynamic shifts. You are no longer one of three 
            vendors on a spreadsheet. You become the sole provider of the exact solution 
            they now realize they need.
          </p>

          <h2>My Philosophy</h2>
          <p>
            I don&apos;t do generic &quot;marketing.&quot; I do not believe in high-volume, low-signal 
            content treadmills. I do not run standard lead generation playbooks.
          </p>
          <p>
            I build Authority Engines. I work exclusively with founders and consulting firms 
            who have deep, undocumented expertise. I help them extract that expertise, 
            turn it into intellectual property, and build the systems required to dominate 
            their niche.
          </p>
          <p>
            Premium positioning requires restraint. It requires the confidence to say no to 
            the wrong clients, the wrong tactics, and the wrong messaging. If you are ready 
            to stop competing and start commanding, you are in the right place.
          </p>

          <div className={styles.signature}>
            <p className={styles.signoff}>Parveen Kumar</p>
            <span className={styles.role}>Founder, Obvious Choice</span>
          </div>
        </article>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaDivider} />
            <h2 className={styles.ctaTitle}>Ready to command premium positioning?</h2>
            <p className={styles.ctaText}>
              Let&apos;s engineer your authority system. Book a strategy call to explore how we can reframe your market.
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
