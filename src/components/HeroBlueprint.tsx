"use client";

import styles from "./HeroBlueprint.module.css";

export default function HeroBlueprint() {
  return (
    <div className={styles.container}>
      <div className={styles.canvasContainer}>
        {/* Subtle grid background */}
        <div className={styles.gridOverlay} />
        
        <svg viewBox="0 0 500 500" className={styles.svg} width="100%" height="100%">
          <defs>
            {/* Subtle glow filter */}
            <filter id="subtle-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <radialGradient id="hub-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0.0" />
            </radialGradient>
          </defs>

          {/* Grid lines inside SVG */}
          <g className={styles.linesGroup}>
            <line x1="250" y1="30" x2="250" y2="470" className={styles.centerAxis} />
            <line x1="30" y1="250" x2="470" y2="250" className={styles.centerAxis} />
            
            {/* Diagonal coordinates vectors */}
            <line x1="95" y1="95" x2="405" y2="405" className={styles.diagonalAxis} />
            <line x1="95" y1="405" x2="405" y2="95" className={styles.diagonalAxis} />
          </g>

          {/* Concentric System Orbits */}
          <g>
            <circle cx="250" cy="250" r="190" className={styles.orbitOuter} />
            <circle cx="250" cy="250" r="130" className={styles.orbitMiddle} />
            <circle cx="250" cy="250" r="70" className={styles.orbitInner} />
          </g>

          {/* Core Hub: SIGNAL (Central point) */}
          <g transform="translate(250, 250)">
            <circle cx="0" cy="0" r="32" fill="url(#hub-gradient)" />
            <circle cx="0" cy="0" r="6" className={styles.signalHubCore} />
            <circle cx="0" cy="0" r="12" className={styles.signalHubRing} />
            <text x="0" y="-16" className={styles.hubText} textAnchor="middle">SIGNAL</text>
          </g>

          {/* Outer Orbit Group (Rotates very slowly) */}
          <g className={styles.rotatingOuter}>
            {/* Thinking Node */}
            <g transform="translate(250, 60)">
              <circle cx="0" cy="0" r="4.5" className={styles.nodeActive} />
              <line x1="0" y1="0" x2="0" y2="120" className={styles.nodeConnector} />
              <text x="12" y="4" className={styles.nodeLabel}>THINKING</text>
              <text x="12" y="14" className={styles.nodeValue}>IP_CODIFIED</text>
            </g>
            
            {/* Systems Node */}
            <g transform="translate(440, 250)">
              <circle cx="0" cy="0" r="4.5" className={styles.nodeActive} />
              <line x1="0" y1="0" x2="-120" y2="0" className={styles.nodeConnector} />
              <text x="-12" y="-6" className={styles.nodeLabel} textAnchor="end">SYSTEMS</text>
              <text x="-12" y="4" className={styles.nodeValue} textAnchor="end">AUTO_INTAKE</text>
            </g>
          </g>

          {/* Middle Orbit Group (Rotates at a different slow speed) */}
          <g className={styles.rotatingMiddle}>
            {/* Authority Node */}
            <g transform="translate(160, 150)">
              <circle cx="0" cy="0" r="4" className={styles.nodeMuted} />
              <line x1="0" y1="0" x2="90" y2="100" className={styles.nodeConnector} />
              <text x="-10" y="-2" className={styles.nodeLabel} textAnchor="end">AUTHORITY</text>
              <text x="-10" y="8" className={styles.nodeValue} textAnchor="end">INBOUND_PULL</text>
            </g>

            {/* Relationships Node */}
            <g transform="translate(340, 340)">
              <circle cx="0" cy="0" r="4" className={styles.nodeMuted} />
              <line x1="0" y1="0" x2="-90" y2="-90" className={styles.nodeConnector} />
              <text x="10" y="4" className={styles.nodeLabel}>RELATIONSHIPS</text>
              <text x="10" y="14" className={styles.nodeValue}>TRUST_PIPELINE</text>
            </g>
          </g>

          {/* Compass and system readouts */}
          <g className={styles.systemReadouts}>
            <text x="250" y="20" textAnchor="middle">SYSTEMS_ORBITAL_V_0.1</text>
            <text x="480" y="253" textAnchor="end">E_090°</text>
            <text x="250" y="490" textAnchor="middle">AZIMUTH_180°</text>
            <text x="20" y="253" textAnchor="start">W_270°</text>
            
            {/* Diagonal coordinates label */}
            <text x="105" y="115" transform="rotate(45, 105, 115)">VECTOR_SYS_ALIGN</text>
            <text x="395" y="385" transform="rotate(45, 395, 385)">INDEX_SIG_0.1</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
