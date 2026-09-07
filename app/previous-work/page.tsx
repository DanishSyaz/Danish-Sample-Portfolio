"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { caseStudiesData, CaseStudy } from "./case-studies";

const filterCategories = [
  "all",
  "Consulting & Strategy",
  "Data Analytics",
  "Systems & Engineering",
  "Research & Modeling",
] as const;

export default function PreviousWorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCaseStudy(null);
      }
    };
    if (selectedCaseStudy) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCaseStudy]);

  const filteredProjects =
    activeFilter === "all"
      ? caseStudiesData
      : caseStudiesData.filter((project) => project.category === activeFilter);

  return (
    <div className="w-full max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header & Filter Controls */}
      <div className="flex flex-col gap-3 mb-8 sm:mb-12">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider text-xs font-semibold">
            Proof of Competence &amp; Execution
          </span>
        </div>
        <h1 className="font-display-hero text-headline-xl sm:text-display-hero text-on-surface tracking-tight">
          Previous Work &amp; Technical Case Studies
        </h1>
        <p className="font-body-lead text-body-lead text-on-surface-variant max-w-3xl text-sm sm:text-base">
          Representative portfolio of high-impact engagements spanning Technical Consulting advisory, Data Analytics architectures, and rigorous Computer Science systems engineering.
        </p>

        {/* Filter Toolbar */}
        <div className="mt-4 p-3 sm:p-4 rounded-xl bg-surface-container-low shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat;
              const label =
                cat === "all" ? `All Projects (${caseStudiesData.length})` : cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-2 rounded-lg font-label-bold text-label-bold text-xs whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-primary text-on-primary shadow-sm"
                      : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 shrink-0 text-on-surface-variant font-label-code text-label-code text-xs bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
            <span className="material-symbols-outlined text-[16px] text-tertiary">
              verified
            </span>
            <span>Verified Engagements</span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden"
          >
            {/* Visual Thumbnail */}
            <div className="relative w-full h-48 bg-surface-container overflow-hidden">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-md shadow-sm">
                <span className="font-label-code text-label-code text-primary font-semibold text-[11px]">
                  {project.category}
                </span>
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-md text-on-surface-variant font-label-code text-label-code text-[11px]">
                {project.year}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-1 justify-between gap-4">
              <div className="space-y-2">
                <span className="font-label-caps text-label-caps text-tertiary font-semibold uppercase tracking-wider text-[11px]">
                  {project.roleTitle}
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors text-base font-bold">
                  {project.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 text-xs leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-surface-container-low font-label-code text-label-code text-secondary text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(project)}
                  className="w-full pt-2 flex items-center justify-between font-label-bold text-label-bold text-primary hover:text-on-primary-fixed-variant transition-colors group/link text-xs border-t border-outline-variant"
                >
                  <span>View Detailed Case Study</span>
                  <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Proof of Code Quality Banner */}
      <div className="mt-12 p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[28px]">
              query_stats
            </span>
          </div>
          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Data-Backed Deliverables &amp; Production Code
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">
              Each case study is accompanied by sanitized architecture documents, benchmark test cases, and reproducible ETL notebooks.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            className="px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-bold text-label-bold text-on-surface transition-colors flex items-center gap-2 text-xs"
            href="https://github.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span>View Source Repos</span>
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 relative overflow-hidden rounded-2xl bg-surface-container-high p-8 sm:p-12 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="relative z-10 max-w-xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-primary font-label-caps text-label-caps uppercase tracking-wider text-xs font-semibold">
            <span className="material-symbols-outlined text-[14px]">
              handshake
            </span>
            <span>Consulting &amp; Advisory</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">
            Have a specific project or technical challenge in mind?
          </h2>
          <p className="font-body-default text-body-default text-on-surface-variant text-sm">
            Whether you need end-to-end analytics warehousing, distributed performance optimizations, or an independent architectural review, I am ready to accelerate your engineering outcomes.
          </p>
        </div>
        <div className="relative z-10 shrink-0">
          <Link
            href="/contact-me"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-bold text-label-bold transition-all shadow-md hover:shadow-lg text-sm"
          >
            <span>Discuss Your Project with Me</span>
            <span className="material-symbols-outlined text-[20px]">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
      </div>

      {/* MODAL DIALOG */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-on-surface/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-surface-container-lowest rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-surface-container-low flex items-center justify-between sticky top-0 z-20 border-b border-outline-variant">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md font-label-code text-label-code bg-primary-fixed text-primary font-semibold text-xs">
                  {selectedCaseStudy.category}
                </span>
                <span className="font-label-code text-label-code text-on-surface-variant text-xs">
                  {selectedCaseStudy.meta}
                </span>
              </div>
              <button
                type="button"
                aria-label="Close Case Study"
                className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors"
                onClick={() => setSelectedCaseStudy(null)}
              >
                <span className="material-symbols-outlined text-[20px]">
                  close
                </span>
              </button>
            </div>

            {/* Modal Scroll Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface mb-2">
                  {selectedCaseStudy.title}
                </h2>
                <p className="font-body-lead text-body-lead text-on-surface-variant text-sm sm:text-base leading-relaxed">
                  {selectedCaseStudy.executiveSummary}
                </p>
              </div>

              {/* 4-Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-surface-container-low">
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-[10px]">
                    Timeline
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-sm sm:text-base">
                    {selectedCaseStudy.timeline}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-[10px]">
                    Impact Delta
                  </span>
                  <span className="font-headline-sm text-headline-sm text-tertiary font-bold text-sm sm:text-base">
                    {selectedCaseStudy.impact}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-[10px]">
                    Stakeholders
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-sm sm:text-base">
                    {selectedCaseStudy.stakeholders}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-[10px]">
                    Deployment
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold text-sm sm:text-base">
                    {selectedCaseStudy.deployment}
                  </span>
                </div>
              </div>

              {/* Challenge & Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface-container-low space-y-2">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <span className="material-symbols-outlined text-[20px]">
                      help_center
                    </span>
                    <h4>Section B: Challenge &amp; Objectives</h4>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-xs leading-relaxed">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low space-y-2">
                  <div className="flex items-center gap-2 text-tertiary font-semibold text-sm">
                    <span className="material-symbols-outlined text-[20px]">
                      badge
                    </span>
                    <h4>Section C: My Role &amp; Responsibilities</h4>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-xs leading-relaxed">
                    {selectedCaseStudy.role}
                  </p>
                </div>
              </div>

              {/* Approach */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-on-surface font-semibold text-sm">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    account_tree
                  </span>
                  <h4>Section D: Approach &amp; Methodologies</h4>
                </div>
                <p className="font-body-default text-body-default text-on-surface-variant text-sm leading-relaxed">
                  {selectedCaseStudy.approach}
                </p>
              </div>

              {/* Tools & Tech */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-on-surface font-semibold text-sm">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    integration_instructions
                  </span>
                  <h4>Section E: Tools &amp; Technologies Stack</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded bg-surface-container font-label-code text-label-code text-secondary font-medium text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="p-4 sm:p-6 rounded-xl bg-surface-container-high space-y-3">
                <div className="flex items-center gap-2 text-tertiary font-semibold text-sm">
                  <span className="material-symbols-outlined text-[22px]">
                    trending_up
                  </span>
                  <h4>Section F: Quantified Outcomes / Deliverables</h4>
                </div>
                <ul className="space-y-2 font-body-default text-body-default text-on-surface text-sm">
                  {selectedCaseStudy.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[18px] text-tertiary mt-0.5 shrink-0">
                        check_circle
                      </span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learnings */}
              <div className="p-4 rounded-xl bg-surface-container-low space-y-2">
                <div className="flex items-center gap-2 text-on-surface font-semibold text-sm">
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    psychology
                  </span>
                  <h4>Section G: Key Learnings &amp; Takeaways</h4>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs leading-relaxed">
                  {selectedCaseStudy.learnings}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-outline-variant">
              <span className="font-label-code text-label-code text-on-surface-variant text-xs">
                End of Case Study Documentation
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container font-label-bold text-label-bold text-on-surface transition-colors text-xs"
                  onClick={() => setSelectedCaseStudy(null)}
                >
                  Close View
                </button>
                <Link
                  href="/contact-me"
                  className="px-4 py-2 rounded-lg bg-primary hover:bg-on-primary-fixed-variant font-label-bold text-label-bold text-on-primary transition-colors text-xs"
                >
                  Consult on Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
