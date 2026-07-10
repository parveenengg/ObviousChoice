"use client";

import { useState, FormEvent } from "react";
import styles from "./NewsletterForm.module.css";
import { Check, ArrowRight } from "lucide-react";

interface NewsletterFormProps {
  buttonText?: string;
  placeholder?: string;
}

export default function NewsletterForm({
  buttonText = "Subscribe",
  placeholder = "Your professional email...",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      // Mock API call
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>
          <Check size={16} />
        </div>
        <p className={styles.successText}>You&apos;re subscribed. Welcome to the loop.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputWrapper}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder={placeholder}
          className={`${styles.input} ${status === "error" ? styles.inputError : ""}`}
          disabled={status === "loading"}
          required
        />
        <button
          type="submit"
          className={styles.submitBtn}
          disabled={status === "loading" || !email}
          aria-label="Subscribe"
        >
          {status === "loading" ? (
            <div className={styles.spinner} />
          ) : (
            <ArrowRight size={16} />
          )}
        </button>
      </div>
      {status === "error" && <p className={styles.errorText}>{errorMessage}</p>}
    </form>
  );
}
