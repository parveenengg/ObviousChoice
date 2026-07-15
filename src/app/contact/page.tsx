import styles from "./page.module.css";
import StrategyForm from "@/components/StrategyForm";

export const metadata = {
  title: "Strategy Call | Obvious Choice",
  description: "Apply for a strategy call to engineer your authority and market positioning.",
};

export default function ContactPage() {
  return (
    <div className={styles.canvas}>
      <header className={styles.header}>
        <h1 className={styles.title}>Strategy Call.</h1>
        <p className={styles.subtitle}>
          This is not a discovery call. It is a deep dive into your current positioning, 
          your untapped intellectual property, and what it would take to engineer a monopoly in your market.
        </p>
      </header>

      <main className={styles.container}>
        <section className={styles.qualification}>
          <h2 className={styles.qualTitle}>Who this is for</h2>
          <div className={styles.qualList}>
            <div className={styles.qualItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>Founders and consulting firms with deep, proven expertise.</span>
            </div>
            <div className={styles.qualItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>Companies tired of competing on features, pricing, or proposals.</span>
            </div>
            <div className={styles.qualItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>Leaders willing to embrace radical focus and premium restraint.</span>
            </div>
          </div>
        </section>

        <StrategyForm />
      </main>
    </div>
  );
}
