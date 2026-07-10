"use client";

import styles from "./Diagrams.module.css";

// Helper Component for a premium fine blueprint background grid
function FineGrid() {
  return (
    <g className={styles.fineGrid}>
      <pattern id="diagram-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--text-color)" strokeWidth="0.5" strokeOpacity="0.05" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#diagram-grid)" />
      
      {/* Outer borders and coordinates */}
      <rect width="398" height="238" x="1" y="1" fill="none" stroke="var(--text-color)" strokeWidth="0.5" strokeOpacity="0.1" />
    </g>
  );
}

// Helper Component for subtle glow filters
function GlowFilter() {
  return (
    <defs>
      <filter id="glow-effect" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  );
}

// 1. OBVIOUS CHOICE DIAGRAM: 3-Circle Blueprint System Venn Diagram
export function ObviousChoiceDiagram() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardHeader}>
        <span className={styles.diagNum}>MODEL_01 // SYSTEM_DYNAMICS</span>
        <span className={styles.diagTitle}>Obvious Choice Architecture</span>
      </div>
      <div className={styles.svgContainer}>
        <svg viewBox="0 0 400 320" className={styles.svg} width="100%" height="auto">
          <GlowFilter />
          {/* Fine Grid Background */}
          <g className={styles.fineGrid}>
            <pattern id="oc-grid" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="var(--text-color)" strokeWidth="0.5" strokeOpacity="0.04" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#oc-grid)" />
            <rect width="398" height="318" x="1" y="1" fill="none" stroke="var(--text-color)" strokeWidth="0.5" strokeOpacity="0.08" />
          </g>

          {/* Guide Axis Vectors */}
          <line x1="200" y1="10" x2="200" y2="310" stroke="var(--text-color)" strokeWidth="0.75" strokeDasharray="3, 5" strokeOpacity="0.12" />
          <line x1="10" y1="160" x2="390" y2="160" stroke="var(--text-color)" strokeWidth="0.75" strokeDasharray="3, 5" strokeOpacity="0.12" />
          
          {/* Concentric hairline Venn bounds */}
          <circle cx="160" cy="130" r="75" className={styles.vennCircle} />
          <circle cx="240" cy="130" r="75" className={styles.vennCircle} />
          <circle cx="200" cy="200" r="75" className={styles.vennCircle} />

          {/* Highlighted Intersections */}
          <path d="M 200,130 A 75,75 0 0,0 200,200 A 75,75 0 0,0 200,130" fill="var(--accent-color)" fillOpacity="0.04" filter="url(#glow-effect)" />
          
          {/* Hairline connectors and pointers */}
          <path d="M 160,55 L 120,40 L 90,40" fill="none" stroke="var(--text-muted)" strokeWidth="0.5" strokeOpacity="0.4" />
          <circle cx="160" cy="55" r="2" fill="var(--text-color)" />
          
          <path d="M 240,55 L 280,40 L 310,40" fill="none" stroke="var(--text-muted)" strokeWidth="0.5" strokeOpacity="0.4" />
          <circle cx="240" cy="55" r="2" fill="var(--text-color)" />

          <path d="M 200,275 L 200,295 L 230,295" fill="none" stroke="var(--text-muted)" strokeWidth="0.5" strokeOpacity="0.4" />
          <circle cx="200" cy="275" r="2" fill="var(--text-color)" />

          {/* Text Labels for Outer Hubs */}
          <g>
            <text x="80" y="40" fill="var(--text-color)" className={styles.labelHeading} textAnchor="end">POSITIONING</text>
            <text x="80" y="52" fill="var(--text-muted)" className={styles.labelSub} textAnchor="end">Category design & target context</text>

            <text x="320" y="40" fill="var(--text-color)" className={styles.labelHeading} textAnchor="start">AUTHORITY</text>
            <text x="320" y="52" fill="var(--text-muted)" className={styles.labelSub} textAnchor="start">Codified intellectual assets</text>

            <text x="240" y="295" fill="var(--text-color)" className={styles.labelHeading} textAnchor="start">AI GROWTH SYSTEMS</text>
            <text x="240" y="307" fill="var(--text-muted)" className={styles.labelSub} textAnchor="start">Pipeline automation engines</text>
          </g>

          {/* Core Intersection Node */}
          <g transform="translate(200, 155)">
            <rect x="-65" y="-14" width="130" height="28" rx="4" fill="var(--text-color)" className={styles.centerBadge} />
            <text x="0" y="4" fill="var(--bg-color)" className={styles.centerBadgeText} textAnchor="middle">THE OBVIOUS CHOICE</text>
            
            {/* Core signal locator */}
            <circle cx="0" cy="0" r="20" fill="none" stroke="var(--accent-color)" strokeWidth="0.5" strokeOpacity="0.3" className={styles.radarPing} />
            <circle cx="0" cy="0" r="4" fill="var(--accent-color)" className={styles.centerPoint} />
          </g>

          {/* Dynamic micro-labels in intersections */}
          <g className={styles.intersectionLabels}>
            <text x="200" y="98" textAnchor="middle">Inbound Pull</text>
            <text x="125" y="195" textAnchor="end">Speed Advantage</text>
            <text x="275" y="195" textAnchor="start">Leverage Stack</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

// 2. AUTHORITY LOOP DIAGRAM: Dynamic Circular Feedback System
export function AuthorityLoopDiagram() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardHeader}>
        <span className={styles.diagNum}>MODEL_02 // FEEDBACK_LOOP</span>
        <span className={styles.diagTitle}>Authority Flywheel Loop</span>
      </div>
      <div className={styles.svgContainer}>
        <svg viewBox="0 0 400 240" className={styles.svg} width="100%" height="auto">
          <GlowFilter />
          <FineGrid />

          {/* Background Loop Path */}
          <circle cx="200" cy="120" r="75" className={styles.loopPath} />
          <circle cx="200" cy="120" r="75" className={styles.loopPathActive} filter="url(#glow-effect)" />

          {/* Node 1: Synthesize (Top) */}
          <g transform="translate(145, 12)">
            <rect x="0" y="0" width="110" height="34" rx="2" className={styles.nodeBox} />
            <text x="55" y="14" fill="var(--text-color)" className={styles.nodeLabel} textAnchor="middle">01 // SYNTHESIZE</text>
            <text x="55" y="24" fill="var(--text-muted)" className={styles.nodeLabelMuted} textAnchor="middle">Extract client friction</text>
          </g>

          {/* Node 2: Codify (Right) */}
          <g transform="translate(268, 103)">
            <rect x="0" y="0" width="110" height="34" rx="2" className={styles.nodeBox} />
            <text x="55" y="14" fill="var(--text-color)" className={styles.nodeLabel} textAnchor="middle">02 // CODIFY</text>
            <text x="55" y="24" fill="var(--text-muted)" className={styles.nodeLabelMuted} textAnchor="middle">Squeeze into IP assets</text>
          </g>

          {/* Node 3: Syndicate (Bottom) */}
          <g transform="translate(145, 194)">
            <rect x="0" y="0" width="110" height="34" rx="2" className={styles.nodeBox} />
            <text x="55" y="14" fill="var(--text-color)" className={styles.nodeLabel} textAnchor="middle">03 // SYNDICATE</text>
            <text x="55" y="24" fill="var(--text-muted)" className={styles.nodeLabelMuted} textAnchor="middle">Deploy dispatch channels</text>
          </g>

          {/* Node 4: Convert (Left) */}
          <g transform="translate(22, 103)">
            <rect x="0" y="0" width="110" height="34" rx="2" className={styles.nodeBox} />
            <text x="55" y="14" fill="var(--text-color)" className={styles.nodeLabel} textAnchor="middle">04 // CONVERT</text>
            <text x="55" y="24" fill="var(--text-muted)" className={styles.nodeLabelMuted} textAnchor="middle">Capture inbound calls</text>
          </g>

          {/* Flow Direction Indicators (Marching arrows along paths) */}
          <g className={styles.flowArrows}>
            {/* Arrow Top-Right */}
            <path d="M 215,48 A 75,75 0 0,1 278,92" fill="none" stroke="var(--text-color)" strokeWidth="0.75" strokeOpacity="0.25" />
            {/* Arrow Bottom-Right */}
            <path d="M 278,148 A 75,75 0 0,1 215,192" fill="none" stroke="var(--text-color)" strokeWidth="0.75" strokeOpacity="0.25" />
            {/* Arrow Bottom-Left */}
            <path d="M 185,192 A 75,75 0 0,1 122,148" fill="none" stroke="var(--text-color)" strokeWidth="0.75" strokeOpacity="0.25" />
            {/* Arrow Top-Left */}
            <path d="M 122,92 A 75,75 0 0,1 185,48" fill="none" stroke="var(--text-color)" strokeWidth="0.75" strokeOpacity="0.25" />
          </g>

          {/* Flywheel Core Spec */}
          <g transform="translate(200, 120)">
            <circle cx="0" cy="0" r="16" fill="none" stroke="var(--accent-color)" strokeWidth="0.5" strokeOpacity="0.15" />
            <text x="0" y="3" className={styles.flywheelCoreText} textAnchor="middle">COMPOUNDING</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

// 3. TRUST ENGINE DIAGRAM: Trust Pipeline Decision Tree
export function TrustEngineDiagram() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardHeader}>
        <span className={styles.diagNum}>MODEL_03 // DECISION_TREE</span>
        <span className={styles.diagTitle}>Trust Engine Pipeline</span>
      </div>
      <div className={styles.svgContainer}>
        <svg viewBox="0 0 400 240" className={styles.svg} width="100%" height="auto">
          <GlowFilter />
          <FineGrid />

          {/* Root node */}
          <g transform="translate(145, 15)">
            <rect x="0" y="0" width="110" height="30" rx="2" className={styles.treeNodeActive} />
            <text x="55" y="13" className={styles.textNodeTitle} textAnchor="middle">Client Discovery</text>
            <text x="55" y="23" className={styles.textNodeDesc} textAnchor="middle">Inbound traffic source</text>
          </g>

          {/* Left Path: Commodity Gate */}
          <line x1="200" y1="45" x2="90" y2="85" className={styles.treeLinkDanger} />
          <g transform="translate(35, 85)">
            <rect x="0" y="0" width="110" height="30" rx="2" className={styles.treeNodeDanger} />
            <text x="55" y="13" className={styles.textNodeDangerTitle} textAnchor="middle">Commodity Gate</text>
            <text x="55" y="23" className={styles.textNodeDesc} textAnchor="middle">Rates / RFP evaluation</text>
          </g>
          <text x="130" y="60" fill="#EF4444" className={styles.pathTag} textAnchor="end">NO PUBLIC IP</text>

          {/* Left Sub-Path: Headcount pitch */}
          <line x1="90" y1="115" x2="90" y2="155" className={styles.treeLinkDanger} />
          <g transform="translate(35, 155)">
            <rect x="0" y="0" width="110" height="30" rx="2" className={styles.treeNodeDanger} />
            <text x="55" y="13" className={styles.textNodeDangerTitle} textAnchor="middle">Headcount Pitch</text>
            <text x="55" y="23" className={styles.textNodeDesc} textAnchor="middle">Price comparison wars</text>
          </g>

          {/* Right Path: Authoritative IP Gate */}
          <line x1="200" y1="45" x2="310" y2="85" className={styles.treeLinkActive} />
          <g transform="translate(255, 85)">
            <rect x="0" y="0" width="110" height="30" rx="2" className={styles.treeNodeActive} />
            <text x="55" y="13" className={styles.textNodeTitle} textAnchor="middle">Obvious Choice IP</text>
            <text x="55" y="23" className={styles.textNodeDesc} textAnchor="middle">Inspects framework docs</text>
          </g>
          <text x="270" y="60" fill="var(--accent-color)" className={styles.pathTag} textAnchor="start">INSPECT IP</text>

          {/* Right Sub-Path: Inbound Intake */}
          <line x1="310" y1="115" x2="310" y2="155" className={styles.treeLinkActive} />
          <g transform="translate(255, 155)">
            <rect x="0" y="0" width="110" height="30" rx="2" className={styles.treeNodeActive} />
            <text x="55" y="13" className={styles.textNodeTitle} textAnchor="middle">Inbound Intake</text>
            <text x="55" y="23" className={styles.textNodeDesc} textAnchor="middle">Pre-sold strategic alignment</text>
          </g>

          {/* Convergence / Decision Terminal */}
          <path d="M 90,185 L 150,210" fill="none" stroke="#EF4444" strokeWidth="0.75" strokeDasharray="3, 3" strokeOpacity="0.4" />
          <path d="M 310,185 L 250,210" fill="none" stroke="var(--accent-color)" strokeWidth="0.75" strokeOpacity="0.4" />
          
          <g transform="translate(140, 205)">
            <rect x="0" y="0" width="120" height="22" rx="2" className={styles.outcomeBadge} />
            <text x="60" y="14" fill="var(--text-color)" className={styles.outcomeText} textAnchor="middle">PIPELINE CONTRAST</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

// 4. AI GROWTH STACK DIAGRAM: Layered Architecture System
export function AIGrowthStackDiagram() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardHeader}>
        <span className={styles.diagNum}>MODEL_04 // STACK_INTEGRATION</span>
        <span className={styles.diagTitle}>AI Growth Execution Stack</span>
      </div>
      <div className={styles.svgContainer}>
        <svg viewBox="0 0 400 240" className={styles.svg} width="100%" height="auto">
          <GlowFilter />
          <FineGrid />

          {/* Layer 4 (Top) */}
          <g transform="translate(40, 20)" className={styles.isoGroup}>
            <rect x="0" y="0" width="320" height="36" rx="2" className={styles.isoLayer} />
            <text x="15" y="22" fill="var(--accent-color)" className={styles.isoNum}>04</text>
            <text x="45" y="16" className={styles.isoLabel}>VALIDATION GATE</text>
            <text x="45" y="26" className={styles.isoDesc}>Human Taste & Editorial Strategy (the ultimate filter)</text>
          </g>

          {/* Connector 3-4 */}
          <line x1="200" y1="56" x2="200" y2="70" className={styles.wireLineActive} />

          {/* Layer 3 */}
          <g transform="translate(40, 70)" className={styles.isoGroup}>
            <rect x="0" y="0" width="320" height="36" rx="2" className={styles.isoLayer} />
            <text x="15" y="22" fill="var(--accent-color)" className={styles.isoNum}>03</text>
            <text x="45" y="16" className={styles.isoLabel}>CONTEXT SYNTHESIS ENGINE</text>
            <text x="45" y="26" className={styles.isoDesc}>Large Language Model Processing (Structured API schema calls)</text>
          </g>

          {/* Connector 2-3 */}
          <line x1="200" y1="106" x2="200" y2="120" className={styles.wireLineActive} />

          {/* Layer 2 */}
          <g transform="translate(40, 120)" className={styles.isoGroup}>
            <rect x="0" y="0" width="320" height="36" rx="2" className={styles.isoLayer} />
            <text x="15" y="22" fill="var(--accent-color)" className={styles.isoNum}>02</text>
            <text x="45" y="16" className={styles.isoLabel}>CONTEXT STORAGE (VECTORS)</text>
            <text x="45" y="26" className={styles.isoDesc}>Indexed knowledge base containing founder’s strategic IP</text>
          </g>

          {/* Connector 1-2 */}
          <line x1="200" y1="156" x2="200" y2="170" className={styles.wireLineActive} />

          {/* Layer 1 (Bottom) */}
          <g transform="translate(40, 170)" className={styles.isoGroup}>
            <rect x="0" y="0" width="320" height="36" rx="2" className={styles.isoLayer} />
            <text x="15" y="22" fill="var(--accent-color)" className={styles.isoNum}>01</text>
            <text x="45" y="16" className={styles.isoLabel}>AUTOMATION INGEST PIPELINE</text>
            <text x="45" y="26" className={styles.isoDesc}>Automated triggers, scrapers, vector indexes, and sync cron-jobs</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

// 5. POSITIONING MATRIX DIAGRAM: Beautiful 2-Axis Chart
export function PositioningMatrixDiagram() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardHeader}>
        <span className={styles.diagNum}>MODEL_05 // POSITIONING_MATRIX</span>
        <span className={styles.diagTitle}>Positioning & Leverage Matrix</span>
      </div>
      <div className={styles.svgContainer}>
        <svg viewBox="0 0 400 300" className={styles.svg} width="100%" height="auto">
          <GlowFilter />
          <FineGrid />

          {/* Chart Axes */}
          <line x1="50" y1="250" x2="350" y2="250" stroke="var(--text-color)" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="50" y1="30" x2="50" y2="250" stroke="var(--text-color)" strokeWidth="1.5" strokeOpacity="0.4" />

          {/* Quadrant dashed grid markers */}
          <line x1="200" y1="30" x2="200" y2="250" stroke="var(--text-color)" strokeWidth="0.75" strokeOpacity="0.12" strokeDasharray="4, 4" />
          <line x1="50" y1="140" x2="350" y2="140" stroke="var(--text-color)" strokeWidth="0.75" strokeOpacity="0.12" strokeDasharray="4, 4" />

          {/* Axis Labels */}
          <text x="350" y="265" fill="var(--text-muted)" className={styles.matrixAxisLabel} textAnchor="end">EXECUTION LEVERAGE & VELOCITY →</text>
          <text x="35" y="30" fill="var(--text-muted)" className={styles.matrixAxisLabel} textAnchor="start" transform="rotate(90, 35, 30)">INSIGHT DEPTH & IP CODIFICATION →</text>

          {/* Quadrant 3 (Bottom Left): Commodity Staffing */}
          <g transform="translate(60, 150)" className={styles.matrixQuadrant}>
            <text x="10" y="20" fill="var(--text-color)" fillOpacity="0.45" className={styles.quadrantTitle}>Commodity Staffing</text>
            <text x="10" y="32" fill="var(--text-muted)" className={styles.quadrantDesc}>Hourly rates, headcount wars</text>
            {/* Competitor Nodes */}
            <circle cx="20" cy="55" r="3.5" className={styles.matrixPoint} />
            <circle cx="45" cy="45" r="3" className={styles.matrixPoint} />
            <circle cx="80" cy="60" r="4" className={styles.matrixPoint} />
          </g>

          {/* Quadrant 4 (Bottom Right): Niche Agency */}
          <g transform="translate(210, 150)" className={styles.matrixQuadrant}>
            <text x="10" y="20" fill="var(--text-color)" fillOpacity="0.45" className={styles.quadrantTitle}>Niche Execution Agency</text>
            <text x="10" y="32" fill="var(--text-muted)" className={styles.quadrantDesc}>Selling speed & labor</text>
            <circle cx="40" cy="50" r="4.5" className={styles.matrixPoint} />
            <circle cx="65" cy="70" r="3" className={styles.matrixPoint} />
          </g>

          {/* Quadrant 2 (Top Left): Advisory Consultant */}
          <g transform="translate(60, 40)" className={styles.matrixQuadrant}>
            <text x="10" y="20" fill="var(--text-color)" fillOpacity="0.45" className={styles.quadrantTitle}>Pure Advisory</text>
            <text x="10" y="32" fill="var(--text-muted)" className={styles.quadrantDesc}>Deep insights, low scale leverage</text>
            <circle cx="70" cy="55" r="4" className={styles.matrixPoint} />
          </g>

          {/* Quadrant 1 (Top Right): Systemized Authority Partner */}
          <g transform="translate(210, 40)" className={styles.matrixQuadrant}>
            <text x="10" y="20" fill="var(--accent-color)" className={styles.quadrantTitleActive}>Systemized Authority</text>
            <text x="10" y="32" fill="var(--text-color)" className={styles.quadrantDescActive}>Obvious choice, scalable assets</text>
            
            {/* Guide vectors for core node */}
            <line x1="90" y1="60" x2="90" y2="40" stroke="var(--accent-color)" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2, 2" />
            <line x1="90" y1="60" x2="110" y2="60" stroke="var(--accent-color)" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2, 2" />
            
            {/* Highlighted active target node */}
            <circle cx="90" cy="60" r="12" fill="none" stroke="var(--accent-color)" strokeWidth="0.5" strokeOpacity="0.35" className={styles.radarPing} />
            <circle cx="90" cy="60" r="5" fill="var(--accent-color)" className={styles.matrixPointActive} filter="url(#glow-effect)" />
          </g>
        </svg>
      </div>
    </div>
  );
}
