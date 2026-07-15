"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Main Grid */}
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              PARVEEN<span>.</span>
            </Link>
            <p className={styles.positioning}>
              We engineer authority systems that make founders the obvious choice.
            </p>
          </div>

          {/* Links */}
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Navigate</h4>
            <nav className={styles.nav}>
              <Link href="/thinking">Thinking</Link>
              <Link href="/work">Work</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          {/* Connect */}
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Connect</h4>
            <nav className={styles.nav}>
              <a
                href="https://linkedin.com/in/parveenkumar--"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ArrowUpRight size={11} />
              </a>
              <a
                href="https://www.youtube.com/@Parveen_Makwana"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube <ArrowUpRight size={11} />
              </a>
              <a
                href="https://x.com/Parveen_Engi"
                target="_blank"
                rel="noopener noreferrer"
              >
                X <ArrowUpRight size={11} />
              </a>
              <a
                href="https://www.instagram.com/parveen.tv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram <ArrowUpRight size={11} />
              </a>
              <a href="mailto:parveenmakwana02@gmail.com">
                Email <ArrowUpRight size={11} />
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Parveen Kumar. All rights reserved.
          </p>
          <p className={styles.tagline}>Become the Obvious Choice.</p>
        </div>
      </div>
    </footer>
  );
}
