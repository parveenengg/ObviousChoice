"use client";

import { useState } from "react";
import styles from "./StrategyForm.module.css";
import { trackEvent } from "@/utils/analytics";

export default function StrategyForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      challenge: formData.get("challenge"),
    };

    try {
      const response = await fetch("/api/strategy-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit.");
      }

      setStatus("success");
      trackEvent("book_strategy_call", { location: "contact_page" });
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "An error occurred. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successState}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.successIcon}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h3>Request Received.</h3>
        <p>We will review your context and reach out within 24 hours to schedule the strategy call.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {status === "error" && (
        <div className={styles.errorState} role="alert">
          {errorMsg || "An error occurred. Please try again."}
        </div>
      )}

      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input type="text" id="name" name="name" className={styles.input} required aria-required="true" disabled={status === "loading"} />
      </div>
      
      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>Work Email</label>
        <input type="email" id="email" name="email" className={styles.input} required aria-required="true" disabled={status === "loading"} />
      </div>

      <div className={styles.field}>
        <label htmlFor="phone" className={styles.label}>Phone Number</label>
        <input type="tel" id="phone" name="phone" className={styles.input} placeholder="+1 (555) 000-0000" disabled={status === "loading"} />
      </div>
      
      <div className={styles.field}>
        <label htmlFor="company" className={styles.label}>Company & URL</label>
        <input type="text" id="company" name="company" className={styles.input} required aria-required="true" disabled={status === "loading"} />
      </div>

      <div className={styles.field}>
        <label htmlFor="challenge" className={styles.label}>What is the primary challenge driving you to reach out today?</label>
        <textarea id="challenge" name="challenge" className={styles.textarea} required aria-required="true" disabled={status === "loading"}></textarea>
      </div>

      <button 
        type="submit" 
        className={styles.submitBtn} 
        disabled={status === "loading"}
        aria-disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Request Strategy Call"}
      </button>
    </form>
  );
}
