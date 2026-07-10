"use client";

import styles from "./OperatingCodex.module.css";

export default function OperatingCodex() {
  return (
    <div className={styles.container}>
      <span className={styles.codexLabel}>Operating Principles Codex</span>
      <svg viewBox="0 0 300 240" className={styles.svg} width="100%" height="auto">
        {/* Draw background guidelines */}
        <line x1="20" y1="120" x2="280" y2="120" className={styles.guideLine} />
        <line x1="150" y1="20" x2="150" y2="220" className={styles.guideLine} />

        {/* Outer concentric process loop */}
        <circle cx="150" cy="120" r="85" fill="none" className={styles.outerCircle} />

        {/* Central Core: The Strategic Lens */}
        <circle cx="150" cy="120" r="32" fill="none" className={styles.coreCircle} />
        <circle cx="150" cy="120" r="32" fill="none" className={styles.coreCircleActive} />
        <text x="150" y="123" className={styles.coreText} textAnchor="middle">TASTE GATE</text>

        {/* Node 1: Inputs (Insight Capture) */}
        <g transform="translate(110, 15)">
          <rect x="0" y="0" width="80" height="20" rx="2" className={styles.node} />
          <text x="40" y="13" className={styles.nodeText} textAnchor="middle">INSIGHTS</text>
        </g>

        {/* Node 2: Database (Codification) */}
        <g transform="translate(215, 110)">
          <rect x="0" y="0" width="80" height="20" rx="2" className={styles.node} />
          <text x="40" y="13" className={styles.nodeText} textAnchor="middle">VECTOR_DB</text>
        </g>

        {/* Node 3: Outputs (Authority Assets) */}
        <g transform="translate(110, 205)">
          <rect x="0" y="0" width="80" height="20" rx="2" className={styles.node} />
          <text x="40" y="13" className={styles.nodeText} textAnchor="middle">AUTHORITY</text>
        </g>

        {/* Node 4: Automations (Triggers) */}
        <g transform="translate(5, 110)">
          <rect x="0" y="0" width="80" height="20" rx="2" className={styles.node} />
          <text x="40" y="13" className={styles.nodeText} textAnchor="middle">AUTOMATIONS</text>
        </g>

        {/* Micro annotations */}
        <g className={styles.annotations}>
          <text x="155" y="48" className={styles.annotationText} textAnchor="start">Raw context inbound</text>
          <text x="210" y="145" className={styles.annotationText} textAnchor="end">Indexed knowledge</text>
          <text x="155" y="195" className={styles.annotationText} textAnchor="start">Market positioning assets</text>
          <text x="90" y="145" className={styles.annotationText} textAnchor="start">Trigger loop</text>
        </g>
      </svg>
    </div>
  );
}
