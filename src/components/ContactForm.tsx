"use client";

import { useState, FormEvent } from "react";
import styles from "./ContactForm.module.css";
import { Check, Calendar, Mail, FileText } from "lucide-react";

export default function ContactForm() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    challenge: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.company || !formData.challenge || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          website: "",
          challenge: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit. Please try again.");
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
          <Check size={24} />
        </div>
        <h3 className={styles.successTitle}>Conversation Initiated</h3>
        <p className={styles.successText}>
          Thank you. Your inquiry has been received. I will review your challenge and respond personally within 24 hours.
        </p>
        <button className="btn btn-secondary" onClick={() => { setStatus("idle"); setShowForm(false); }} style={{ marginTop: "1rem" }}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className={styles.contactWrapper}>
      {/* Choice Panel */}
      <div className={styles.choicesGrid}>
        {/* Option 1: Calendar Booking */}
        <div className={`${styles.choiceCard} ${!showForm ? styles.activeChoice : ""}`} onClick={() => setShowForm(false)}>
          <div className={styles.choiceIcon}>
            <Calendar size={20} />
          </div>
          <div className={styles.choiceBody}>
            <h4 className={styles.choiceTitle}>Book Strategy Call</h4>
            <p className={styles.choiceDesc}>15-minute alignment call to inspect your positioning model.</p>
          </div>
          <a href="mailto:parveenmakwana02@gmail.com?subject=Strategic%20Alignment%20Request" className={`btn btn-primary ${styles.choiceBtn}`}>
            BOOK CALL <Calendar size={14} style={{ marginLeft: "0.5rem" }} />
          </a>
        </div>

        {/* Option 2: Project Inquiry Form */}
        <div className={`${styles.choiceCard} ${showForm ? styles.activeChoice : ""}`} onClick={() => setShowForm(true)}>
          <div className={styles.choiceIcon}>
            <FileText size={20} />
          </div>
          <div className={styles.choiceBody}>
            <h4 className={styles.choiceTitle}>Send Inquiry</h4>
            <p className={styles.choiceDesc}>Detail your specific operational or positioning challenge.</p>
          </div>
          <button className={`btn btn-secondary ${styles.choiceBtn}`}>
            WRITE MESSAGE <Mail size={14} style={{ marginLeft: "0.5rem" }} />
          </button>
        </div>
      </div>

      {/* Slide-out Inquiry Form */}
      <div className={`${styles.formDrawer} ${showForm ? styles.drawerOpen : ""}`}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Parveen Kumar"
                className={styles.input}
                required={showForm}
                disabled={status === "loading"}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className={styles.input}
                required={showForm}
                disabled={status === "loading"}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>
                Company <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Corp"
                className={styles.input}
                required={showForm}
                disabled={status === "loading"}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="website" className={styles.label}>
                Website <span className={styles.mutedLabel}>(Optional)</span>
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://company.com"
                className={styles.input}
                disabled={status === "loading"}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="challenge" className={styles.label}>
              What is your biggest positioning or system bottleneck? <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="challenge"
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              placeholder="E.g., We are commoditized, or We need AI systems..."
              className={styles.input}
              required={showForm}
              disabled={status === "loading"}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message <span className={styles.required}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Provide a brief context on your business model..."
              className={styles.textarea}
              required={showForm}
              disabled={status === "loading"}
            />
          </div>

          {status === "error" && <div className={styles.error}>{errorMessage}</div>}

          <div className={styles.formActions}>
            <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Submit Inquiry"}
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
