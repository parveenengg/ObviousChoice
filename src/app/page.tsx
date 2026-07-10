import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import { getAllContent } from "@/lib/mdx";
import ContactForm from "@/components/ContactForm";
import NewsletterForm from "@/components/NewsletterForm";
import HeroBlueprint from "@/components/HeroBlueprint";
import {
  ObviousChoiceDiagram,
  AuthorityLoopDiagram,
  TrustEngineDiagram,
  AIGrowthStackDiagram,
  PositioningMatrixDiagram,
} from "@/components/Diagrams";
import styles from "./page.module.css";

export const revalidate = 3600; // Cache page data

export default function Home() {
  // Load content
  const thinkingPosts = getAllContent("thinking");
  const featuredPost = thinkingPosts[0];
  const remainingPosts = thinkingPosts.slice(1);

  const frameworks = getAllContent("frameworks");
  const featuredFramework = frameworks.find(f => f.slug === "obvious-choice-framework") || frameworks[0];
  const otherFrameworks = frameworks.filter(f => f.slug !== (featuredFramework?.slug || ""));

  const diagramMap: Record<string, React.ReactNode> = {
    "obvious-choice-framework": <ObviousChoiceDiagram />,
    "authority-loop": <AuthorityLoopDiagram />,
    "trust-engine": <TrustEngineDiagram />,
    "ai-growth-stack": <AIGrowthStackDiagram />,
    "positioning-matrix": <PositioningMatrixDiagram />,
  };

  return (
    <div className={styles.canvas}>

      {/* 1. HERO SECTION (Magazine Cover Editorial Composition) */}
      <section className={`${styles.heroSection} container animate-fade-in`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroLeft}>
            <span className={styles.tag}>AI GROWTH SYSTEMS CONSULTANT</span>
            <h1 className={styles.heroTitle}>
              Helping B2B Founders Build Authority That Creates Inbound Demand.
            </h1>
            <p className={styles.heroDesc}>
              Transform your business model from selling execution hours to deploying high-leverage intellectual systems. We pair custom AI automation stacks with strategic positioning to build compounding client attraction engines.
            </p>
            <div className={styles.heroActions}>
              <Link href="#contact" className="btn btn-primary">
                Book Strategy Call
              </Link>
              <Link href="#frameworks" className="btn btn-secondary">
                Explore Frameworks
              </Link>
            </div>
          </div>
          <div className={styles.heroRight}>
            <HeroBlueprint />
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION (Centered Editorial Statement) */}
      <section className={styles.philosophySection}>
        <div className="container">
          <div className={styles.philosophyContent}>
            <span className={styles.sectionMetaNum}>01 // CORE_PHILOSOPHY</span>
            <blockquote className={styles.philosophyQuote}>
              &ldquo;Businesses rarely lose because they have the worst product.
              <span className={styles.quoteFade}> They lose because they fail to become the obvious choice.</span>&rdquo;
            </blockquote>

            <div className={styles.philosophyBody}>
              <p className={styles.editorialLead}>
                In professional services, capability is table stakes. When your messaging sounds identical to everyone else, your business is commoditized. You are evaluated on price, rates, and headcount.
              </p>
              <div className={styles.philosophyColumns}>
                <p>
                  The solution is not to work harder or add more developers. The solution is to establish incontestable authority by packaging your intellectual property and deploying automated execution pipelines.
                </p>
                <p>
                  We help B2B founders transition from selling execution hours to deploying business systems. By pairing high-level strategic positioning with custom AI operations, we build engines that attract qualified clients automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FRAMEWORKS SECTION (Asymmetric Strategy-Book Alternating Layouts) */}
      <section id="frameworks" className={styles.frameworksSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionMetaNum}>02 // FRAMEWORKS</span>
            <h2 className={styles.sectionTitle}>Intellectual Property</h2>
            <p className={styles.sectionSubtitle}>
              Documented framework systems designed to replace manual consulting tasks and command pricing authority.
            </p>
          </div>

          {/* Framework 1: Featured Core (Obvious Choice) - Center Asymmetric block */}
          {featuredFramework && (
            <div className={styles.featuredFramework}>
              <div className={styles.featuredFrameworkGrid}>
                <div className={styles.featuredFrameworkLeft}>
                  <span className={styles.frameworkIndex}>MODEL_01 // CORE_SYSTEM</span>
                  <h3 className={styles.featuredFrameworkTitle}>
                    <Link href={`/frameworks/${featuredFramework.slug}`}>{featuredFramework.frontmatter.title}</Link>
                  </h3>
                  <p className={styles.featuredFrameworkSummary}>
                    {featuredFramework.frontmatter.summary}
                  </p>

                  <div className={styles.frameworkSpecs}>
                    {featuredFramework.frontmatter.problem && (
                      <div className={styles.frameworkDetailBlock}>
                        <span className={styles.detailBlockLabelDanger}>The Bottleneck</span>
                        <p className={styles.detailBlockText}>{featuredFramework.frontmatter.problem}</p>
                      </div>
                    )}
                    {featuredFramework.frontmatter.mistakes && (
                      <div className={styles.frameworkDetailBlock}>
                        <span className={styles.detailBlockLabelAccent}>The Mistake</span>
                        <p className={styles.detailBlockText}>{featuredFramework.frontmatter.mistakes}</p>
                      </div>
                    )}
                  </div>

                  <div className={styles.frameworkActionBox}>
                    <Link href={`/frameworks/${featuredFramework.slug}`} className="link-editorial">
                      Explore Full IP Application <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className={styles.featuredFrameworkRight}>
                  {diagramMap[featuredFramework.slug] || <div className={styles.diagramFallback}>Diagram loader...</div>}
                </div>
              </div>
            </div>
          )}

          {/* Other Frameworks (Rhythmic Alternating Layouts) */}
          <div className={styles.frameworksList}>
            {otherFrameworks.map((framework, index) => {
              const isEven = index % 2 === 0;
              const modelNumber = `MODEL_0${index + 2}`;

              return (
                <div
                  key={framework.slug}
                  className={`${styles.frameworkRow} ${isEven ? "" : styles.frameworkRowReverse}`}
                >
                  <div className={styles.frameworkLeft}>
                    <span className={styles.frameworkIndex}>{modelNumber} // INTELLECTUAL_ASSET</span>
                    <h3 className={styles.frameworkTitle}>
                      <Link href={`/frameworks/${framework.slug}`}>{framework.frontmatter.title}</Link>
                    </h3>
                    <p className={styles.frameworkSummary}>{framework.frontmatter.summary}</p>

                    <div className={styles.frameworkSpecs}>
                      {framework.frontmatter.problem && (
                        <div className={styles.frameworkDetailBlock}>
                          <span className={styles.detailBlockLabelDanger}>The Bottleneck</span>
                          <p className={styles.detailBlockText}>{framework.frontmatter.problem}</p>
                        </div>
                      )}
                      {framework.frontmatter.mistakes && (
                        <div className={styles.frameworkDetailBlock}>
                          <span className={styles.detailBlockLabelAccent}>The Mistake</span>
                          <p className={styles.detailBlockText}>{framework.frontmatter.mistakes}</p>
                        </div>
                      )}
                    </div>

                    <div className={styles.frameworkActionBox}>
                      <Link href={`/frameworks/${framework.slug}`} className="link-editorial">
                        Explore Blueprint Application <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>

                  <div className={styles.frameworkRight}>
                    {diagramMap[framework.slug] || <div className={styles.diagramFallback}>Diagram loader...</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. THINKING SECTION (Featured Editorial Publication Cards) */}
      <section id="thinking" className={styles.thinkingSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionMetaNum}>03 // THINKING</span>
            <h2 className={styles.sectionTitle}>Strategist Notebook</h2>
            <p className={styles.sectionSubtitle}>
              Deep dives and breakdowns on business growth, systems engineering, and positioning.
            </p>
          </div>

          <div className={styles.thinkingGrid}>
            {/* Left Side: Large Featured Essay Card */}
            {featuredPost && (
              <article className={styles.featuredCard}>
                <div className={styles.cardImageContainer}>
                  {/* Abstract dynamic SVG thumbnail pattern */}
                  <svg className={styles.abstractGraphic} viewBox="0 0 400 220" width="100%" height="100%">
                    <defs>
                      <pattern id="card-grid-1" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--text-color)" strokeWidth="0.5" strokeOpacity="0.04" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#card-grid-1)" />

                    {/* Abstract execution pipelines vectors */}
                    <line x1="50" y1="110" x2="350" y2="110" stroke="var(--text-color)" strokeWidth="0.75" strokeOpacity="0.1" />
                    <line x1="200" y1="30" x2="200" y2="190" stroke="var(--text-color)" strokeWidth="0.75" strokeOpacity="0.1" />

                    <circle cx="200" cy="110" r="60" fill="none" stroke="var(--accent-color)" strokeWidth="1" strokeOpacity="0.15" />
                    <circle cx="200" cy="110" r="40" fill="none" stroke="var(--text-color)" strokeWidth="0.75" strokeOpacity="0.1" />
                    <circle cx="200" cy="110" r="10" fill="var(--accent-color)" fillOpacity="0.05" />

                    <path d="M 120,70 L 150,70 L 200,110" fill="none" stroke="var(--accent-color)" strokeWidth="1" strokeOpacity="0.4" />
                    <circle cx="120" cy="70" r="3" fill="var(--accent-color)" />
                    <circle cx="200" cy="110" r="3.5" fill="var(--text-color)" />

                    {/* Compass marks */}
                    <text x="345" y="105" fill="var(--text-muted)" fillOpacity="0.3" className={styles.graphicMonoText}>090°_SYS</text>
                    <text x="55" y="122" fill="var(--text-muted)" fillOpacity="0.3" className={styles.graphicMonoText}>270°_NODE</text>
                  </svg>
                </div>

                <div className={styles.cardMain}>
                  <div className={styles.cardHeaderMeta}>
                    <span className={styles.cardCategory}>{featuredPost.frontmatter.category}</span>
                    <span className={styles.cardDate}>
                      {new Date(featuredPost.frontmatter.date).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>
                    <Link href={`/thinking/${featuredPost.slug}`}>{featuredPost.frontmatter.title}</Link>
                  </h3>
                  <p className={styles.cardExcerpt}>{featuredPost.frontmatter.summary}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.cardReadTime}>{featuredPost.frontmatter.readTime}</span>
                    <Link href={`/thinking/${featuredPost.slug}`} className="link-editorial">
                      Read Essay <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            )}

            {/* Right Side: Stack of Smaller Cards */}
            <div className={styles.secondaryCardStack}>
              {remainingPosts.map((post, idx) => (
                <article key={post.slug} className={styles.smallCard}>
                  <div className={styles.smallCardImage}>
                    <svg className={styles.abstractGraphicSmall} viewBox="0 0 160 160" width="100%" height="100%">
                      <defs>
                        <pattern id={`card-grid-small-${idx}`} width="12" height="12" patternUnits="userSpaceOnUse">
                          <path d="M 12 0 L 0 0 0 12" fill="none" stroke="var(--text-color)" strokeWidth="0.5" strokeOpacity="0.03" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#card-grid-small-${idx})`} />

                      {/* Matrix 2x2 grid representing positioning diagram */}
                      <line x1="80" y1="20" x2="80" y2="140" stroke="var(--text-color)" strokeWidth="0.5" strokeOpacity="0.08" />
                      <line x1="20" y1="80" x2="140" y2="80" stroke="var(--text-color)" strokeWidth="0.5" strokeOpacity="0.08" />

                      <circle cx="110" cy="50" r="4.5" fill="var(--accent-color)" />
                      <line x1="80" y1="80" x2="110" y2="50" stroke="var(--accent-color)" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="2, 2" />
                      <circle cx="45" cy="115" r="3" fill="var(--text-color)" fillOpacity="0.2" />
                      <circle cx="50" cy="100" r="3" fill="var(--text-color)" fillOpacity="0.2" />
                    </svg>
                  </div>

                  <div className={styles.smallCardBody}>
                    <div className={styles.cardHeaderMeta}>
                      <span className={styles.cardCategory}>{post.frontmatter.category}</span>
                      <span className={styles.cardDate}>
                        {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h4 className={styles.smallCardTitle}>
                      <Link href={`/thinking/${post.slug}`}>{post.frontmatter.title}</Link>
                    </h4>
                    <p className={styles.smallCardExcerpt}>{post.frontmatter.summary}</p>
                    <div className={styles.smallCardFooter}>
                      <span className={styles.cardReadTime}>{post.frontmatter.readTime}</span>
                      <Link href={`/thinking/${post.slug}`} className="link-editorial">
                        Read <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT SECTION (Editorial Composition) */}
      <section id="about" className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <span className={styles.sectionMetaNum}>BIOGRAPHY</span>
              <h2 className={styles.sectionTitle}>About</h2>
              
              <div className={styles.aboutContent}>
                <div className={styles.aboutStoryBlock}>
                  <h4 className={styles.aboutStoryTitle}>What I Believe</h4>
                  <p>
                    Execution is commodities, but thinking is scarce. Most B2B founders operate with incredible technical capabilities but sound completely anonymous. I believe documented intellectual property and systems design are the only sustainable leverage points.
                  </p>
                </div>
                
                <div className={styles.aboutStoryBlock}>
                  <h4 className={styles.aboutStoryTitle}>What I&apos;m Building</h4>
                  <p>
                    I construct digital foundations and AI-assisted automation stacks for agencies, B2B services, and founders. Projects like StockOS, SyncPad, and LabsDot represent components of this operational execution system.
                  </p>
                </div>

                <div className={styles.aboutStoryBlock}>
                  <h4 className={styles.aboutStoryTitle}>Current Focus</h4>
                  <p>
                    Integrating generative AI pipelines (LLM processing libraries, structured schema synthesis, and automated web triggers) with editorial personal branding pipelines to build uncontested business authority.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.aboutRight}>
              <div className={styles.portraitFrame}>
                <Image
                  src="/p.png"
                  alt="Parveen Kumar Portrait"
                  width={340}
                  height={420}
                  className={styles.portrait}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEWSLETTER SECTION (Ideas Worth Sharing Product Layout) */}
      <section className={styles.newsletterProductSection}>
        <div className="container">
          <div className={styles.newsletterProductGrid}>

            {/* Left side: Pitch and form */}
            <div className={styles.newsletterProductInfo}>
              <span className={styles.sectionMetaNum}>05 // DISPATCH</span>
              <h2 className={styles.newsletterProductTitle}>Ideas Worth Sharing</h2>
              <p className={styles.newsletterProductSubtitle}>
                A private research notebook detailing B2B positioning audits, context-aware AI growth setups, and authority loop models.
              </p>

              <ul className={styles.benefitsList}>
                <li>
                  <span className={styles.checkmark}><Check size={14} /></span>
                  <div>
                    <strong>Original Frameworks</strong>
                    <span>Systems blueprints to replace labor with software assets.</span>
                  </div>
                </li>
                <li>
                  <span className={styles.checkmark}><Check size={14} /></span>
                  <div>
                    <strong>Strategy Breakdowns</strong>
                    <span>Real audit case breakdowns of B2B positioning shifts.</span>
                  </div>
                </li>
                <li>
                  <span className={styles.checkmark}><Check size={14} /></span>
                  <div>
                    <strong>AI Operations Stack</strong>
                    <span>Tactical pipelines using LLMs and workflow triggers.</span>
                  </div>
                </li>
              </ul>

              <div className={styles.newsletterSubscribeBox}>
                <NewsletterForm placeholder="Enter your business email address..." />
                <span className={styles.subscriberCounter}>Join 2,400+ founders & executives in the loop.</span>
              </div>
            </div>

            {/* Right side: Mock issue preview */}
            <div className={styles.newsletterProductPreview}>
              <div className={styles.previewContainer}>
                <div className={styles.previewHeader}>
                  <span className={styles.previewTag}>LATEST_DISPATCH</span>
                  <span className={styles.previewIssueNum}>ISSUE_042</span>
                </div>
                <h3 className={styles.previewIssueTitle}>The Leverage Dilemma: Scaling Past Labor</h3>
                <p className={styles.previewText}>
                  Most founders scale their agency by hiring more analysts. But labor scales linearly with costs, adding management layers and margin strain. In this issue, we detail the modular context pipeline model—and how structured vector stores replace manual auditing tasks...
                </p>
                <div className={styles.previewFooter}>
                  <span className={styles.previewMeta}>July 2026 // 8 Min Read</span>
                  <span className={styles.previewLinkText}>Read abstract snippet →</span>
                </div>
                {/* Blueprint lines on preview card */}
                <div className={styles.previewBlueprintLines} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION (Simplified Frictionless Engagement) */}
      <section id="contact" className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>

            <div className={styles.contactLeft}>
              <span className={styles.sectionMetaNum}>06 // ENGAGEMENT</span>
              <h2 className={styles.contactTitle}>Build Your Obvious Choice System.</h2>
              <p className={styles.contactDesc}>
                Ready to transition from selling hours to deploying business growth engines? Initiate a conversation. Every strategic inquiry is reviewed personally.
              </p>

              <div className={styles.socialDirectory}>
                <span className={styles.directoryLabel}>DIRECT_CHANNELS</span>
                <div className={styles.directoryLinks}>
                  <a href="https://linkedin.com/in/parveenkumar--" target="_blank" rel="noopener noreferrer" className={styles.directoryLink}>
                    LinkedIn <ArrowUpRight size={12} />
                  </a>
                  <a href="https://www.youtube.com/@Parveen_Makwana" target="_blank" rel="noopener noreferrer" className={styles.directoryLink}>
                    YouTube <ArrowUpRight size={12} />
                  </a>
                  <a href="https://x.com/Parveen_Engi" target="_blank" rel="noopener noreferrer" className={styles.directoryLink}>
                    X <ArrowUpRight size={12} />
                  </a>
                  <a href="https://www.instagram.com/parveen.tv/" target="_blank" rel="noopener noreferrer" className={styles.directoryLink}>
                    Instagram <ArrowUpRight size={12} />
                  </a>
                  <a href="mailto:parveenmakwana02@gmail.com" className={styles.directoryLink}>
                    Email <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.contactRight}>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* 8. EMOTIONAL SIGN-OFF CALLOUT */}
      <section className={styles.emotionalCalloutSection}>
        <div className="container">
          <div className={styles.emotionalCalloutInner}>
            <div className={styles.blueprintDivider} />
            <h2 className={styles.emotionalQuote}>
              <span>Authority compounds.</span>
              <span>Ideas compound.</span>
              <span className={styles.activeQuoteSpan}>Trust compounds.</span>
            </h2>
            <p className={styles.emotionalLeadText}>
              Stop selling execution. Let&apos;s build your authority loop.
            </p>
            <div className={styles.emotionalAction}>
              <Link href="#contact" className="btn btn-primary">
                Start Building Yours
              </Link>
            </div>
            <div className={styles.blueprintDivider} />
          </div>
        </div>
      </section>

    </div>
  );
}
