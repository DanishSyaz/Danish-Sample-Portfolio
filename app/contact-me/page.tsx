"use client";

import React, { useState } from "react";

export default function ContactMePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    inquiryType: "Full-Time Opportunity",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const defaultEmail = "[YOUR.EMAIL@DOMAIN.COM]";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(defaultEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please provide your name or organization title.";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Please provide a valid corporate or professional email.";
    }
    if (!formData.subject.trim()) {
      errs.subject = "Please input a subject matter.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please enter your message or project requirements.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate dispatch to priority queue
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      company: "",
      inquiryType: "Full-Time Opportunity",
      subject: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="relative w-full max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Background Ambience Glows */}
      <div className="absolute top-12 right-6 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-96 left-0 w-80 h-80 bg-secondary-container/10 rounded-full blur-2xl pointer-events-none -z-10"></div>

      {/* SECTION 1: HEADER & SLA STRIP */}
      <header className="mb-10 sm:mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-surface-container text-primary font-label-code text-label-code font-semibold text-xs">
            05
          </span>
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest text-xs font-semibold">
            Connect &amp; Engage
          </span>
          <div className="h-[1px] w-12 bg-outline-variant"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8 space-y-3">
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Get In Touch
            </h1>
            <p className="font-body-lead text-body-lead text-on-surface-variant max-w-2xl text-sm sm:text-base">
              Interested in discussing full-time opportunities, consulting engagements, or technical advisory? I welcome professional inquiries and recruiter connections.
            </p>
          </div>

          {/* Recruiter SLA Banner */}
          <div className="lg:col-span-4 bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-start gap-3">
            <div className="p-2 rounded-lg bg-surface-container-low text-tertiary shrink-0">
              <span className="material-symbols-outlined text-[20px]">schedule</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-bold text-label-bold text-on-surface text-xs font-semibold">
                Verified Response SLA
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                Within 24–48 business hours &bull; Available for video introduction or initial technical screen.
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2: TWO-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Channels & Status */}
        <aside className="lg:col-span-5 space-y-6">
          {/* Status Card */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-xs">
                Candidate Status
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-tertiary font-label-caps text-label-caps font-semibold text-xs">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                Active Search
              </span>
            </div>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold text-base">
                Actively Reviewing Opportunities
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 text-xs">
                Evaluating direct-hire enterprise positions and high-impact consulting retained mandates.
              </p>
            </div>
            <div className="pt-2 space-y-3">
              <div className="bg-surface-container-low p-3 rounded-lg">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase block mb-1 text-[10px]">
                  Target Roles
                </span>
                <p className="font-body-sm text-body-sm text-on-surface font-semibold text-xs">
                  Technical Consultant, Solutions Architect, Senior Data Analytics Specialist, Technical Project Lead
                </p>
              </div>
              <div className="flex items-center justify-between py-1 text-on-surface text-xs">
                <span className="text-on-surface-variant">Work Authorization</span>
                <span className="font-label-code text-label-code bg-surface-container px-2 py-0.5 rounded text-[11px]">
                  [Citizen / Permanent Resident]
                </span>
              </div>
              <div className="flex items-center justify-between py-1 text-on-surface text-xs">
                <span className="text-on-surface-variant">Relocation Policy</span>
                <span className="font-label-bold text-label-bold text-primary font-semibold">
                  Open to Relocation / Hybrid
                </span>
              </div>
            </div>
          </div>

          {/* Direct Channels Card */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center justify-between text-base font-bold">
              <span>Direct Channels</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs font-normal">
                Encrypted &amp; Direct
              </span>
            </h2>

            {/* Email Channel with Copy Trigger */}
            <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between gap-2 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                  mail
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[10px]">
                    Email Channel
                  </span>
                  <span className="font-label-code text-label-code text-on-surface truncate font-semibold text-xs">
                    {defaultEmail}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-all active:scale-95 text-xs font-semibold"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copiedEmail ? "check" : "content_copy"}
                </span>
                <span>{copiedEmail ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* Network Links List */}
            <ul className="space-y-2">
              <li>
                <a
                  className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-between group"
                  href="https://linkedin.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      share
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[10px]">
                        Professional Network
                      </span>
                      <span className="font-label-code text-label-code text-on-surface group-hover:text-primary font-medium transition-colors text-xs">
                        linkedin.com/in/[YOUR-LINKEDIN]
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[18px] group-hover:translate-x-0.5 transition-transform">
                    open_in_new
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-between group"
                  href="https://github.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface text-[20px]">
                      terminal
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[10px]">
                        Code &amp; Pipeline Repos
                      </span>
                      <span className="font-label-code text-label-code text-on-surface group-hover:text-primary font-medium transition-colors text-xs">
                        github.com/[YOUR-USERNAME]
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[18px] group-hover:translate-x-0.5 transition-transform">
                    open_in_new
                  </span>
                </a>
              </li>
            </ul>

            {/* Geographic & Timezone Specs */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-surface-container-low">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase block mb-1 text-[10px]">
                  Base Location
                </span>
                <div className="flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface font-medium text-xs">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    location_on
                  </span>
                  <span className="truncate">[City, Country]</span>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant block mt-1 text-[10px]">
                  Hybrid / Remote
                </span>
              </div>
              <div className="p-3 rounded-lg bg-surface-container-low">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase block mb-1 text-[10px]">
                  Operating Zone
                </span>
                <div className="flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface font-medium text-xs">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    schedule
                  </span>
                  <span className="truncate">[EST / GMT+8]</span>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant block mt-1 text-[10px]">
                  Global Overlap Ready
                </span>
              </div>
            </div>
          </div>

          {/* Quick Directive Card */}
          <div className="bg-surface-container p-5 rounded-xl flex items-start gap-4">
            <div className="p-2 rounded-lg bg-surface-container-lowest text-primary shadow-sm shrink-0">
              <span className="material-symbols-outlined text-[22px]">badge</span>
            </div>
            <div>
              <span className="font-label-bold text-label-bold text-on-surface block text-xs font-bold">
                Recruiter Quick Reference
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 text-xs">
                Recruiters: Feel free to reach out directly via LinkedIn or the message form for my comprehensive CV, verified references, and project code repositories.
              </p>
            </div>
          </div>
        </aside>

        {/* Right Column: Contact Form */}
        <main className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="border-b border-outline-variant pb-6 mb-6">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Send a Direct Message
              </h2>
              <span className="font-label-code text-label-code text-primary bg-primary-fixed px-2.5 py-1 rounded text-xs font-semibold">
                Priority Queue
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 text-xs">
              Fill out the brief dispatch form below. All incoming messages are immediately routed to my verified professional inbox.
            </p>
          </div>

          {/* Success Notification Box */}
          {isSubmitted ? (
            <div className="p-6 rounded-xl bg-surface-container-low shadow-sm space-y-4 animate-in fade-in duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-surface-container-high text-tertiary shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    check_circle
                  </span>
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-base">
                    Message Received &amp; Queued
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-xs leading-relaxed">
                    Thank you, {formData.fullName}! Your inquiry has been received. I will review your note and respond within 1&ndash;2 business days.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="font-label-bold text-label-bold text-primary hover:underline inline-flex items-center gap-1.5 text-xs font-semibold"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        restart_alt
                      </span>
                      <span>Send another inquiry</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label
                    htmlFor="fullName"
                    className="block font-label-bold text-label-bold text-on-surface text-xs"
                  >
                    Full Name <span className="text-error">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Jane Doe (Hiring Manager)"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary shadow-sm transition-all text-xs"
                  />
                  {errors.fullName && (
                    <p className="font-body-sm text-[0.75rem] text-error">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Professional Email */}
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block font-label-bold text-label-bold text-on-surface text-xs"
                  >
                    Professional Email <span className="text-error">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="jane.doe@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary shadow-sm transition-all text-xs"
                  />
                  {errors.email && (
                    <p className="font-body-sm text-[0.75rem] text-error">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Organization */}
                <div className="space-y-1">
                  <label
                    htmlFor="company"
                    className="block font-label-bold text-label-bold text-on-surface text-xs"
                  >
                    Organization / Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="e.g. Enterprise Corp / Tech Consulting"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary shadow-sm transition-all text-xs"
                  />
                </div>

                {/* Inquiry Type */}
                <div className="space-y-1">
                  <label
                    htmlFor="inquiryType"
                    className="block font-label-bold text-label-bold text-on-surface text-xs"
                  >
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <select
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                      className="w-full appearance-none px-3.5 py-2.5 pr-10 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary shadow-sm transition-all cursor-pointer text-xs"
                    >
                      <option value="Full-Time Opportunity">Full-Time Opportunity</option>
                      <option value="Technical Consulting Project">
                        Technical Consulting Project
                      </option>
                      <option value="Contract / Advisory">Contract / Advisory</option>
                      <option value="General Recruiter Inquiry">
                        General Recruiter Inquiry
                      </option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-outline text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label
                  htmlFor="subject"
                  className="block font-label-bold text-label-bold text-on-surface text-xs"
                >
                  Subject <span className="text-error">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g. Technical Consultant Engagement at [Company]"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary shadow-sm transition-all text-xs"
                />
                {errors.subject && (
                  <p className="font-body-sm text-[0.75rem] text-error">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block font-label-bold text-label-bold text-on-surface text-xs"
                >
                  Message &amp; Project Scope <span className="text-error">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Briefly describe the initiative, required deliverables, team structure, or candidate timeline..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary shadow-sm transition-all text-xs"
                ></textarea>
                {errors.message && (
                  <p className="font-body-sm text-[0.75rem] text-error">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-between">
                <span className="font-body-sm text-[11px] text-on-surface-variant">
                  Encrypted SSL &bull; Strict confidentiality
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-on-primary-fixed-variant disabled:opacity-50 text-on-primary font-label-bold text-label-bold text-xs transition-colors shadow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span>
                      <span>Dispatching...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Direct Inquiry</span>
                      <span className="material-symbols-outlined text-[18px]">
                        send
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}
