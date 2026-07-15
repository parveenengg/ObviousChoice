"use client";

import styles from "./FilmGrain.module.css";

export default function FilmGrain() {
  return (
    <div className={styles.grain} aria-hidden="true">
      <svg width="0" height="0">
        <filter id="film-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
    </div>
  );
}
