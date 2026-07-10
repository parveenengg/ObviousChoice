"use client";

import { useState } from "react";
import { Camera } from "lucide-react";
import styles from "./ScreenshotCTA.module.css";

export default function ScreenshotCTA() {
  const [loading, setLoading] = useState(false);

  const captureFullPage = async () => {
    if (loading) return;
    setLoading(true);

    try {
      // Dynamic import to support SSR out of the box in Next.js
      const html2canvas = (await import("html2canvas")).default;

      // Save active scroll offsets
      const savedX = window.scrollX;
      const savedY = window.scrollY;

      // Reset scroll position to top to capture complete layout bounds
      window.scrollTo(0, 0);

      // Settle frame layout transitions
      await new Promise((resolve) => setTimeout(resolve, 200));

      const element = document.documentElement;

      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: true,
        logging: false,
        scale: 2, // Capture at 2x pixel ratio for high-res crisp typography
        backgroundColor: getComputedStyle(document.documentElement)
          .getPropertyValue("--bg-color")
          .trim() || "#FEFEFF",
      });

      // Restore user scroll position
      window.scrollTo(savedX, savedY);

      // Create download pipeline
      const dataUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.download = `parveen-fullpage-${new Date().toISOString().split("T")[0]}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      setLoading(false);
    } catch (error) {
      console.error("Full-page capture execution failed:", error);
      setLoading(false);
    }
  };

  return (
    <button
      onClick={captureFullPage}
      className={styles.button}
      disabled={loading}
      aria-label="Capture full website screenshot"
      title="Capture full website screenshot"
    >
      {loading ? (
        <span className={styles.loader}>Capturing...</span>
      ) : (
        <>
          <Camera size={16} className={styles.icon} />
          <span className={styles.text}>Capture Site</span>
        </>
      )}
    </button>
  );
}
