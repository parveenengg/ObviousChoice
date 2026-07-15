"use client";

import { useState } from "react";
import styles from "./JournalForm.module.css";
import { trackEvent } from "@/utils/analytics";

export default function JournalForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    
    setTimeout(() => {
      setStatus("success");
      trackEvent("journal_signup", { location: "thinking_page" });
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className={styles.successState}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>Subscribed. Welcome to the Journal.</span>
      </div>
    );
  }

  return (
    <div>
      <form className={styles.journalForm} onSubmit={handleSubmit} noValidate>
        <label htmlFor="journalEmail" className="sr-only">Email address for Journal</label>
        <input 
          type="email" 
          id="journalEmail"
          name="email"
          placeholder="Email address" 
          className={styles.journalInput} 
          required 
          aria-required="true"
          disabled={status === "loading"}
        />
        <button 
          type="submit" 
          className={styles.journalButton}
          disabled={status === "loading"}
          aria-disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <div className={styles.errorState} role="alert">
          {errorMsg || "An error occurred. Please try again."}
        </div>
      )}
    </div>
  );
}
