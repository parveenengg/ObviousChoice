import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  const frameworksLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": "https://parveenkumar.co/#frameworks",
    "name": "Obvious Choice Frameworks",
    "description": "Proprietary systems engineered to make founders the obvious choice.",
    "hasDefinedTerm": [
      {
        "@type": "DefinedTerm",
        "name": "Authority Engine",
        "description": "A methodology to extract and document proprietary methodology so you stop sounding like competitors and become the benchmark.",
        "url": "https://parveenkumar.co/#frameworks"
      },
      {
        "@type": "DefinedTerm",
        "name": "Obvious Framework",
        "description": "A strategy to reframe the buyer's perspective so you are the only logical choice, resulting in premium pricing power.",
        "url": "https://parveenkumar.co/#frameworks"
      },
      {
        "@type": "DefinedTerm",
        "name": "Demand Loop",
        "description": "A self-reinforcing content and trust-building engine that creates a predictable, highly-qualified inbound pipeline.",
        "url": "https://parveenkumar.co/#frameworks"
      },
      {
        "@type": "DefinedTerm",
        "name": "Signal System",
        "description": "AI pipelines deployed for distribution and synthesis to achieve omnipresence across channels without burning out.",
        "url": "https://parveenkumar.co/#frameworks"
      }
    ]
  };

  return (
    <div className={styles.canvas}>
      {/* Inject schema.org FAQ data for Frameworks */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(frameworksLd) }}
      />

      {/* ============================================
          1. HERO — BECOME THE OBVIOUS CHOICE
          ============================================ */}
      <section className={styles.heroSection}>
        <div className={styles.heroHeadline}>
          <span className={`${styles.heroWord} animate-fade-in`}>BECOME</span>
          <span className={`${styles.heroWord} animate-fade-in-delay-1`}>THE</span>
          <span className={`${styles.heroWord} ${styles.heroWordAccent} animate-fade-in-delay-2`}>OBVIOUS</span>
          <span className={`${styles.heroWord} animate-fade-in-delay-3`}>CHOICE.</span>
        </div>

        <p className={`${styles.heroSubheadline} animate-fade-in-delay-4`}>
          Authority isn&apos;t claimed. It&apos;s engineered.
        </p>

        <div className={`${styles.heroCtas} animate-fade-in-delay-5`}>
          <Link href="#system" className="btn btn-primary" aria-label="See how the Authority Engine system works">
            See the System
          </Link>
          <Link href="#contact" className="btn btn-ghost" aria-label="Book a strategic alignment call with Parveen">
            Book Strategy Call
          </Link>
        </div>
      </section>

      {/* ============================================
          2. BELIEF — People don't buy the best
          ============================================ */}
      <section className={styles.beliefSection}>
        <div className={styles.beliefInner}>
          <span className={styles.sectionLabel}>THE CONVICTION</span>
          <div className={styles.sectionDivider} />

          <h2 className={styles.beliefHeadline}>
            People don&apos;t buy the best.{" "}
            <span className={styles.beliefHeadlineHighlight}>
              They buy the obvious choice.
            </span>
          </h2>

          <div className={styles.beliefPillars}>
            <div className={styles.beliefPillar}>
              <span className={styles.beliefPillarNumber}>01</span>
              <h3 className={styles.beliefPillarTitle}>Authority</h3>
              <p className={styles.beliefPillarDesc}>
                Stop sounding identical to your competitors. Document your expertise and position yourself as the undeniable authority.
              </p>
            </div>
            <div className={styles.beliefPillar}>
              <span className={styles.beliefPillarNumber}>02</span>
              <h3 className={styles.beliefPillarTitle}>Trust</h3>
              <p className={styles.beliefPillarDesc}>
                Stop losing deals to cheaper alternatives. Build credibility that makes price irrelevant.
              </p>
            </div>
            <div className={styles.beliefPillar}>
              <span className={styles.beliefPillarNumber}>03</span>
              <h3 className={styles.beliefPillarTitle}>Demand</h3>
              <p className={styles.beliefPillarDesc}>
                Stop chasing clients. Create an inbound compounding engine that pulls opportunities to you.
              </p>
            </div>
            <div className={styles.beliefPillar}>
              <span className={styles.beliefPillarNumber}>04</span>
              <h3 className={styles.beliefPillarTitle}>Clients</h3>
              <p className={styles.beliefPillarDesc}>
                Stop selling execution hours. Attract premium founders who value your thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          3. SYSTEM — Horizontal Scroll Journey
          ============================================ */}
      <section id="system" className={styles.systemSection}>
        <div className={styles.systemHeader}>
          <span className={styles.sectionLabel}>THE SYSTEM</span>
          <div className={styles.sectionDivider} />
          <h2 className={styles.systemTitle}>How it works.</h2>
          <p className={styles.systemSubtitle}>
            A five-stage authority engine that builds compounding demand.
          </p>
        </div>

        <div className={styles.systemScroller}>
          <div className={styles.systemStep}>
            <span className={styles.systemStepNumber}>01</span>
            <h3 className={styles.systemStepTitle}>IP Extraction</h3>
            <p className={styles.systemStepDesc}>
              Document your implicit expertise. We package your insights and methodologies into structured, proprietary systems.
            </p>
            <div className={styles.systemStepLine} />
          </div>

          <div className={styles.systemStep}>
            <span className={styles.systemStepNumber}>02</span>
            <h3 className={styles.systemStepTitle}>Content Architecture</h3>
            <p className={styles.systemStepDesc}>
              Deploy strategic content that demonstrates your thinking. Every piece reinforces your positioning and builds authority.
            </p>
            <div className={styles.systemStepLine} />
          </div>

          <div className={styles.systemStep}>
            <span className={styles.systemStepNumber}>03</span>
            <h3 className={styles.systemStepTitle}>AI Systems</h3>
            <p className={styles.systemStepDesc}>
              Build intelligent automation pipelines that scale your reach. LLM processing, structured synthesis, and automated workflows.
            </p>
            <div className={styles.systemStepLine} />
          </div>

          <div className={styles.systemStep}>
            <span className={styles.systemStepNumber}>04</span>
            <h3 className={styles.systemStepTitle}>Distribution</h3>
            <p className={styles.systemStepDesc}>
              Replace manual tasks with software systems. Content distribution, lead capture, and nurture sequences run on autopilot.
            </p>
            <div className={styles.systemStepLine} />
          </div>

          <div className={styles.systemStep}>
            <span className={styles.systemStepNumber}>05</span>
            <h3 className={styles.systemStepTitle}>Growth Loop</h3>
            <p className={styles.systemStepDesc}>
              The engine compounds. Authority drives trust, trust drives demand, and demand attracts premium clients. The loop accelerates.
            </p>
            <div className={styles.systemStepLine} />
          </div>
        </div>
      </section>

      {/* ============================================
          4. PHILOSOPHY — CONSISTENCY creates INEVITABILITY
          ============================================ */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyInner}>
          <h2 className={styles.philosophyHeadline}>
            CONSISTENCY <br />
            creates <br />
            <span className={styles.philosophyHighlight}>INEVITABILITY.</span>
          </h2>
          <p className={styles.philosophySubtext}>Authority is the byproduct of compounding systems.</p>
        </div>
      </section>

      {/* ============================================
          5. FRAMEWORKS — Intellectual Property
          ============================================ */}
      <section id="frameworks" className={styles.frameworksSection}>
        <div className={styles.frameworksHeader}>
          <span className={styles.sectionLabel}>INTELLECTUAL PROPERTY</span>
          <div className={styles.sectionDivider} />
          <h2 className={styles.frameworksTitle}>The Frameworks.</h2>
          <p className={styles.frameworksSubtitle}>
            Proprietary systems engineered to make founders the obvious choice.
          </p>
        </div>

        <dl className={styles.frameworksGrid}>
          <div className={styles.frameworkCard}>
            <span className={styles.frameworkCardIndex}>MODEL_01</span>
            <dt className={styles.frameworkCardTitle}>
              Authority Engine<span className={styles.frameworkCardTrademark}>™</span>
            </dt>
            <dd className={styles.frameworkCardDesc}>
              <span className={styles.frameworkLabel}>Problem:</span> You sound exactly like your competitors.<br/>
              <span className={styles.frameworkLabel}>Strategy:</span> Extract and document your proprietary methodology.<br/>
              <span className={styles.frameworkLabel}>Outcome:</span> You become the benchmark others are compared against.
              <div style={{ marginTop: '1rem' }}>
                <Link href="/work" className={styles.frameworkLink} aria-label="Read case studies related to the Authority Engine">See it in Practice &rarr;</Link>
              </div>
            </dd>
            <div className={styles.frameworkCardLine} />
          </div>

          <div className={styles.frameworkCard}>
            <span className={styles.frameworkCardIndex}>MODEL_02</span>
            <dt className={styles.frameworkCardTitle}>
              Obvious Framework<span className={styles.frameworkCardTrademark}>™</span>
            </dt>
            <dd className={styles.frameworkCardDesc}>
              <span className={styles.frameworkLabel}>Problem:</span> Prospects negotiate on price because they don&apos;t see unique value.<br/>
              <span className={styles.frameworkLabel}>Strategy:</span> Reframe the buyer&apos;s perspective so you are the only logical choice.<br/>
              <span className={styles.frameworkLabel}>Outcome:</span> Premium pricing power and zero competitive bids.
              <div style={{ marginTop: '1rem' }}>
                <Link href="/thinking" className={styles.frameworkLink} aria-label="Read essays related to the Obvious Framework">Read the Philosophy &rarr;</Link>
              </div>
            </dd>
            <div className={styles.frameworkCardLine} />
          </div>

          <div className={styles.frameworkCard}>
            <span className={styles.frameworkCardIndex}>MODEL_03</span>
            <dt className={styles.frameworkCardTitle}>
              Demand Loop<span className={styles.frameworkCardTrademark}>™</span>
            </dt>
            <dd className={styles.frameworkCardDesc}>
              <span className={styles.frameworkLabel}>Problem:</span> You rely entirely on outbound sales or referrals.<br/>
              <span className={styles.frameworkLabel}>Strategy:</span> Build a self-reinforcing content and trust-building engine.<br/>
              <span className={styles.frameworkLabel}>Outcome:</span> Predictable, highly-qualified inbound pipeline.
              <div style={{ marginTop: '1rem' }}>
                <Link href="/work" className={styles.frameworkLink} aria-label="See how we built a Demand Loop for our clients">View the Results &rarr;</Link>
              </div>
            </dd>
            <div className={styles.frameworkCardLine} />
          </div>

          <div className={styles.frameworkCard}>
            <span className={styles.frameworkCardIndex}>MODEL_04</span>
            <dt className={styles.frameworkCardTitle}>
              Signal System<span className={styles.frameworkCardTrademark}>™</span>
            </dt>
            <dd className={styles.frameworkCardDesc}>
              <span className={styles.frameworkLabel}>Problem:</span> Creating high-quality content takes too much of your time.<br/>
              <span className={styles.frameworkLabel}>Strategy:</span> Deploy AI pipelines for distribution and synthesis.<br/>
              <span className={styles.frameworkLabel}>Outcome:</span> Omnipresence across channels without burning out.
              <div style={{ marginTop: '1rem' }}>
                <Link href="/thinking" className={styles.frameworkLink} aria-label="Explore essays on AI Signal Systems">Explore AI Systems &rarr;</Link>
              </div>
            </dd>
            <div className={styles.frameworkCardLine} />
          </div>
        </dl>
      </section>

      {/* ============================================
          6. PROOF PREVIEW — Work
          ============================================ */}
      <section id="work" className={styles.projectsSection}>
        <div className={styles.projectsHeader}>
          <span className={styles.sectionLabel}>PROOF</span>
          <div className={styles.sectionDivider} />
          <h2 className={styles.projectsTitle}>Execution.</h2>
          <p className={styles.projectsSubtitle}>
            Engineered authority systems driving multi-million dollar outcomes for B2B founders.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {/* Project 1 */}
          <Link href="/work" className={styles.projectCard}>
            <div className={styles.projectCardImage}>
              <div className={styles.projectCardImageOverlay} />
              <span className={styles.projectCardIcon}>ACME</span>
            </div>
            <div className={styles.projectCardBody}>
              <span className={styles.projectCardTag}>Enterprise SaaS</span>
              <h3 className={styles.projectCardName}>Acme Corp</h3>
              <div className={styles.projectCardDescription}>
                <span className={styles.frameworkLabel}>Challenge:</span> Trapped in a feature-parity price war.<br/>
                <span className={styles.frameworkLabel}>Strategy:</span> Pivoted to competing on proprietary methodology.<br/>
                <span className={styles.frameworkLabel}>Outcome:</span> Escaped churn spiral, closed enterprise deals.
              </div>
              <div className={styles.projectCardMetrics}>
                <div className={styles.projectCardMetric}>
                  <span className={styles.projectCardMetricValue}>3x</span>
                  <span className={styles.projectCardMetricLabel}>ACV Increase</span>
                </div>
                <div className={styles.projectCardMetric}>
                  <span className={styles.projectCardMetricValue}>45%</span>
                  <span className={styles.projectCardMetricLabel}>Inbound Velocity</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Project 2 */}
          <Link href="/work" className={styles.projectCard}>
            <div className={styles.projectCardImage}>
              <div className={styles.projectCardImageOverlay} />
              <span className={styles.projectCardIcon}>VANTAGE</span>
            </div>
            <div className={styles.projectCardBody}>
              <span className={styles.projectCardTag}>B2B Consulting</span>
              <h3 className={styles.projectCardName}>Vantage Partners</h3>
              <div className={styles.projectCardDescription}>
                <span className={styles.frameworkLabel}>Challenge:</span> Selling execution hours, hitting a revenue ceiling.<br/>
                <span className={styles.frameworkLabel}>Strategy:</span> Documented founder&apos;s IP into productized frameworks.<br/>
                <span className={styles.frameworkLabel}>Outcome:</span> Scalable consulting model decoupled from hours.
              </div>
              <div className={styles.projectCardMetrics}>
                <div className={styles.projectCardMetric}>
                  <span className={styles.projectCardMetricValue}>$2.1M</span>
                  <span className={styles.projectCardMetricLabel}>New Pipeline</span>
                </div>
                <div className={styles.projectCardMetric}>
                  <span className={styles.projectCardMetricValue}>90 Days</span>
                  <span className={styles.projectCardMetricLabel}>To Market</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ============================================
          7. THINKING & JOURNAL — Editorial Authority
          ============================================ */}
      <section id="thinking" className={styles.thinkingSection}>
        <div className={styles.thinkingHeader}>
          <span className={styles.sectionLabel}>EDITORIAL</span>
          <div className={styles.sectionDivider} />
          <h2 className={styles.thinkingTitle}>Thinking.</h2>
          <p className={styles.thinkingSubtitle}>
            I write about Authority, Positioning, AI Systems, and Business Strategy. Every week.
          </p>
        </div>

        <div className={styles.thinkingPreviewGrid}>
          {/* Latest Essay */}
          <Link href="/thinking" className={styles.thinkingPreviewCard}>
            <span className={styles.essayTag}>Latest Essay</span>
            <h4 className={styles.essayTitle}>Authority is an unfair advantage.</h4>
            <p className={styles.essayPreview}>Why the best product rarely wins against the default choice, and how to engineer the perception of inevitability.</p>
          </Link>
          
          {/* Latest Video */}
          <Link href="/thinking" className={styles.thinkingPreviewCard}>
            <span className={styles.essayTag}>Latest Video</span>
            <h4 className={styles.essayTitle}>The IP Extraction Framework</h4>
            <p className={styles.essayPreview}>A 40-minute breakdown of how we turn implicit expertise into proprietary models.</p>
          </Link>

          {/* The Journal */}
          <div className={styles.journalPreviewCard}>
            <h4 className={styles.essayTitle}>The Journal</h4>
            <p className={styles.essayPreview}>One thoughtful email each week. The ideas I don&apos;t post on LinkedIn.</p>
            <form className={styles.journalFormSmall}>
              <input type="email" placeholder="Email address" className={styles.journalInputSmall} required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.thinkingFooter}>
          <Link href="/thinking" className="btn btn-ghost" aria-label="Read more essays on B2B positioning and authority engineering in our Journal">
            Explore Thinking &rarr;
          </Link>
        </div>
      </section>

      {/* ============================================
          8. WORKING TOGETHER — Process Timeline
          ============================================ */}
      <section className={styles.workingSection}>
        <div className={styles.workingHeader}>
          <span className={styles.sectionLabel}>THE ENGAGEMENT</span>
          <div className={styles.sectionDivider} />
          <h2 className={styles.workingTitle}>Working Together.</h2>
          <p className={styles.workingSubtitle}>
            A precise, engineered process to guarantee outcomes and eliminate friction.
          </p>
        </div>

        <div className={styles.workingTimeline}>
          <div className={styles.workingStep}>
            <div className={styles.workingStepNumber}>01</div>
            <div className={styles.workingStepContent}>
              <h3 className={styles.workingStepTitle}>Discovery</h3>
              <p className={styles.workingStepDesc}>A 30-minute alignment call to determine if your problem matches our system. No pitching.</p>
            </div>
          </div>
          <div className={styles.workingStep}>
            <div className={styles.workingStepNumber}>02</div>
            <div className={styles.workingStepContent}>
              <h3 className={styles.workingStepTitle}>Diagnosis</h3>
              <p className={styles.workingStepDesc}>Deep-dive audit of your current positioning, intellectual property, and conversion systems.</p>
            </div>
          </div>
          <div className={styles.workingStep}>
            <div className={styles.workingStepNumber}>03</div>
            <div className={styles.workingStepContent}>
              <h3 className={styles.workingStepTitle}>Strategy</h3>
              <p className={styles.workingStepDesc}>Architecting the blueprint for your new authority engine, including frameworks and narrative.</p>
            </div>
          </div>
          <div className={styles.workingStep}>
            <div className={styles.workingStepNumber}>04</div>
            <div className={styles.workingStepContent}>
              <h3 className={styles.workingStepTitle}>Implementation</h3>
              <p className={styles.workingStepDesc}>Building the assets, deploying the AI systems, and launching the growth infrastructure.</p>
            </div>
          </div>
          <div className={styles.workingStep}>
            <div className={styles.workingStepNumber}>05</div>
            <div className={styles.workingStepContent}>
              <h3 className={styles.workingStepTitle}>Iteration</h3>
              <p className={styles.workingStepDesc}>Refining the system based on market feedback and live data to maximize inbound pull.</p>
            </div>
          </div>
          <div className={styles.workingStep}>
            <div className={styles.workingStepNumber}>06</div>
            <div className={styles.workingStepContent}>
              <h3 className={styles.workingStepTitle}>Support</h3>
              <p className={styles.workingStepDesc}>Ongoing strategic partnership to ensure the authority engine compounds over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          9. FINAL CTA — Ready to become the Obvious Choice?
          ============================================ */}
      <section id="contact" className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaDivider} />
          <h2 className={styles.ctaHeadline}>
            Ready to become the Obvious Choice?
          </h2>
          <p className={styles.ctaSubtext}>
            Book a 30-minute strategy call to discuss your business, identify opportunities, and determine whether we&apos;re a good fit.
          </p>
          <Link href="mailto:parveenmakwana02@gmail.com?subject=Strategic%20Alignment%20Request" className="btn btn-primary">
            Book a Call <ArrowRight size={16} />
          </Link>
          <div className={styles.ctaDivider} />
        </div>
      </section>

    </div>
  );
}
