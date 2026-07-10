"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import ThemeToggle from "./ThemeToggle";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Large italic editorial quote */}
        <div className={styles.conclusion}>
          &ldquo;Businesses don&apos;t become the obvious choice by accident.&rdquo;
        </div>

        {/* Thin divider */}
        <hr className={styles.divider} />

        {/* 4-column grid */}
        <div className={styles.top}>

          {/* Col 1: Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              Parveen<span>.</span>
            </Link>
            <p className={styles.positioning}>
              Helping B2B founders become the obvious choice through positioning, authority, AI, and business systems.
            </p>
            <div className={styles.themeControl}>
              <ThemeToggle />
              <span className={styles.metaLabel}>Theme Preference</span>
            </div>
          </div>

          {/* Col 2: Menu */}
          <div className={styles.navGroup}>
            <h4 className={styles.navTitle}>Menu</h4>
            <nav>
              <ul className={styles.nav}>
                <li><Link href="/thinking">Thinking</Link></li>
                <li><Link href="/frameworks">Frameworks</Link></li>
                <li><Link href="/#about">About</Link></li>
                <li><Link href="/newsletter">Newsletter</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
              </ul>
            </nav>
          </div>

          {/* Col 3: Connect */}
          <div className={styles.navGroup}>
            <h4 className={styles.navTitle}>Connect</h4>
            <nav>
              <ul className={styles.nav}>
                <li>
                  <a href="https://linkedin.com/in/parveenkumar--" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@Parveen_Makwana" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://x.com/Parveen_Engi" target="_blank" rel="noopener noreferrer">
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/parveen.tv/" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:parveenmakwana02@gmail.com">Email</a>
                </li>
                <li>
                  <Link href="/rss.xml">RSS Feed</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Col 4: Newsletter */}
          <div className={styles.newsletterGroup}>
            <h4 className={styles.navTitle}>Ideas Worth Sharing</h4>
            <p className={styles.newsletterDesc}>
              Occasional essays on positioning, authority, AI, systems, and business thinking.
            </p>
            <div className={styles.footerFormBox}>
              <NewsletterForm placeholder="Your professional email..." />
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Parveen Kumar. All rights reserved.
          </p>
          <p className={styles.tagline}>
            Become the Obvious Choice.
          </p>
        </div>

      </div>
    </footer>
  );
}
